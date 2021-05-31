import React,{Component,Fragment} from 'react';
import DanhRiengChoBan from './../../../components/Customer/DanhRiengChoBan/DanhRiengChoBan';
import {connect} from 'react-redux';
import ProductItem from '../../../components/Customer/ProductItem/ProductItem';
import * as actionMain from './../../../actions/actionMain';


class DanhRiengContainer extends Component{
    

    showProductItem=(products)=>{
        var result='';
        var min=0;
        var max=products.length;
        var arrayProduct=[];
        var arrayRandom=[];
        if(products.length >0){
            for(var i=0;i<18;i++){
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
                <DanhRiengChoBan>
                    {this.showProductItem(productReducer)}
                </DanhRiengChoBan>
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

export default connect(mapStateToProps,mapDispatchToProps)(DanhRiengContainer);