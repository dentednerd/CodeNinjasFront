import * as types from '../actions/Types';

const initialState = {
  level: 0,
  loading: false
};

function LevelsReducer (prevState = initialState, action) {
  if (!action) return prevState;

  if (action.type === types.FETCH_LEVELS_REQUEST) {
    const newState = Object.assign({}, prevState);
    newState.loading = true;
    return newState;
  }

  if (action.type === types.FETCH_LEVELS_SUCCESS) {
    const newState = Object.assign({}, prevState);
    newState.level = action.payload;
    return newState;
  }

  if (action.type === types.FETCH_LEVELS_ERROR) {
    const newState = Object.assign({}, prevState);
    newState.error = action.payload;
    newState.loading = false;

    return newState;
  }

  return prevState;
}

export default LevelsReducer;
