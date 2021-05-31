import * as type from'./../../constants/ContantsMain';

const initialState=[];
const convertArray=(groupCate)=>{
    var result=[];
    groupCate.map((item,index)=>{
        result.push(item);
    })
    return result;
}
const groupCategory=(state=initialState,action)=>{
    switch(action.type){
        case type.GET_CATEGORY_GROUP:
            state=convertArray(action.data);
            return [...state];
        default: return [...state];
    }
}
export default groupCategory;