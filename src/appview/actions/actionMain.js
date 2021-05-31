import * as type from './../constants/ContantsMain';
import callAPI from '../utils/apiCaller';


// fetch all catelory
export const actFetchAllGroupCategoryRequest=()=>{
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    return (dispatch)=>{
        return callAPI('FetchAllGroupCategory','GET',null,config).then(res=>{
            dispatch(actFetchAllGroupCategorySuccess(res.data));
        }).catch(err=>{
            dispatch(actFetchAllGroupCategoryFail());
        });
    }
}

export const actFetchAllGroupCategorySuccess=(data)=>{
    return{
        type:type.GET_CATEGORY_GROUP,
        data:data
    };
}
export const actFetchAllGroupCategoryFail=()=>{
    return{
        
    }
}
//fetch all category


export const actFetchAllCategoryRequest=()=>{
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    return dispatch=>{
        return callAPI('FetchAllCategory','GET',null,config).then(res=>{
            dispatch(actFetchAllCategory(res.data));
        }).catch(err=>{

        })
    }
}
export const actFetchAllCategory=(data)=>{
    return {
        type:type.GET_CATEGORY,
        data
    }
}
// fetch category by id group
export const actFetchAllCategoryByIdGroupRequest=(id)=>{
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    return dispatch=>{
        return callAPI(`FetchAllCategoryByIdGroupCategory/${id}`,'GET',null,config).then(res=>{
            dispatch(actFetchAllCategoryByIdGroup(res.data));
        }).catch(err=>{

        })
    }
}
export const actFetchAllCategoryByIdGroup=(data)=>{
    return{
        type:type.GET_CATEGORY_BY_ID_GROUP,
        data
    }
}

//fetch all store


export const actFetchAllStoreRequest=()=>{
    const config = {
        headers: {
            'Content-Type': 'application/json',

        }
    };
    return dispatch=>{
        return callAPI('FetchAllStore','GET',null,config).then(res=>{
            dispatch(actFetchAllStore(res.data));
        }).catch(err=>{

        })
    }
}
export const actFetchAllStore=(data)=>{
    return{
        type:type.GET_ALL_STORE,
        data
    }
}
/// fetch all product

export const actFetchAllProductRequest=()=>{
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    return dispatch=>{
        return callAPI('FetchAllProduct','GET',null,config).then(res=>{
            dispatch(actFetchAllProduct(res.data));
        }).catch(err=>{

        })
    }
}
export const actFetchAllProduct=(data)=>{
    return{
        type:type.GET_ALL_PRODUCT,
        data
    }
}

//find product by id
export const actFetchProductsByIdRequest=(id)=>{
    return (dispatch)=>{
        return callAPI(`findProductById/${id}`,'GET',null).then(res=>{
            dispatch(actFetchProductsById(res.data));
        })
    }
}
export const actFetchProductsById=(products)=>{
    return{
        type:type.FIND_PRODUCT_BY_ID,
        products
    }
}




