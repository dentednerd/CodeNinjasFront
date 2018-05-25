import axios from 'axios';
import * as types from './Types';
import { ROOT } from '../../config';

export default function loginUser(username) {
  const URL = `${ROOT}/users/${username}`;
  return function (dispatch) {
    dispatch({
      type: types.LOGIN_USER_REQUEST,
    });
    axios.get(URL)
      .then((res) => {
        dispatch({
          type: types.LOGIN_USER_SUCCESS,
          payload: res.data.user,
        });
      })
      .catch((err) => {
        dispatch({
          type: types.LOGIN_USER_ERROR,
          payload: err,
        });
      });
  };
}
