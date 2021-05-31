import React, { Component ,Fragment} from 'react';
import {connect} from 'react-redux';
import HeaderController from './../../../components/Seller/ControllerSeller/HeaderController/HeaderController';


class HeaderContainer extends Component{
    render(){
        var {products}=this.props;
        return(
            <Fragment>
                <HeaderController nameStore={products.nameStore}/>
            </Fragment>
        )
    }
}
const mapStateToProps=state=>{
    return{
        products:state.products
    }
}

const mapDispatchToProps=(dispatch,props)=>{
    return{

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(HeaderContainer);