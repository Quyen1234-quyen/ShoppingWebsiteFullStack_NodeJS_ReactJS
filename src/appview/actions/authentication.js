import * as types from '../constants/ContantsSeller';
import callAPI from '../utils/apiCaller';


export const loginRequest = (body) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    return (dispatch) => {
        return callAPI('LoginAuth', 'POST', body, config).then(res => {
            dispatch(loginSucces(res.data));
        }).catch(err => {
            dispatch(loginFail());
        })
    }
}

export const loginSucces = (data) => {
    return {
        type: types.LOGIN_SUCCESS,
        data
    }
}
export const loginFail = () => {
    return {
        type: types.LOGIN_FAIL
    }
}