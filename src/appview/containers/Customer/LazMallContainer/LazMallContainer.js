import React,{Component,Fragment} from 'react';
import LazMall from './../../../components/Customer/LazMall/LazMall';
import LazMallitem from './../../../components/Customer/LazMallitem/LazMallitem';
import {connect} from 'react-redux';
import *as actionMain from './../../../actions/actionMain';

class LazMallContainer extends Component{
   
    componentDidMount=()=>{
        this.props.onFetchAllStore();
    }
    showStore=(stores)=>{
        var result=null;
        if(stores){
            result=stores.map((store,index)=>{
                return(
                    <LazMallitem
                        key={index}
                        store={store}
                        index={index}
                    />
                )
            })
        }
        return result;
    }
    render(){
        var {storeReducer}=this.props;
        return(
            <Fragment>
                <LazMall>
                    {this.showStore(storeReducer)}
                </LazMall>
            </Fragment>
        );
    }


}
const mapStateToProps=state=>{
    return(
        {
            storeReducer:state.storeReducer
        }
    )
}
const mapDispatchToProps=(dispatch,props)=>{
    return{
        onFetchAllStore:()=>{
            dispatch(actionMain.actFetchAllStoreRequest())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(LazMallContainer);