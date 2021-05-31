import React, { Component ,Fragment} from 'react'
import {connect}from 'react-redux';
import ProductDetail from './../../../components/Customer/ProductDetail/ProductDetail';
import * as actionCustomer from './../../../actions/customer';
import * as actionMain from './../../../actions/actionMain';


class ProductDetailContainer extends Component{
    componentDidMount=()=>{
        var {match}=this.props;
        var {id}=match.params;
        this.props.actFetchProductsById(id);
    }
    render(){
        var {product,onAddToCart,category,groupCategory}=this.props;
        var nameGroup=this.findNameCategoryByProduct(category,product.cateID);
        var nameCategory=this.findNameGroupCategoryByProduct(groupCategory,category,product);
        return(
            <Fragment>
                <ProductDetail 
                    product={product}
                    onAddToCart={onAddToCart}
                    nameCategory={nameCategory}
                    nameGroup={nameGroup}
                />
            </Fragment>
        )
    }
    findNameCategoryByProduct=(category,product)=>{
        var result=null;
        result=category.map((item,index)=>{

            if(item._id===product){
                return item.name;
            }
        });
        return result;
    }
    findNameGroupCategoryByProduct=(groupCategory,category,product)=>{
        var result=null;
        var idGroup=category.map((item,index)=>{
            if(item._id==product.cateID){
                return item.groupCateID
            }
        });

        result=groupCategory.map((item,index)=>{
            if(item._id==idGroup){
                return item.name;
            }
        });
        return result;
    }
} 

const mapStateToProps=(state)=>{
    return{
            product:state.productsCustomer,
            category:state.categoryReducer,
            groupCategory:state.groupCategory
        }
    
}
const mapDispatchToProps=(dispatch,props)=>{
    return{
        actFetchProductsById:id=>{
            dispatch(actionMain.actFetchProductsByIdRequest(id));
        },
        onAddToCart:(product)=>{
            dispatch(actionCustomer.actAddToCart(product,1))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (ProductDetailContainer);

