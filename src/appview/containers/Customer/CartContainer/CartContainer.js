import React,{Component,Fragment} from 'react';
import Cart from './../../../components/Customer/Cart/Cart';
import {connect} from 'react-redux';
import CartItem from '../../../components/Customer/CartItem/CartItem';
import * as Message from './../../../constants/Message';
import * as actionCustomer from './../../../actions/customer';


class CartContainer extends Component{
    showCartItem=(cart)=>{
        var {onDeleteCart,onUpdateCart}=this.props;
        var result=Message.MSG_CART_EMPTY;
        if(cart.length>0){
            result=cart.map((item,index)=>{
                return <CartItem
                    key={index}
                    item={item}
                    index={index}
                    onDeleteCart={onDeleteCart}
                    onUpdateCart={onUpdateCart}
                />
            });
        }
        return result;
    }
    render(){
        var {cart,onDeleteAllCart}=this.props;
        return(
            <Fragment>
                <Cart cart={cart} onDeleteAllCart={onDeleteAllCart}>
                    {this.showCartItem(cart)}
                </Cart>
            </Fragment>
        );
    }
}
const mapStateToProps=(state)=>{
    return {
        cart:state.cart
    }
}
const mapDispatchToProps=(dispatch,props)=>{
    return{
        onDeleteCart:(product)=>{
            dispatch(actionCustomer.actRemoveToCart(product));
        },
        onUpdateCart:(product,quantity)=>{
            dispatch(actionCustomer.actUpdateToCart(product,quantity));
        },
        onDeleteAllCart:()=>{
            dispatch(actionCustomer.actDeleteAllCart());
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (CartContainer);