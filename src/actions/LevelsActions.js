import * as types from './Types';
import axios from 'axios';
import {ROOT} from '../../config';

export function fetchLevels (level) {
    const path = level !== undefined ? `levels/${level}` : 'levels';
    return function (dispatch) {
        dispatch(fetchLevelsRequest());
        axios.get(`${ROOT}/${path}`)
        .then(res => {
            dispatch(fetchLevelsSuccess(res.data.levels));
        })
        .catch(err => {
            dispatch(fetchLevelsError(err));
        });
    };
}

export function fetchLevelsRequest () {
    return {
        type: types.FETCH_LEVELS_REQUEST
    };
}

export function fetchLevelsSuccess (levels) {
    return {
        type: types.FETCH_LEVELS_SUCCESS,
        payload: levels
    };
}

export function fetchLevelsError (error) {
    return {
        type: types.FETCH_LEVELS_ERROR,
        payload: error
    };
}
