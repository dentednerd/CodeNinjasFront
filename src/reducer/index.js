import { combineReducers } from 'redux';

import auth from './auth';
import questions from './questions';

const reducer = combineReducers({
  auth, questions,
});

export default reducer;
