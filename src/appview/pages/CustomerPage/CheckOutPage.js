import React,{Fragment}from 'react';
import HeaderContainer from './../../containers/Customer/HeaderContainer/HeaderContainer';
import CheckoutContainer from './../../containers/Customer/CheckoutContainer/CheckoutContainer';
import FooterMain from './../../components/Customer/FooterMain/FooterMain';
function CheckOutPage(){
    return(
        <Fragment>
            <HeaderContainer/>
            <CheckoutContainer/>
            <FooterMain/>
        </Fragment>
    );
}
export default CheckOutPage;