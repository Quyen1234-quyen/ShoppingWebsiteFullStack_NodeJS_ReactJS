import React,{Component,Fragment} from 'react';
import HeaderTop from './../../../components/Customer/HeaderTop/HeaderTop';
import HeaderMain from './../../../components/Customer/HeaderMain/HeaderMain';
import {connect} from 'react-redux';

class HeaderContainer extends Component{
    render(){
        var {cart}=this.props;
        return(
            <Fragment>
                <HeaderTop/>
                <HeaderMain cart={cart}/>
            </Fragment>
        )
    }
}
const mapStateToProps=state=>{
    return{
        cart:state.cart
    }
}
export default  connect(mapStateToProps,null)(HeaderContainer);
