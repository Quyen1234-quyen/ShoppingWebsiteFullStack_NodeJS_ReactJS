import React,{Fragment}from 'react';
import HeaderContainer from './../../containers/Customer/HeaderContainer/HeaderContainer';
import CartContainer from './../../containers/Customer/CartContainer/CartContainer';
import DanhRiengContainer from './../../containers/Customer/DanhRiengContainer/DanhRiengContainer';
import FooterMain from './../../components/Customer/FooterMain/FooterMain';
function CartPage(){
    return(
        <Fragment>
            <HeaderContainer/>
            <CartContainer/>
            <DanhRiengContainer/>
            <FooterMain/>
        </Fragment>
    );
}
export default CartPage;