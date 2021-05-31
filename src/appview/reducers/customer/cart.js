import * as types from './../../constants/ContantsCustomer';

var data=JSON.parse(localStorage.getItem('CART'));
var initialState=data? data:[];

const findProductInCart=(state,product)=>{
    var index=-1;
    if(state.length>0){
        for(var i=0;i <state.length;i++){
            if( state[i].product._id==product._id){
                index=i;
                break;
            }
        }
    }
    return index;
}

const cart=(state=initialState,action)=>{
    var {product,quantity}=action
    var index=-1;
    switch(action.type){
        case types.ADD_TO_CART:
            index=findProductInCart(state,product);
            if(index!==-1){
                state[index].quantity+=quantity;
            }else{
                state.push({
                    product,
                    quantity
                });
            }
            localStorage.setItem("CART",JSON.stringify(state));
            return [...state];
        case types.REMOVE_TO_CART:
            index=findProductInCart(state,product);
            if(index!==-1){
                state.splice(index,1);
            }
            localStorage.setItem("CART",JSON.stringify(state));
            return [...state];
        case types.UPDATE_TO_CART:
            index=findProductInCart(state,product);
            if(index !==-1){
                state[index].quantity+=quantity;
            }
            localStorage.setItem("CART",JSON.stringify(state));
            return [...state];
        case types.REMOVE_ALL_CART:
            localStorage.removeItem("CART");
            state=[];
            return state;
            
        default: return  [...state];
    }
}


export default cart;