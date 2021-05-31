import React,{Component,Fragment} from 'react';
import SellerProductListContainer from './../../containers/Seller/SellerProductListContainer/SellerProductListContainer';
import HeaderContainer from './../../containers/Seller/HeaderContainer/HeaderContainer';
import MenuController from './../../components/Seller/ControllerSeller/MenuController/MenuController';
import Pagination from './../../components/Seller/ControllerSeller/Pagination/Pagination';
class ControllerSellerPage extends Component{
    render(){
        var{match}=this.props;
        return (
            <Fragment>
                <div className="seller_controller">
                <HeaderContainer/>
                <MenuController/>
                <SellerProductListContainer match={match}/>
                <Pagination/>
                </div>
            </Fragment>
        )
    }
}

export default ControllerSellerPage;