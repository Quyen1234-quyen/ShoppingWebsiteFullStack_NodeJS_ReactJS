import React,{Component,Fragment} from 'react';
import {Link} from 'react-router-dom';
import './CartResult.scss';


class CartResult extends Component{
    render(){
        var {cart}=this.props;
        return(
            <Fragment>
                <div className="cart_result">
                    <div className="cart_result_content">
                        <p>Địa điểm</p>
                        <div className="map">
                            <i className="fa fa-map-marker"></i><span>Hồ Chí Minh,Quận 1,Phường Phạm Ngũ Lão</span>
                        </div>
                        <hr/>
                        <h5>Thông tin đơn hàng</h5>
                        <div>
                            <span>Tạm tính ({this.showToTalCart(cart)} sản phẩm)</span> <span className="gia">{this.showCartToTalAmount(cart)}đ</span>
                        </div>
                        <div>
                            <span>Phí giao hàng</span> <span>Free</span>
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder="Nhập mã giảm giá"
                                />
                            <span className="apdung "><Link to="#" className="item">ÁP DỤNG</Link></span>
                        </div>
                        <div>
                            <span>Tổng cộng</span> <span className="gia">{this.showCartToTalAmount(cart)}đ</span>
                        </div>
                        <p className="text-right">Đã bao gồm VAT (nếu có)</p>
                        <p className="text-center xacnhan"><Link to="/user/checkout" className="item linkLazada">XÁC NHẬN GIỎ HÀNG</Link></p>
                    </div>
                </div>
            </Fragment>
        );
    }
    showToTalCart=(cart)=>{
        var result=0;
        if(cart.length>0){
            for(var i=0;i<cart.length;i++){
                result+=cart[i].quantity;
            }
        }
        return result;
    }
    showCartToTalAmount=cart=>{
        var result=0;
        if(cart.length>0){
            for(var i=0;i<cart.length;i++){
                result+=cart[i].product.costPrice*cart[i].quantity;
            }
        }

        return result;
    }
}


export default CartResult;