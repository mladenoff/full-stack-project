import {
  RECEIVE_CURRENT_USER,
  RECEIVE_SESSION_ERRORS
} from '../action/session_actions';

const defaultState = () => ({
  currentUser: null,
  errors: []
});

const SessionReducer = (state = defaultState(), action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {currentUser: action.currentUser, errors: []};
    case RECEIVE_SESSION_ERRORS:
      return {currentUser: null, errors: action.errors};
    default:
      return state;
  }
};

export default SessionReducer;