import * as type from './../../constants/ContantsSeller';
import * as Message from './../../constants/Message';


var initalState="";
const codeEmail =(state=initalState,action)=>{
    switch(action.type){
        case type.SEND_MAIL_REGISTER_SELLER:
            state=action.data
            return state;
        default:return state;
    }
}

export default codeEmail;