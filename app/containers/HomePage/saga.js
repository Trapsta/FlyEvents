/**
 * Gets the events from fake backend
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_EVENTS } from 'containers/App/constants';
import { eventsLoaded, eventsLoadingError } from 'containers/App/actions';

import request from 'utils/request';

/**
 * events request/response handler
 */
export function* getEvents() {
  const requestURL = `/static/events.json`;

  try {
    // Call our request helper (see 'utils/request')
    const events = yield call(request, requestURL);
    yield put(eventsLoaded(events));
  } catch (err) {
    yield put(eventsLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* eventsData() {
  // Watches for LOAD_EVENTS actions and calls getEvents when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_EVENTS, getEvents);
}
