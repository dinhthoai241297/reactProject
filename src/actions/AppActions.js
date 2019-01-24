import * as types from './ActionTypes';
import { showMessage } from '../utils/Utils';
import httpRequest from '../services/httpRequest';

export const wrapFunc = (dispatch, func, type, ) => {
    dispatch(loading(true));
    let code;
    func().end((err, res) => {
        if (err) {
            code = err.statusCode;
            console.log(err);
        } else {
            console.log(res);
            // format reponse data in this step
            code = res.body.code;
            let { data } = res.body;
            dispatch({ type, data: data });
        }
        showMessage(code);
        dispatch(loading(false));
    });
}

export const loading = loading => {
    return {
        type: types.LOADING,
        data: { loading }
    }
}

export const test = () => {
    return dispatch => wrapFunc(dispatch, () => httpRequest.get('http://139.180.209.238:8082/'), types.TEST);
}
