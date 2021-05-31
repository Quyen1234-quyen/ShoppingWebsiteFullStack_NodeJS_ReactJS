import React,{Fragment}from 'react';
import HeaderContainer from './../../containers/Customer/HeaderContainer/HeaderContainer';
import Register from './../../components/Customer/Register/Register';
import FooterMain from './../../components/Customer/FooterMain/FooterMain';
function RegisterPage(){
    return(
        <Fragment>
            <HeaderContainer/>
            <Register/>
            <FooterMain/>
        </Fragment>
    );
}
export default RegisterPage;