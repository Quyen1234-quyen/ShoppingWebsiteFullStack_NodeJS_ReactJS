import React,{Fragment}from 'react';
import HeaderContainer from './../../containers/Customer/HeaderContainer/HeaderContainer';
import Login from './../../components/Customer/Login/Login';
import FooterMain from './../../components/Customer/FooterMain/FooterMain';

function LoginPage(){
    return(
        <Fragment>
            <HeaderContainer/>
            <Login/>
            <FooterMain/>
        </Fragment>
    );
}
export default LoginPage;