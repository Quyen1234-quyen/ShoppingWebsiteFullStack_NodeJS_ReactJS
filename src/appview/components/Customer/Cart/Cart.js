import React,{Component,Fragment} from 'react';
import './Cart.scss';
import {Link} from 'react-router-dom';
import CartResult from '../CartResult/CartResult';


class Cart extends Component{
    onDeleteAllCart=()=>{
        this.props.onDeleteAllCart();
    }
    render(){
        var {cart,children}=this.props;
        return(
            <Fragment>
                <div className="cart">
                    {/* content_Cart */}
                    <div className="content_cart">
                        <div className="container-fluid">
                            
                            {/* body_content_cart */}
                            <div className="body_content_cart">
                                <div className="row">
                                    <div className="col-md-8">
                                        <div className="body_content">
                                            <div className="cart_item_header">
                                                <div>Image</div>
                                                <div>PRODUCT NAME</div>
                                                <div>UNTIL PRICE	</div>
                                                <div>QTY</div>
                                                <div>SUBTOTAL</div>
                                                <div>DELETE</div>
                                            </div>
                                            {this.showContentCartItem(children)}
                                            
                                        </div>
                                        <div className="cart_item_bottom">
                                                <div className="icon">
                                                    <Link to="/" className="linkLazada">Tiếp Tục Mua Hàng</Link>
                                                </div>
                                                <div
                                                    onClick={this.onDeleteAllCart} 
                                                    className="icon">
                                                    Xóa Tất Cả Sản Phẩm
                                                </div>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <CartResult cart={cart}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }

    showContentCartItem=(child)=>{
        var x=typeof(child)+'';
        var result=[];
        if(x == 'string'){
            result.push(
                <div className="child_cart_item"><h4>{child}</h4></div>
            );
        }
        else{
            result.push(child);
        }
        return result[0];
    }
}


export default Cart;