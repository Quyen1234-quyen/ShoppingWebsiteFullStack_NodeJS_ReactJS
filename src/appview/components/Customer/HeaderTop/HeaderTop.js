import React,{Component,Fragment} from 'react';
import {Link} from 'react-router-dom';
import './HeaderTop.scss';

import LoginModel from './../Authen/LoginModel/LoginModel';
import RegisterModel from'./../Authen/RegisterModel/RegisterModel';
class HeaderTop extends Component{
    render(){
        return(
            <Fragment>
                {/* <LoginModel/>
                <RegisterModel/> */}
                <div className="header__top">
                    <div className="container-fluid">
                            <ul >
                                <li><Link to="/seller/login" className="item">TIẾT KIỆM HƠN VỚI ỨNG DỤNG</Link></li>
                                <li><Link to="/seller/register" className="item">BÁN HÀNG CÙNG LAZADA</Link></li>
                                <li><Link to="/" className="item">CHĂM SÓC KHÁCH HÀNG</Link></li>
                                <li><Link to="/sellercenter/d" className="item">KIỂM TRA ĐƠN HÀNG</Link></li>
                                <li><Link to="/user/login" className="item">ĐĂNG NHẬP</Link></li>
                                <li><Link to="/user/register" className="item">ĐĂNG KÍ</Link></li>
                                <li><Link to="/" className="item">CHANGE LANGUAGE</Link></li>
                            </ul>
                            
                            
                        
                    </div>
                </div>
            </Fragment>
        )
    }
}


export default HeaderTop;