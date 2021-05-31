import React,{Component,Fragment} from 'react';
import './Service.scss';


class Service extends Component{
    render(){
        return(
            <Fragment>
                <div className="service">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="service__item">
                                    {/* <img src="./src/public/img/lazada/lazmall.png" width="10%"/> node */}
                                    <img src="../../../img/lazada/service1.png" width="10%"/>
                                    <span>LazMall</span>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="service__item">
                                    <img src="../../../img/lazada/service2.png" width="10%"/>
                                    <span>Mã Giảm Gía</span>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="service__item">
                                    <img src="../../../img/lazada/service3.png" width="10%"/>
                                    <span>Dịch Vụ & Nạp Thẻ</span>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="service__item">
                                    <img src="../../../img/lazada/service4.png" width="10%"/>
                                    <span>Hàng Quốc Tế</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Service;