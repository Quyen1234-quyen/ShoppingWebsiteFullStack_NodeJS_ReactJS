

import React,{Component,Fragment} from 'react';
import {Link} from 'react-router-dom';
import './ShopMenuSearch.scss';

class ShopMenuSearch extends Component{
    render(){
        return(
            <Fragment>
                <div className="shop_menu_search">
                    <div className="container-fluid">
                        <ul>
                            <li><Link to="/shop" className="item">Trang Chủ</Link></li>
                            <li><Link to="/profile" className="item">Hồ Sơ</Link></li>
                        </ul>
                        <div>
                            <input 
                                type="text"
                                placeholder="Tìm kiếm trong cửa hàng"
                            />
                            <i className="fa fa-search"></i>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}


export default ShopMenuSearch;