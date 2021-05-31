import * as types from './../../constants/ContantsCustomer';

const productsCustomer=(state={},action)=>{
    switch(action.type){
        case types.FIND_PRODUCT_BY_ID:
            return action.products;
        default: return  state;
    }
}


export default productsCustomer;