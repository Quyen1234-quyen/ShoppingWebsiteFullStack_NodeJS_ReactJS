import React,{Component,Fragment} from 'react';
import './CartItem.scss';


class CartItem extends Component{
    onDeleteCart=(product)=>{
        this.props.onDeleteCart(product);
    }
    onUpdateCart=(product,quantity)=>{
        this.props.onUpdateCart(product,quantity);
    }
    render(){
        var {item,index}=this.props;
        if(!item) return '';
        return(
            <Fragment>
                <div className="cart_item_content">
                    <div className="product_thumnail">
                        <img src={item.product.img} width="100%"/>    
                    </div>
                    <div className="product_name">
                        {item.product.name}
                    </div>
                    <div className="product_price">{item.product.costPrice}</div>
                    <div className="product_quantity">
                        <i  
                            onClick={item.quantity==0?()=>this.onDeleteCart(item.product):()=>this.onUpdateCart(item.product,-1)}
                            className="fa fa-minus"></i>
                        <p>{item.quantity}</p>
                        <i 
                            onClick={()=>this.onUpdateCart(item.product,1)}
                            className="fa fa-plus"></i>    
                    </div>
                    <div className="product_subtotal">{this.showSubtotal(item.product.costPrice,item.quantity)}</div>
                    <div className="product_remove">
                        <i 
                            className="fa fa-trash"
                            onClick={()=>this.onDeleteCart(item.product)}
                        >
                        </i>
                    </div>
                </div>
            </Fragment>
        );
    }

    showSubtotal=(price,quantity)=>{
        return price*quantity;
    }
}


export default CartItem;