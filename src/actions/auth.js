import * as types from './Types';
import axios from 'axios';
import {ROOT} from '../../config';

export function loginUser (username) {
    const URL = `${ROOT}/users/${username}`;
    return function (dispatch) {
        dispatch({
            type: types.LOGIN_USER_REQUEST
        });
        axios.get(URL)
            .then((res) => {
                dispatch({
                    type: types.LOGIN_USER_SUCCESS,
                    payload: res.data.user
                });
            })
            .catch((err) => {
                dispatch({
                    type: types.LOGIN_USER_ERROR,
                    payload: err
                });
            });
    };
}