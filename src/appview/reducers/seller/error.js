import * as type from './../../constants/ContantsSeller';
import * as Message from './../../constants/Message';


var initalState="";
const error =(state=initalState,action)=>{
    switch(action.type){
        case type.LOGIN_FAIL:
            state=Message.LOGIN_FAIL;
            return {...state};
        case type.REMOVE_PRODUCT_FAIL:
            state=Message.REMOVE_PRODUCT_SELLER_FAIL;
            return {...state};
        case type.ADD_PRODUCT_FAIL:
            state=Message.ADD_PRODUCT_SELLER_FAIL;
            return {...state};
        default:return {...state};
    }
}

export default error;