import * as types from './Types';
import axios from 'axios';
import {ROOT} from '../../config';

export function fetchQuestions (level) {
    const URL = `${ROOT}/levels/${level}/questions`;
    console.log({URL});
    return function (dispatch) {
        dispatch({
            type: types.FETCH_QUESTIONS_REQUEST
        });
        axios.get(URL)
            .then((res) => {
                dispatch({
                    type: types.FETCH_QUESTIONS_SUCCESS,
                    payload: res.data.questions
                });
            })
            .catch((error) => {
                dispatch({
                    type: types.FETCH_QUESTIONS_ERROR,
                    payload: error
                });
            });
    };
}