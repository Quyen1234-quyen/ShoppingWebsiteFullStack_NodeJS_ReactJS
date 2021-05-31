import React, { Component ,Fragment} from 'react';
import ProductList from '../../../components/Seller/ControllerSeller/ProductList/ProductList';
import ProductItem from '../../../components/Seller/ControllerSeller/ProductItem/ProductItem';
import {connect} from 'react-redux';
import {actFetchProductsByIdRequest,
        actRemoveProductSellerRequest,
        actUpdateProductSellerRequest,
        openForm,
        actEditProduct
} from '../../../actions/seller';
class SellerProductListContainer extends Component{
    constructor(props){
        super(props);
        this.state={
            products:{}
        }
    }
    
    componentDidMount=()=>{
        var {match}=this.props;
        this.props.actFetchProducts(match.match.params.id);
    }
    showProducts=(products)=>{
        var {actRemoveProductSeller,actEditProduct,actOpenActForm}=this.props;
        var result=null;
        if(products.product != undefined){
            result=products.product.map((product,index)=>{
                return(
                    <ProductItem
                        key={index}
                        product={product}
                        index={index}
                        actRemoveProductSeller={actRemoveProductSeller}
                        actEditProduct={actEditProduct}
                        actOpenActForm={actOpenActForm}
                    />
                )
            });
        }
        return result;
    }
    render(){
        var {products}=this.props;
        return(
            <Fragment>
                <ProductList>
                    {this.showProducts(products)}
                </ProductList>
            </Fragment>
        );
    }
    
}


const mapStateToProps=state=>{
    return{
        products:state.products
    }
}
const mapDispatchToProps=(dispatch,props)=>{
    return {
        actFetchProducts:(id)=>{
            dispatch(actFetchProductsByIdRequest(id));
        },
        actRemoveProductSeller:(product)=>{
            dispatch(actRemoveProductSellerRequest(product));
        },
        actUpdateProductSeller:(product)=>{
            dispatch(actUpdateProductSellerRequest(product));
        },
        actOpenActForm:()=>{
            dispatch(openForm());
        },
        actEditProduct:(product)=>{
            dispatch(actEditProduct(product));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SellerProductListContainer);