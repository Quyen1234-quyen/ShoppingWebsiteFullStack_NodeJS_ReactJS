import * as type from '../../constants/ContantsSeller';

const initialState = {
    authenKey:sessionStorage.getItem("authenKey"),
    token: sessionStorage.getItem('token'),
    isAuthenticated: null,
    user: null,
    types:null,
    idStore:null
};


const isAuthentication=(state=initialState,action)=>{
    switch(action.type){
        case type.LOGIN_SUCCESS:
            sessionStorage.setItem('token', action.data.token);
            sessionStorage.setItem('authenKey',action.data.authenKey);
            state.token=sessionStorage.getItem('token');
            state.authenKey=sessionStorage.getItem('authenKey');
            state.isAuthenticated=true;
            state.user=action.data.payload.idUser;
            state.types=action.data.payload.types;
            state.idStore=action.data.payload.idStore;
            return {...state};
        case type.LOGIN_FAIL:
            return {...state};
        default: return {...state};
    }
}


export default isAuthentication;