import React, { Component ,Fragment} from 'react';
import './ProductContainer.scss';
import Product from './../../../components/Customer/Product/Product';
import ProductItem from './../../../components/Customer/ProductItem/ProductItem';
import {connect} from 'react-redux';
import * as actionSeller from './../../../actions/seller';

class ProductContainer extends Component{
    componentDidMount=()=>{
        this.props.actFetchProducts(this.props.match.params.id);
    }
    showProducts=(products)=>{
        var result=null;
        if(products!==undefined){
            result=products.map((product,index)=>{
                return(
                    <ProductItem
                        key={index}
                        product={product}
                        index={index}
                    />
                )
            });
        }
        return result;
    }
    render(){
        var {products}=this.props;
        console.log(products);
        return(
            <Fragment>
                <div className="product_main">
                    <div className="container-fuild">
                    <Product>
                        {this.showProducts(products.product)}
                    </Product>
                    </div>
                </div>
            </Fragment>
        )
    }
}


const mapStateToProps=(state)=>{
    return{
        products:state.products
    }
}

const mapDispatchToProps=(dispatch,props)=>{
    return {
        actFetchProducts:(id)=>{
            dispatch(actionSeller.actFetchProductsByIdRequest(id))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductContainer);