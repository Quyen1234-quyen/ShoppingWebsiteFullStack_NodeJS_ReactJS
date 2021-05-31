

import React,{Component,Fragment} from 'react';
import './MenuController.scss';
import {Link} from 'react-router-dom';


class MenuController  extends Component{
    render(){
        return(
            <Fragment>
                <div className="header_seller_control">
                    <div className="container-fluid">
                        <div className="brand">
                            <h4>LAZADA</h4>
                            <span>SELLER CENTER</span>
                        </div>
                        <hr/>
                        <div className="row">
                           <div className=" menu">
                                <ul>
                                    <li>Sản Phẩm <span className="fa fa-chevron-down"></span>
                                        <ul className="submenu">
                                            <li>Quản lý sản phẩm</li>
                                            <li>Thêm Sản Phẩm</li>
                                            <li><Link to="/sellercenter/idff/cate">Quản Lý danh mục</Link></li>
                                        </ul>
                                    </li>
                                    <li>Đơn hàng <span className="fa fa-chevron-down"></span>
                                        <ul className="submenu">
                                            <li>Quản lý đơn hàng</li>
                                            
                                        </ul>
                                    </li>
                                    <li>Khuyến mãi<span className="fa fa-chevron-down"></span></li>
                                    <li>Gian hàng <span className="fa fa-chevron-down"></span></li>
                                    <li>Tài chính <span className="fa fa-chevron-down"></span></li>
                                </ul>
                           </div>
                        </div>
                        <p>feedback</p>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default MenuController;