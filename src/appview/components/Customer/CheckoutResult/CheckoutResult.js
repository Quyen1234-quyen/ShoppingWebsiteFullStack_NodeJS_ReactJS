import React,{Component,Fragment} from 'react';
import {Link} from 'react-router-dom';
import './CheckoutResult.scss';


class CheckoutResult extends Component{
    render(){
        return(
            <Fragment>
                <div className="checkout_right">
                <div className="cart_result_content">
                        <p className="text-center xacnhan"><Link to="/xacnhan" className="item">THANH TOÁN</Link></p>
                        <h5>Thông tin đơn hàng</h5>
                        <div>
                            <span>Tạm tính (1 sản phẩm)</span> <span className="gia">170.000đ</span>
                        </div>
                        <div>
                            <span>Phí giao hàng</span> <span>Free</span>
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder="Nhập mã giảm giá"
                                />
                            <span className="apdung "><Link to="/apdung" className="item">ÁP DỤNG</Link></span>
                        </div>
                        <div>
                            <span>Tổng cộng</span> <span className="gia">170.000đ</span>
                        </div>
                        <p className="text-right">Đã bao gồm VAT (nếu có)</p>
                        <p className="text-center xacnhan"><Link to="/xacnhan" className="item">THANH TOÁN</Link></p>
                    </div>
                </div>
            </Fragment>
        );
    }
}


export default CheckoutResult;