

import React,{Component,Fragment} from 'react';
import './ControllerSeller.scss';
import {Link} from 'react-router-dom';
import MenuController from './MenuController/MenuController';
import HeaderController from './HeaderController/HeaderController';
import ProductList from './ProductList/ProductList';
import Pagination from './Pagination/Pagination';


class ControllerSeller extends Component{
    render(){
        return(
            <Fragment>
               <div className="seller_controller">
                    
                   <MenuController/>
                   <HeaderController/>
                   <ProductList/>
                   <Pagination/>
               </div>
            </Fragment>
        );
    }
}


export default ControllerSeller;