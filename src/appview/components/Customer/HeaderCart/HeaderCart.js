import React,{Component,Fragment} from 'react';
import './HeaderCart.scss';
import {Link}  from 'react-router-dom';

class HeaderCart extends Component{
    showQuantityCart=(cart)=>{
        var result=0;
        if(cart!==undefined){
            for(let i=0;i<cart.length;i++){
                result += cart[i].quantity;
            }
        }
        return result;
    }
    render(){
        var {cart}=this.props;
        return(
            <Fragment>
                <div className="header__cart">
                    <Link to="/user/cart" className="cart_item"><img src="../../../img/lazada/shop-cart.png"/></Link>
                    <span>{this.showQuantityCart(cart)}</span>
                </div>
            </Fragment>
        );
    }
}

export default HeaderCart;