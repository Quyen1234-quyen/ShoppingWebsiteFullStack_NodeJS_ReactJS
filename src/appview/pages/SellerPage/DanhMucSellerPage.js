import React, { Component ,Fragment} from 'react';

import HeaderController from './../../components/Seller/ControllerSeller/HeaderController/HeaderController';
import MenuController from './../../components/Seller/ControllerSeller/MenuController/MenuController';
import Pagination from './../../components/Seller/ControllerSeller/Pagination/Pagination';


class DanhMucSellerPage extends Component{
    render(){
        return(
            <Fragment>
                <div className="seller_controller">
                <HeaderController/>
                <MenuController/>
                <Pagination/>
                </div>
            </Fragment>
        )
    }
}

export default DanhMucSellerPage;