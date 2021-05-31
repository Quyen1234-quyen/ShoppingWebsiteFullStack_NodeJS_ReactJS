import * as type from './../../constants/ContantsSeller';

var initalState=true;
const error =(state=initalState,action)=>{
    switch(action.type){
        case type.LOGIN_FAIL:
            return false;
        case type.SEND_MAIL_REGISTER_SELLER_FAIL:
            return false;
        case type.REGISTER_SELLER_FAIL:
            return false;
        case type.REMOVE_PRODUCT_FAIL:
            return false;
        case type.ADD_PRODUCT_FAIL:
            return false;
        default:return state;
    }
}

export default error;