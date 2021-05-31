import * as types from './../constants/ContantsCustomer';
import callAPI from './../utils/apiCaller';


// add to cart
export const actAddToCart=(product,quantity)=>{
    console.log("nha2");
    return{
        type:types.ADD_TO_CART,
        product,
        quantity
    }
}
// remove to cart

export const actRemoveToCart=(product)=>{
    return{
        type:types.REMOVE_TO_CART,
        product
    }
}
//update to cart
export const actUpdateToCart=(product,quantity)=>{
    return{
        type:types.UPDATE_TO_CART,
        product,quantity
    }
}
// clear all cart
export const actDeleteAllCart=()=>{
    return{
        type:types.REMOVE_ALL_CART
    }
}