import axios from 'axios';
import * as types from './Types';
import { ROOT } from '../../config';

export default function fetchQuestions(level) {
  const URL = `${ROOT}/levels/${level}/questions`;
  console.log({ URL });
  return function (dispatch) {
    dispatch({
      type: types.FETCH_QUESTIONS_REQUEST,
    });
    axios.get(URL)
      .then((res) => {
        console.log('SUCCESS! RES: ', res.data.questions);
        dispatch({
          type: types.FETCH_QUESTIONS_SUCCESS,
          payload: res.data.questions,
        });
      })
      .catch((error) => {
        dispatch({
          type: types.FETCH_QUESTIONS_ERROR,
          payload: error,
        });
      });
  };
}
