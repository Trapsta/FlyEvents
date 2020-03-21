/**
 *
 * EventPage
 *
 */

import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import styled from 'styled-components';
import classnames from 'classnames';

import { useInjectSaga } from 'utils/injectSaga';

import NavigationBar from '../../components/NavigationBar';
import SectionTitle from '../../components/SectionTitle';
import EventCard from '../../components/EventCard';
import StarRating from '../../components/StarRating';
import EventContentBlock from '../../components/EventContentBlock';
import EventCarousel from '../../components/EventCarousel';
import EventBreadCrumbs from '../../components/EventBreadCrumbs';
import PageContentBlock from '../../components/PageContentBlock';
import RoundedButton from '../../components/RoundedButton';
import Footer from '../../components/Footer';
import LoadingDots from '../../components/LoadingDots';
import { Container, Row, Col } from 'reactstrap';
import {
  EditIcon,
  HeartOpen,
  HeartFilled,
  GroupIcon,
  StarIcon,
  StarIconLine,
  FbIcon,
  MessengerIcon,
  InstagramIcon,
  WhatsappIcon,
  TwitterIcon,
  CopyIcon,
  WeChatIcon,
  SmsIcon,
} from '../../components/Icons';
import EventComment from '../../components/EventComment';
import CounterControl from '../../components/CounterControl';
import { useScrollPosition } from '../../utils/hooks';
import { loadEvents } from '../App/actions';
import saga from '../HomePage/saga';
import {
  makeSelectEvents,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import { createStructuredSelector } from 'reselect';
import injectSaga from 'utils/injectSaga';
import moment from 'moment';
import { injectIntl } from 'react-intl';

const key = 'eventPage';

export function EventPage({
  loading,
  error,
  events,
  fetchEvents,
  match,
  intl,
}) {
  const [scrollHeight, setScrollHeight] = useState(491);
  const [fixedTicketsBar, setFixedTicketsBar] = useState(false);
  const [fixedTicketsBarPos, setFixedTicketsBarPos] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [inWishlist, setInWishlist] = useState(false);

  const [ticketsState, setTicketsState] = useState(1);
  const [ratingsState, setRatingsState] = useState(0);
  const [commentsState, setCommentsState] = useState(false);

  const TicketsRef = useRef(null);
  const RecommendRef = useRef(null);

  const rateEvent = rating => {
    setRatingsState(rating);
  };

  const showComments = () => {
    console.log('show all');
    setCommentsState(!commentsState);
  };

  const addTickets = () => {
    if (ticketsState < 10) {
      setTicketsState(ticketsState + 1);
    }
  };

  const removeTickets = () => {
    if (ticketsState > 1) {
      setTicketsState(ticketsState - 1);
    }
  };

  const toggleWishlist = () => {
    setInWishlist(!inWishlist);
  };

  const TICKET_OFFSET = 72;
  const TICKET_HEIGHT = 560;

  /* Util function to get height of Tickets booking block */
  const getBookBlockHeight = () => {
    if (TicketsRef) {
      return TicketsRef.current.getBoundingClientRect().height + TICKET_OFFSET;
    }
    return TICKET_HEIGHT - TICKET_OFFSET;
  };

  /* Util function to get lower barrier for the tickets bar */
  const getRecommendOffset = () => {
    if (RecommendRef) {
      return RecommendRef.current.offsetTop;
    }
  };

  /* hook to listen to scroll event and make tickets bar sticky */
  useScrollPosition(
    ({ prevPos, currPos }) => {
      const bookHeight = getBookBlockHeight();
      const offset = getRecommendOffset();

      if (currPos.y < offset - bookHeight && currPos.y > TICKET_OFFSET) {
        setFixedTicketsBar(true);
      } else {
        setFixedTicketsBar(false);
      }
    },
    [scrollHeight],
    null,
    true,
    50,
  );

  useEffect(() => {
    if (events === undefined || events === false) {
      fetchEvents();
    }
  }, []);

  const event = events.data
    ? events.data.find(el => el.slug === match.params.slug)
    : undefined;

  const CSS = {
    EventPageContainer: 'event-page-container',
    EventTickets: 'events-ticket-info',
    EventTicketsContainer: 'events-ticket-container',
    EventTicketsContainerFixed: 'events-ticket-container-fixed',
    EventBookingBlock: 'event-booking-block',
    EventBlock: 'event-info-block',
    EditEvent: 'edit-event',
    EventWishlist: 'add-wishlist',
    EventActive: 'active',
    EventActions: 'event-actions',
    CenterBtn: 'center-btn',
    EventBooking: 'event-booking',
    EventBookingHeader: 'event-booking-header',
    EventTitle: 'event-title',
    EventName: 'event-name',
    EventMeta: 'event-meta',
    EventOrganizer: 'event-organizer',
    EventOrganizerAvatar: 'event-organizer-avatar',
    RateEvent: 'rate-event',
    EventAttendees: 'event-attendees',
    BasicEventInfo: 'basic-event-info',
    SelectTickets: 'event-select-tickets',
    PriceSummary: 'price-summary',
    EventShareBlock: 'events-share-block',
  };

  return (
    <EventPageWrapper>
      <Helmet>
        <title>EventPage</title>
        <meta name="description" content="Description of EventPage" />
      </Helmet>
      <NavigationBar />

      {loading && <LoadingDots />}

      {event && (
        <section className={CSS.EventPageContainer}>
          <PageContentBlock>
            <div className={CSS.EventTickets}>
              <div
                className={classnames(CSS.EventTicketsContainer, {
                  [CSS.EventTicketsContainerFixed]: fixedTicketsBar,
                })}
                style={{
                  top: fixedTicketsBar ? '0' : `${fixedTicketsBarPos}px`,
                }}
              >
                <span className={CSS.EditEvent}>
                  Edit this event? <EditIcon width="18" height="18" />
                </span>
                <div className={CSS.EventBookingBlock} ref={TicketsRef}>
                  <div className={CSS.EventBooking}>
                    <div className={CSS.EventBookingHeader}>
                      <div className={CSS.EventTitle}>
                        <div className={CSS.EventName}>{event.name}</div>
                        <div className={CSS.EventMeta}>
                          submitted <span> {event.created_date} </span> by{' '}
                          <span> {event.organizer} </span>
                        </div>
                      </div>
                      <div className={CSS.EventOrganizer}>
                        <div className={CSS.EventOrganizerAvatar}>
                          {event.organizer.charAt(0)}{' '}
                        </div>
                      </div>
                    </div>
                    <div className={CSS.RateEvent}>
                      <label>Rate this Event:</label>
                      {ratingsState < 1 ? (
                        <div>
                          <StarIconLine
                            width={15}
                            height={15}
                            onClick={() => {
                              rateEvent(1);
                            }}
                          />
                          <StarIconLine
                            width={15}
                            height={15}
                            onClick={() => {
                              rateEvent(2);
                            }}
                          />
                          <StarIconLine
                            width={15}
                            height={15}
                            onClick={() => {
                              rateEvent(3);
                            }}
                          />
                          <StarIconLine
                            width={15}
                            height={15}
                            onClick={() => {
                              rateEvent(4);
                            }}
                          />
                          <StarIconLine
                            width={15}
                            height={15}
                            onClick={() => {
                              rateEvent(5);
                            }}
                          />
                        </div>
                      ) : (
                        <StarRating
                          rating={ratingsState}
                          height={15}
                          width={15}
                        />
                      )}
                    </div>
                    <div className={CSS.BasicEventInfo}>
                      <div className={CSS.EventInfoDetail}>
                        <label>Date:</label>
                        {moment(event.event_dates[0], 'DD-MM-YYYY').format(
                          'ddd, MMMM Do YYYY',
                        )}
                      </div>
                      <div className={CSS.EventInfoDetail}>
                        <label>Time:</label>
                        {event.event_times[0]} - {event.event_times[1]} (EAT)
                      </div>
                      <div className={CSS.EventInfoDetail}>
                        <label>Venue:</label>
                        {event.venue}, {event.location}
                      </div>
                    </div>

                    <div className={CSS.EventTicketQty}>
                      <label>Tickets:</label>
                      <div className={CSS.SelectTickets}>
                        <CounterControl
                          value={ticketsState}
                          minValue={1}
                          maxValue={10}
                          onIncrease={addTickets}
                          onDecrease={removeTickets}
                        >
                          {event.ticket_price !== 0
                            ? `${intl.formatNumber(event.ticket_price, {
                                style: 'currency',
                                currency: 'Kes',
                              })} per ticket`
                            : 'FREE'}
                        </CounterControl>

                        {event.ticket_price !== 0 && (
                          <div className={CSS.PriceSummary}>
                            <div>
                              <label>Vat:</label>{' '}
                              {intl.formatNumber(
                                (event.ticket_price * ticketsState) / 16,
                                { style: 'currency', currency: 'Kes' },
                              )}
                            </div>
                            <div>
                              <label>Total:</label>{' '}
                              {intl.formatNumber(
                                event.ticket_price * ticketsState +
                                  (event.ticket_price * ticketsState) / 16,
                                { style: 'currency', currency: 'Kes' },
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className={CSS.CenterBtn}>
                      <RoundedButton type="submit">
                        Get {ticketsState > 1 && ticketsState} tickets
                      </RoundedButton>
                    </div>
                    <div className={CSS.EventAttendees}>
                      {event.attending.length} are attending <GroupIcon />
                    </div>
                  </div>
                </div>

                <div className={CSS.EventShareBlock}>
                  <FbIcon width={22} height={22} />
                  <MessengerIcon width={22} height={22} />
                  <InstagramIcon width={22} height={22} />
                  <WhatsappIcon width={22} height={22} />
                  <TwitterIcon width={22} height={22} />
                  <CopyIcon width={22} height={22} />
                  <WeChatIcon width={22} height={22} />
                  <SmsIcon width={22} height={22} />
                </div>
              </div>
            </div>
          </PageContentBlock>

          <PageContentBlock>
            <div className={CSS.EventBlock}>
              <SectionTitle topSpacing bottomSpacing>
                {event.name}
              </SectionTitle>
              <EventCarousel images={event.images} />
              <div className={CSS.EventActions}>
                <EventBreadCrumbs
                  title={event.name}
                  location={event.location}
                  page={'Events'}
                />
                <span
                  className={classnames(CSS.EventWishlist, {
                    [CSS.EventActive]: inWishlist,
                  })}
                  onClick={toggleWishlist}
                >
                  {inWishlist ? (
                    <>
                      - Wishlist <HeartFilled />
                    </>
                  ) : (
                    <>
                      + Wishlist <HeartOpen />
                    </>
                  )}
                </span>
              </div>

              <SectionTitle topSpacing bottomSpacing>
                Event Description
              </SectionTitle>
              <EventContentBlock text={`${event.name} ${event.about}`} />

              <SectionTitle topSpacing bottomSpacing>
                Event Venue
              </SectionTitle>
              <div className={CSS.EventVenue}>
                <iframe
                  src={event.location_map}
                  width="600"
                  height="450"
                  frameBorder="0"
                  style={{ border: 0, width: '100%', borderRadius: '10px' }}
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                />
              </div>

              <SectionTitle topSpacing bottomSpacing>
                Event Comments
              </SectionTitle>

              {event.comments.map((comment, i) => {
                if (!commentsState && i < 4) {
                  return (
                    <EventComment
                      key={i}
                      comment={comment}
                      reply={comment.reply}
                    />
                  );
                }

                if (commentsState && i) {
                  return (
                    <EventComment
                      key={i}
                      comment={comment}
                      reply={comment.reply}
                    />
                  );
                }
              })}

              <div className={CSS.CenterBtn}>
                <RoundedButton onClick={showComments}>
                  {commentsState ? 'Hide more comments' : 'View all Comments'}
                </RoundedButton>
              </div>
            </div>
          </PageContentBlock>

          <div ref={RecommendRef}>
            <PageContentBlock>
              <SectionTitle topSpacing bottomSpacing>
                Recommended Events
              </SectionTitle>

              <Row>
                {events.data
                  .filter(el => el.id !== event.id)
                  .map((event, i) => {
                    if (i < 3) {
                      return (
                        <Col xs="12" sm="4" key={event.id}>
                          <EventCard event={event} />
                        </Col>
                      );
                    }
                  })}
              </Row>
            </PageContentBlock>
          </div>
        </section>
      )}

      <Footer />
    </EventPageWrapper>
  );
}

EventPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  events: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  fetchEvents: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  events: makeSelectEvents(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    fetchEvents: () => {
      dispatch(loadEvents());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withSaga = injectSaga({ key: 'eventPage', saga });

export default compose(
  withSaga,
  withConnect,
)(injectIntl(EventPage));

const EventPageWrapper = styled.div`
  .event-page-container {
    padding-top: 4rem;
  }
  .events-ticket-info {
    height: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    position: relative;
  }
  @media (min-width: 992px) {
    .events-ticket-info {
      max-width: calc(100% - 350px);
      margin-left: calc(100% - 350px);
    }
  }
  .events-ticket-container {
    position: absolute;
    z-index: 600;
    min-width: 350px;
    max-width: 350px;
    top: 0;
    padding-top: 2rem;
    margin-left: 1rem;
  }
  @media (min-width: 1200px) {
    .events-ticket-container {
      margin-left: 0;
    }
  }
  @media (min-width: 768px) {
    .event-info-block {
      max-width: 580px;
    }
  }
  @media (min-width: 992px) {
    .event-info-block {
      max-width: calc(100% - 350px - 1.5rem);
    }
  }
  .events-ticket-container-fixed {
    position: fixed;
    top: 0;
    z-index: 3;
    padding-top: 1.5rem;
  }
  .event-booking-block, .events-share-block {
    margin-top: 2.5rem;
    padding: 2rem 1.5rem;
    border-radius: 0.5rem;
    min-width: 350px;
    background: white;
    box-shadow: 0 7px 33px 0 rgba(199, 199, 199, 0.5);

    label {
      font-size: ${props => props.theme.fontSize.xs};
    font-weight: 300;
    margin-bottom: .25rem;
    margin-right: .5rem;
    }
  }
  .events-share-block {
    margin-top: .5rem;
    padding: .5rem 1.5rem;
    text-align: center;

    svg {
      cursor: pointer;
      margin-right: .5rem;
    }
    svg:hover {
      color: ${props => props.theme.colors.brand};
    }
  }
  .basic-event-info {
    font-size: ${props => props.theme.fontSize.small};
    font-weight: 400;
    line-height: 1;
    padding: .5rem 0;
    margin-bottom: 1rem;
  }
  .event-select-tickets {
      font-size: ${props => props.theme.fontSize.xs};
      font-weight: 400;
  }
  .rate-event {
    font-size: ${props => props.theme.fontSize.xs};
    font-weight: 300;
    padding: .5rem 0;

    div {
      display: inline-block;
      line-height: 1rem;
    }
    label {
      margin-right: .5rem;
    }
    .rating-stars {
      transform: translateY(2px);
      margin-right: 2px;
      vertical-align: baseline;
    }
    svg {
      color: ${props => props.theme.colors.grey};
      cursor: pointer;
    }
    svg:hover {
      fill: ${props => props.theme.colors.brand};
    }
  }
  .edit-event {
    cursor: pointer;
    font-size: ${props => props.theme.fontSize.xs};
    float: right;
  }
  .edit-event:hover {
    text-decoration: underline;
  }
  .event-booking-header {
    display: flex;
    padding: .5rem 0;
  }
  .event-title {
    flex: 1 1 80%;
  }
  .event-organizer {
    flex: 1 1 20%;
  }
  .event-organizer-avatar {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background-color: ${props => props.theme.colors.brand};
    border: 2px solid ${props => props.theme.colors.primaryLight};
    color: ${props => props.theme.colors.primaryLight};
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    box-shadow: 0 0 0 5px rgba(0, 0, 0, 0.4), 0 0 0 10px ${props =>
      props.theme.colors.brand};
  }
  .event-name {
    font-size: ${props => props.theme.fontSize.small};
    font-weight: 500;
  }
  .event-meta {
    font-size: ${props => props.theme.fontSize.xs};
    font-weight: 300;
    span {
      font-weight: 400;
    }
  }
  .price-summary {
    text-align: right;
    font-weight: 400;
    padding: .5rem;
    margin-top: 1rem;

    label {
      margin: 0;
    }
  }
  .carousel-item{
    width: 100%; /*width you want*/
    height: 500px; /*height you want*/
    overflow: hidden;
}
.carousel-item img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
  .carousel .carousel-item img {
    border-radius: 10px;
    width: 100%;
  }
  .event-actions {
    width: 100%
    padding: 0;
    margin: 0;
    position: relative;
  }
  .add-wishlist {
    display: inline-block;
    position: absolute;
    top: 2rem;
    right: 2rem;
    cursor: pointer;
    font-size: ${props => props.theme.fontSize.xs};
    svg {
      fill: ${props => props.theme.colors.primaryDark};
    }
    &.active {
      color: ${props => props.theme.colors.brand};
    }
    &.active svg {
      fill: ${props => props.theme.colors.brand};
    }
  }
  .add-wishlist:hover {
    text-decoration: underline;
  }
  .center-btn {
    display: flex;
    align-items: center;
    padding: 1rem 0;
  }
  .event-attendees {
    text-align: center;
    cursor: pointer;
    font-size: ${props => props.theme.fontSize.xs};
  }
  .event-attendees:hover {
    text-decoration: underline;
  }
`;
