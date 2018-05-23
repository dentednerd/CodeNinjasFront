import * as types from '../actions/Types';

const initialState = {
  user: null,
  loading: false,
  error: null,
};

function auth (prevState = initialState, action) {
  if (!action) return prevState;

  if (action.type === types.LOGIN_USER_REQUEST) {
    return Object.assign({}, prevState, {
      user: null,
      error: null,
      loading: true,
    });
  }

  if (action.type === types.LOGIN_USER_SUCCESS) {
    return Object.assign({}, prevState, {
      user: action.payload,
      loading: false,
      error: null,
    });
  }

  if (action.type === types.LOGIN_USER_ERROR) {
    return Object.assign({}, prevState, {
      error: action.payload,
      loading: false,
      user: null,
    });
  }

  return prevState;
}

export default auth;