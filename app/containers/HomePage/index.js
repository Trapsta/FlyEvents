/*
 * HomePage
 *
 */

import React, { useEffect, memo, useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import NavigationBar from '../../components/NavigationBar';
import Header from '../../components/Header';
import SectionTitle from '../../components/SectionTitle';
import PageContentBlock from '../../components/PageContentBlock';
import Footer from '../../components/Footer';
import EventCard from '../../components/EventCard';
import { Col, Row } from 'reactstrap';
import RoundedButton from '../../components/RoundedButton';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
	makeSelectEvents,
	makeSelectLoading,
	makeSelectError,
} from 'containers/App/selectors';
import { loadEvents } from '../App/actions';
import saga from './saga';
import injectSaga from 'utils/injectSaga';
import LoadingDots from '../../components/LoadingDots';

const key = 'home';

function HomePage({ loading, error, events, fetchEvents }) {
	const [showEventsState, setShowEventsState] = useState(false);

	const showEvents = () => {
		setShowEventsState(!showEventsState);
	};

	const CSS = {
		UpcomingEvents: 'upcoming-events',
		AllEventsBtn: 'all-events-btn',
	};

	useEffect(() => {
		fetchEvents();
	}, []);

	return (
		<HomePageWrapper>
			<NavigationBar home />
			<Header />

			{loading && <LoadingDots />}

			{events && events.status === 'success' && (
				<section className={CSS.UpcomingEvents}>
					<PageContentBlock>
						<SectionTitle topSpacing bottomSpacing>
							Upcoming Events
						</SectionTitle>

						<Row>
							{events.data.map((event, i) => {
								if (showEventsState) {
									return (
										<Col xs="12" sm="4" key={event.id}>
											<EventCard event={event} />
										</Col>
									);
								}

								if (!showEventsState && i < 6) {
									return (
										<Col xs="12" sm="4" key={event.id}>
											<EventCard event={event} />
										</Col>
									);
								}
							})}
						</Row>

						<div className={CSS.AllEventsBtn}>
							<RoundedButton onClick={showEvents}>
								{showEventsState ? 'Hide more events' : 'View all events'}
							</RoundedButton>
						</div>
					</PageContentBlock>
				</section>
			)}
			<Footer />
		</HomePageWrapper>
	);
}

const HomePageWrapper = styled.div`
	.all-events-btn {
		display: flex;
		align-items: center;
		padding: 1rem 0;
	}
`;

HomePage.propTypes = {
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

const withSaga = injectSaga({ key: 'home', saga });

export default compose(
	withSaga,
	withConnect,
)(HomePage);
