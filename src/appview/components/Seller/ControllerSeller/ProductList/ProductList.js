import React, { Component ,Fragment} from 'react';
import './ProductList.scss';
import FormAction from '../FormAction/FormAction';
import {connect} from 'react-redux';
import * as action from '../../../../actions/seller';

class ProductList extends Component{
   
    DisplayFormAction=()=>{
        this.props.onOpenForm();
        this.props.actClearProduct({
            _id:''
        });
    }
    render(){
        var {isDisplayForm}=this.props;
        return(
            <Fragment>
                {isDisplayForm? <FormAction/>:''}
                
                <div className="seller_controller_product">
                        <div className="container-fluid">
                        <h6>Tổng quan sản phẩm</h6> 
                        <i></i>
                            <div className="seller_controller_tasks">
                                <div>
                                    <span
                                        onClick={this.DisplayFormAction}
                                    >Thêm sản phẩm</span>
                                </div>
                                <div>
                                    <input
                                        name="keyresearch"
                                        type="text"
                                        autoComplete="off"
                                        placeholder="Tìm theo tên...."
                                    />
                                    <span>Tìm kiếm</span>
                                </div>
                            </div>
                            <div className="list_product">
                                <div className="product">
                                    <div className="product_header">    
                                        <div>STT</div>
                                        <div>Hình ảnh</div>
                                        <div>Tên</div>
                                        <div>Gía gốc</div>
                                        <div>Gía bán</div>
                                        <div>Sẵn có</div>
                                        <div>Trạng thái</div>
                                        <div>Thao tác</div>
                                    </div>
                                    <div className="product_header_filter">
                                        <div className="filterName">
                                            <input
                                                name="filterName"
                                                type="text"
                                                autoComplete="off"
                                                placeholder="Lọc sản phẩm theo tên...."

                                            />
                                        </div>
                                        <div className="filterStatus">
                                            <select 
                                                name="filterStatus"
                                            >
                                                <option value={0}>Còn hàng</option>
                                                <option value={1}>Hết hàng</option>
                                            </select>
                                        </div>
                                    </div>
                                    {this.props.children}
                                   
                                </div>
                            </div>  
                        </div>
                   </div>
                
            </Fragment>
            
        )
    }
}


const mapStateToProps=state=>{
    return{
        isDisplayForm:state.isDisplayForm
    }
}

const mapDispatchToProps=(dispatch,props)=>{
    return{
        onCloseForm:()=>{
            dispatch(action.closeForm());
        },
        onOpenForm:()=>{
            dispatch(action.openForm());
        },
        actClearProduct:(product)=>{
            dispatch(action.actEditProduct(product));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductList);