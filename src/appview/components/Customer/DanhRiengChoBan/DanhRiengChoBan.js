import React,{Component,Fragment} from 'react';
import './DanhRiengChoBan.scss';
import ProductItem from '../ProductItem/ProductItem';

class DanhRiengChoBan extends Component{
    render(){
        return(
            <Fragment>
                <div className="danh_rieng_cho_ban">
                    <div className="container-fluid">
                        <h4>Dành Riêng Cho Bạn</h4>
                        <div className="danh_rieng_contain">
                            <div className="row">   
                                {this.props.children}
                            </div>
                        </div>
                        <div className="text-center btn_near_footer">
                            <p>
                                Tải Thêm
                            </p>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}


export default DanhRiengChoBan;