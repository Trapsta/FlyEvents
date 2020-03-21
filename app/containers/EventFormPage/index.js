/**
 *
 * EventFormPage
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import styled from 'styled-components';
import classnames from 'classnames';

import { useInjectSaga } from 'utils/injectSaga';
import saga from './saga';

import NavigationBar from '../../components/NavigationBar';
import SectionTitle from '../../components/SectionTitle';
import PageContentBlock from '../../components/PageContentBlock';
import RoundedButton from '../../components/RoundedButton';
import RangeSlider from '../../components/RangeSlider';
import Footer from '../../components/Footer';
import {
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from 'reactstrap';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';

export function EventFormPage() {
  const [startDate, setStartDate] = useState(moment());
  const [endDate, setEndDate] = useState(moment());
  const [focusedInput, setFocusedInput] = useState(null);
  const [rangeValues, setRangeValues] = useState([360, 1140]);

  const onDateChange = ({ startDate, endDate }) => {
    setStartDate(startDate);
    setEndDate(endDate);
  };

  const onFocusChange = focusedInput => {
    setFocusedInput(focusedInput);
  };

  const handleRange = values => {
    setRangeValues(values);
  };

  const CSS = {
    EventFormContainer: 'event-form-container',
  };

  useInjectSaga({ key: 'eventFormPage', saga });

  return (
    <EventFormPageWrapper>
      <Helmet>
        <title>EventFormPage</title>
        <meta name="description" content="Description of EventFormPage" />
      </Helmet>
      <NavigationBar />

      <section className={CSS.EventFormContainer}>
        <PageContentBlock>
          <SectionTitle topSpacing bottomSpacing>
            Create Event
          </SectionTitle>

          <Form>
            <Row form>
              <Col md={12}>
                <FormGroup>
                  <Label>Event Title</Label>
                  <Input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="My Fancy Event"
                  />
                </FormGroup>
              </Col>
            </Row>

            <Row form>
              <Col md={4}>
                <FormGroup>
                  <Label>Event Venue</Label>
                  <Input
                    type="text"
                    name="Venue"
                    id="Venue"
                    placeholder="Sarit Centre"
                  />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label>Event Location</Label>
                  <Input
                    type="text"
                    name="location"
                    id="location"
                    placeholder="Westlands"
                  />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label>Event Category</Label>
                  <Input type="select" name="category" id="category">
                    <option>Social</option>
                    <option>Business</option>
                    <option>Academic</option>
                    <option>Sport</option>
                    <option>Other</option>
                  </Input>
                </FormGroup>
              </Col>
            </Row>

            <Row form>
              <Col md={4}>
                <FormGroup>
                  <Label>Event Dates</Label>
                  <DateRangePicker
                    startDate={startDate}
                    startDateId="startDate"
                    endDate={endDate}
                    endDateId="endDate"
                    onDatesChange={onDateChange}
                    focusedInput={focusedInput}
                    onFocusChange={onFocusChange}
                  />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label>Event Organizer</Label>
                  <Input
                    type="text"
                    name="organizer"
                    id="organizer"
                    placeholder="Jasper"
                  />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label>Event Tickets Price</Label>
                  <Input
                    type="number"
                    name="ticket"
                    id="ticket"
                    placeholder="0"
                  />
                </FormGroup>
              </Col>
            </Row>

            <FormGroup>
              <Label>Event Times</Label>
              <RangeSlider getValues={handleRange} />
            </FormGroup>

            <FormGroup>
              <Label>Event Description</Label>
              <Input type="textarea" name="description" id="description" />
            </FormGroup>

            <FormGroup>
              <Label>Upload Event pictures</Label>
              <Input type="file" name="file" />
            </FormGroup>

            <FormGroup>
              <FormText color="muted">
                *Disclaimer: By clicking the create event button, you agree to
                our terms of service and privacy policy
              </FormText>
            </FormGroup>

            <RoundedButton>Create Event</RoundedButton>
          </Form>
        </PageContentBlock>
      </section>

      <Footer />
    </EventFormPageWrapper>
  );
}

EventFormPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(EventFormPage);

const EventFormPageWrapper = styled.div`
  .event-form-container {
    padding-top: 4rem;
  }
  .DateRangePicker {
    display: block;
  }
  .form-control:focus {
    outline: none;
    box-shadow: 0 0 0 0.2rem rgba(128, 189, 255, 0.25);
    border-color: ${props => props.theme.colors.brand};
  }
`;
