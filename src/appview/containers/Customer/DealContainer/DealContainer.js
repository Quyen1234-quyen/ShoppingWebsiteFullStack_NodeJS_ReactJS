import React,{Component,Fragment} from 'react';
import DealChopNhoang from './../../../components/Customer/DealChopNhoang/DealChopNhoang';
import {connect} from 'react-redux';
import ProductItem from './../../../components/Customer/ProductItem/ProductItem';
import * as actionMain from './../../../actions/actionMain';

class DealContainer extends Component{


    componentDidMount=()=>{
        this.props.onFetchAllProduct();
    }
    showProductItem=(products)=>{
        var result='';
        var min=0;
        var max=products.length;
        var arrayProduct=[];
        var arrayRandom=[];
        if(products.length >0){
            for(var i=0;i<6;i++){
                var random=Math.floor(Math.random() * (max - min))  +min;
                arrayProduct.push(products[random]);
            }
            if(arrayProduct.length>0){
                result=arrayProduct.map((item,index)=>{
                    return <ProductItem
                        key={index}
                        product={item}
                        index={index}
                        />
                })
            }
        }
        return result;
    }
    render(){
        var {productReducer}=this.props;
        return(
            <Fragment>
                <DealChopNhoang>
                    {this.showProductItem(productReducer)}
                </DealChopNhoang>
            </Fragment>
        );
    }
}


const mapStateToProps=state=>{
    return{
        productReducer:state.productReducer
    }
}

const mapDispatchToProps=(dispatch,props)=>{
    return{
        onFetchAllProduct:()=>{
            dispatch(actionMain.actFetchAllProductRequest());
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(DealContainer);