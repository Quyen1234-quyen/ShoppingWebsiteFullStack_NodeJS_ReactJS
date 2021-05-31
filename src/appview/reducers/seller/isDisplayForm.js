import * as type from './../../constants/ContantsSeller';


var initalState=false;
const isDisplayForm =(state=initalState,action)=>{
    switch(action.type){
        case type.CLOSE_FORM:
            return false;
        case type.OPEN_FORM:
            return true;
        default:return state;
    }
}

export default isDisplayForm;