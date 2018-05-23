import * as types from '../actions/Types';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

function questions(prevState = initialState, action) {
  if (!action) return prevState;

  if (action.type === types.FETCH_QUESTIONS_REQUEST) {
    return Object.assign({}, prevState, {
      loading: true,
      data: [],
      error: null,
    });
  }

  if (action.type === types.FETCH_QUESTIONS_SUCCESS) {
    return Object.assign({}, prevState, {
      data: action.payload,
      loading: false,
      error: null,
    });
  }

  if (action.type === types.FETCH_QUESTIONS_ERROR) {
    return Object.assign({}, prevState, {
      error: action.payload,
      loading: false,
      data: [],
    });
  }

  return prevState;
}

export default questions;
