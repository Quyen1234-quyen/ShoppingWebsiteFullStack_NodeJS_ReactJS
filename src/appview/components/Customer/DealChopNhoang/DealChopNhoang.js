import React,{Component,Fragment} from 'react';
import './DealChopNhoang.scss';
import ProductItem from '../ProductItem/ProductItem';
class DealChopNhoang extends Component{
    render(){
        return(
            <Fragment>
               <div className="deal">
                    <div className="container-fluid">
                            <h4>Deal Chớp Nhoáng</h4>
                            <div className="deal_header">
                                <div className="row">
                                    <div className="col-md-4 deal_header_left">
                                        <div className="deal_db">Đang bán</div>
                                        <div className="deal_time">
                                            Kết thúc trong 
                                            <span>09</span>:
                                            <span>34</span>:
                                            <span>10</span>
                                        </div>
                                    </div>
                                    <div className="col-md-8 deal_header_right">
                                        <button>
                                            MUA SẮM TOÀN BỘ SẢN PHẨM
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="deal_container">
                                <div className="row">
                                  {this.props.children}
                                </div>
                            </div>
                    </div>
               </div>
            </Fragment>
        );
    }
}

export default DealChopNhoang;