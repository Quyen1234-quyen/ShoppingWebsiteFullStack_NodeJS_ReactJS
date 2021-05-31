import * as type from '../../constants/ContantsSeller';

var initialState={};
const findIndex=(product,id)=>{
    var result=-1;
    product.map((item,index)=>{
        if(item._id===id){
            result=index;
        }
    })
    return result;
}
const convertArray=(product)=>{
    var result=[];
    product.map((item,index)=>{
        result.push(item);
    })
    return result;
}
const removeProduct=(product,index)=>{
    var result=[];
    product.splice(index,1);
    return result=product;
}
const addProduct=(products,product)=>{
    var result=[];
    products.push(product);
    return result=products;
}
const updateProduct=(products,product,i)=>{
    var result=[];
    products.map((item,index)=>{
        if(index==i){
            products[index]=product;
        }
    })
    return result=products;
}
const products=(state=initialState,action)=>{
    var index=-1;
    switch(action.type){
        case type.FETCH_PRODUCT_BY_ID_STORE:
            state=action.data;
            return {...state};
        case type.ADD_PRODUCT_SUCCESS:
            return {...state,
                product:addProduct(convertArray(state.product),action.data.product)
            };
        case type.REMOVE_PRODUCT_SUCCESS:
            index=findIndex(state.product,action.id);
            return {...state,
                product:removeProduct(convertArray(state.product),index)
            };
        case type.UPDATE_PRODUCT_SUCCESS:
            index=findIndex(state.product,action.data.product._id);
            state.product=updateProduct(convertArray(state.product),action.data.product,index);
            return  {...state};
        default: return  {...state};
    }
}


export default products;