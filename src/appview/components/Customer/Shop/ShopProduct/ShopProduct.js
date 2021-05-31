import React,{Component ,Fragment} from 'react';
import ProducItem from './../../../../components/Customer/ProductItem/ProductItem';
import './ShopProduct.scss';


class ShopProduct extends Component{
    render(){
        return (
            <Fragment>
                <div className="shop_product">
                    <div className="container-fluid">
                        <div className="shop_product_header">
                            <h4>Tên Shop</h4>
                            <div>
                                .
                            </div>
                        </div>
                        <hr/>
                        <div className="shop_product_item">
                            <div className="row ">
                                <ProducItem/>
                                <ProducItem/>
                                <ProducItem/>
                                <ProducItem/>
                                <ProducItem/>
                                <ProducItem/>
                            </div>
                        </div>
                        <div className="shop_product_pagination">
                            <ul>
                                <li><i className="fa fa-chevron-left"></i></li>
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                                <li>4</li>
                                <li><i className="fa fa-chevron-right"></i></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}


export default ShopProduct;