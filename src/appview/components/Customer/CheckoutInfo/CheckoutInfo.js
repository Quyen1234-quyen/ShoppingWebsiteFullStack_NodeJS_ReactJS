import React,{Component,Fragment} from 'react'
import CartItem from './../CartItem/CartItem';
import './CheckoutInfo.scss';


class CheckoutInfo extends Component{
    render(){
        return(
            <Fragment>
                <div className="checkout_left">
                    <h6>Thong tin giao hang</h6>
                    <div className="form">
                        <form>
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">    
                                            <label >Ten *</label>
                                            <input 
                                                type="text" 
                                                className="form-control"
                                                placeholder="Họ Tên" 
                                                autoComplete="off"
                                                formNoValidate
                                                name="txtTen"
                                                    />
                                            <span>thong tin bat buoc</span>
                                        </div>
                                        <div className="form-group">    
                                            <label >Số điện thoại *</label>
                                            <input 
                                                type="number" 
                                                className="form-control"
                                                placeholder="Xin vui lòng nhập số điện thoại của bạn" 
                                                autoComplete="off"
                                                formNoValidate
                                                name="txtSoDienThoai"
                                                       
                                                    />
                                            <span>thong tin bat buoc</span>
                                        </div>

                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">    
                                            <label >Địa chỉ nhận hàng *</label>
                                            <input 
                                                type="text" 
                                                className="form-control"
                                                placeholder="Xin vui lòng nhập số điện thoại của bạn" 
                                                autoComplete="off"
                                                formNoValidate
                                                name="txtDiaChiNhanHang"
                                                        
                                            />
                                            <span>thong tin bat buoc</span>
                                        </div>
                                    </div>

                                </div>
                                <div className="row">
                                        <hr/>
                                        <CartItem/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </Fragment>
        );
    }
}


export default CheckoutInfo;