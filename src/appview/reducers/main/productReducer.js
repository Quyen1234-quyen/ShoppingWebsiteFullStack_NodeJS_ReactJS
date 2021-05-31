import * as type from'./../../constants/ContantsMain';

const initialState=[];
const convertArray=(groupCate)=>{
    var result=[];
    groupCate.map((item,index)=>{
        result.push(item);
    })
    return result;
}
const productReducer=(state=initialState,action)=>{
    switch(action.type){
        case type.GET_ALL_PRODUCT:    
            state=convertArray(action.data);
            return [...state];
        default: return [...state];
    }
}
export default productReducer;