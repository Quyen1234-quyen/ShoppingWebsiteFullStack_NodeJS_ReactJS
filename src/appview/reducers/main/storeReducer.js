import * as type from'./../../constants/ContantsMain';

const initialState=[];
const storeReducer=(state=initialState,action)=>{
    
    switch(action.type){
        case type.GET_ALL_STORE:    
            state=action.data;
            return [...state];
          
        default: return [...state];
    }
}
export default storeReducer;