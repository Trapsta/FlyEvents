/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {
  LOAD_EVENTS_SUCCESS,
  LOAD_EVENTS,
  LOAD_EVENTS_ERROR,
} from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  currentUser: false,
  events: false,
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_EVENTS:
        draft.loading = true;
        draft.error = false;
        draft.events = false;
        break;

      case LOAD_EVENTS_SUCCESS:
        draft.events = action.events;
        draft.loading = false;
        break;

      case LOAD_EVENTS_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;
    }
  });

export default appReducer;
