import * as types from '../actions/Types';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

function questions(prevState = initialState, action) {
  switch (action.type) {
    case types.FETCH_QUESTIONS_REQUEST:
      return Object.assign({}, ...prevState, {
        loading: true,
        data: [],
        error: null,
      });

    case types.FETCH_QUESTIONS_SUCCESS:
      return Object.assign({}, ...prevState, {
        loading: false,
        data: action.payload,
        error: null,
      });

    case types.FETCH_QUESTIONS_ERROR:
      return Object.assign({}, prevState, {
        loading: false,
        data: [],
        error: action.payload,
      });

    default:
      return prevState;
  }
}

export default questions;
