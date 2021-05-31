import React,{Component,Fragment} from 'react';
import ShopHeader from './ShopHeader/ShopHeader';
import ShopMenuSearch from './ShopMenuSearch/ShopMenuSearch';
import './Shop.scss';

class Shop extends Component{
    render(){
        return(
            <Fragment>
                <ShopHeader/>
                <ShopMenuSearch/>
            </Fragment>
        );
    }
}

export default Shop;