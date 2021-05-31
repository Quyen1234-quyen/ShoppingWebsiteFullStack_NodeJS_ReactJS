import * as type from '../constants/ContantsSeller';
import callAPI from '../utils/apiCaller';
import setAuthorizationToken from '../utils/setAuthorizationToken';


const setHeader=(token)=>{
    if(token){
        return {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }
    }else{
        return{
            headers: {
                'Content-Type': 'application/json'
            }
        }
        
    }
}
//close form
export const closeForm=()=>{
    return{
        type:type.CLOSE_FORM
    }
}
//open form
export const openForm=()=>{
    return{
        type:type.OPEN_FORM
    }
}
// find product by id store
export const actFetchProductsByIdRequest=(id)=>{
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    return (dispatch)=>{
        return callAPI(`FindProductByIdStore/${id}`,'GET',null,config).then(res=>{
            
            dispatch(actFetchProductsById(res.data));
        });
    }
}
export const actFetchProductsById=(data)=>{
    return{
        type:type.FETCH_PRODUCT_BY_ID_STORE,
        data
    }
}
// add product
export const actAddProductSellerRequest=(product)=>{
    var token=sessionStorage.getItem("token");
    return (dispatch)=>{
        return callAPI('addproduct','POST',product,{
            'authorization': 'Bearer ' + token
        }).then(res=>{
            dispatch(actAddProductSellerSuccess(res.data));
        }).catch(err=>{
            dispatch(actAddProductSellerFail());
        })
    }
}

export const actAddProductSellerSuccess=(data)=>{
    return{
        type:type.ADD_PRODUCT_SUCCESS,
        data
    }
}
export const actAddProductSellerFail=()=>{
    return{
        type:type.ADD_PRODUCT_FAIL
    }
}
// remove product
export const actRemoveProductSellerRequest=(product)=>{
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    var id=product._id;
    return (dispatch)=>{
        return callAPI(`deleteproductbyid/${id}`,"GET",null,config).then(res=>{
            dispatch(actRemoveProductSuccess(id));
        }).catch(err=>{
            dispatch(actRemoveProductFail())
        })
    }
}
export const actRemoveProductSuccess=(id)=>{
    return {
        type:type.REMOVE_PRODUCT_SUCCESS,
        id
    }
}
export const actRemoveProductFail=()=>{
    return {
        type:type.REMOVE_PRODUCT_FAIL
    }
}
// edit product
export  const actEditProduct=(product)=>{
    return{
        type:type.EDIT_PRODUCT,
        product
    }
}
// update product

export const actUpdateProductSellerRequest=(product,id)=>{
    const config = {
        headers:{
            'Content-Type':'multipart/form-data'
        }
    };
    return dispatch=>{
        return callAPI(`updateproductbyid/${id}`,'PUT',product,config).then(res=>{
            dispatch(actUpdateProductSellerSuccess(res.data));
        }).catch(err=>{
            dispatch(actUpdateProductSellerFail());
        })
    }
}

export const  actUpdateProductSellerSuccess=(data)=>{
    return{
        type:type.UPDATE_PRODUCT_SUCCESS,
        data
    }
}

export const actUpdateProductSellerFail=()=>{
    return{
        type:type.UPDATE_PRODUCT_FAIL
    }
}

///send email client
export const actSendMailRegisterSeller=(email)=>{
    const body={
        email
    }
    const config = {
        headers:{
            'Content-Type':'multipart/form-data'
        }
    };
    return dispatch=>{
        return callAPI('SendMailRegister','POST',body,config).then(res=>{
            console.log(res.data);
            if(res.data.error){
                dispatch(actSendMailRegisterFail(res.data));
            }else{
                dispatch(actSendMailRegisterSuccess(res.data));
            }
        }).catch(err=>{

        })
    }
}
export const actSendMailRegisterSuccess=(data)=>{
    return{
        type:type.SEND_MAIL_REGISTER_SELLER,
        data
    }
}
export const actSendMailRegisterFail=(data)=>{
    return{
        type:type.SEND_MAIL_REGISTER_SELLER_FAIL,
        data
    }
}
// register seller
export const actRegisterSellerSuccessRequest=(body)=>{
    const config = {
        headers:{
            'Content-Type':'multipart/form-data'
        }
    };
    return dispatch=>{
        return callAPI('RegisterSeller','POST',body,config).then(res=>{
            console.log(res.data)
            return;
        }).catch(err=>{

        });
    }
}



