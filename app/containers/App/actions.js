/*
 * App Actions
 *
 * Actions change things in your application
 * Since this project uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  LOAD_EVENTS_SUCCESS,
  LOAD_EVENTS,
  LOAD_EVENTS_ERROR,
} from './constants';

/**
 * Load the events, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_EVENTS
 */
export function loadEvents() {
  return {
    type: LOAD_EVENTS,
  };
}

/**
 * Dispatched when the events are loaded by the request saga
 *
 * @param  {array} events The events data
 *
 * @return {object}      An action object with a type of LOAD_EVENTS_SUCCESS passing the events
 */
export function eventsLoaded(events) {
  return {
    type: LOAD_EVENTS_SUCCESS,
    events,
  };
}

/**
 * Dispatched when loading the events fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_EVENTS_ERROR passing the error
 */
export function eventsLoadingError(error) {
  return {
    type: LOAD_EVENTS_ERROR,
    error,
  };
}
