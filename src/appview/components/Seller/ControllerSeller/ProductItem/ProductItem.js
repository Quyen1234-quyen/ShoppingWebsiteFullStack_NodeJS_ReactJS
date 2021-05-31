import React, { Component ,Fragment} from 'react';
import './ProductItem.scss';
import Noty from 'noty';
import * as message from './../../../../constants/Message';

class ProducItem extends Component{
    Notification=(type,text)=>{
        new Noty({
            type:type,
            layout:"topRight",
            text:text,
            timeout:1000
        }).show();
    }
    actRemoveProductSeller=()=>{
        this.props.actRemoveProductSeller(this.props.product);
        setTimeout(()=>{
            this.Notification('success',message.REMOVE_PRODUCT_SELLER_SUCCESS);
        },300)
    }
    actEditProduct=()=>{
        this.props.actOpenActForm();
        this.props.actEditProduct(this.props.product);
    }
    render(){
        var {product,index}=this.props;
        var statusName=product.status ? 'Con hang':'Het hang';
        var statusClass= product.status ? 'success':'default';
        return(
            <Fragment>
                <div className="product_content">
                    <div>{index}</div>
                    <div><img src={product.img} width="60%"/></div>
                    <div>{product.name}</div>
                    <div>{product.price}</div>
                    <div>{product.costPrice}</div>
                    <div>{product.inventory}</div>
                    <div>
                        <span className={`${statusClass}`}>
                            {statusName}
                        </span>
                    </div>
                    <div>
                        <span 
                            onClick={this.actEditProduct}
                            className="btnsua icon">
                            <i className="fa fa-wrench"></i> Sửa
                        </span>
                        &nbsp;&nbsp;&nbsp;
                        <span 
                            onClick={()=>{
                                if(window.confirm("Bạn muốn xóa nó ??")){
                                    this.actRemoveProductSeller();
                                }
                            }}
                            className="btnxoa icon">
                            <i 
                                className="fa fa-trash-o"
                            ></i> Xóa
                        </span>
                    </div>
                </div>
            </Fragment>
            
        )
    }
}


export default ProducItem;