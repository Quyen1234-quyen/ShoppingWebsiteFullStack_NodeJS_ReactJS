import * as type from './../../constants/ContantsSeller';


var initalState={};
const editProduct =(state=initalState,action)=>{
    switch(action.type){
        case type.EDIT_PRODUCT:
            state=action.product;
            return {...state};
        default:return state;
    }
}

export default editProduct;