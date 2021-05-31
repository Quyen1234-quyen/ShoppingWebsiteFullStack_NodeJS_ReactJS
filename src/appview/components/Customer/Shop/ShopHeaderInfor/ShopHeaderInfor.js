import React,{Component,Fragment} from 'react';
import './ShopHeaderInfor.scss';


class ShopHeaderInfor extends Component{
    render(){
        return (
            <Fragment>
                <div className="shop_header_infor">
                    <div className="shop_header_infor_content">
                        <div>
                            <img src="../../../img/lazada/logo.png" width="100%"/>
                        </div>
                        <div>
                            <p>Ten store</p>
                            <p>74 lượng theo dõi</p>
                            <p>99% đánh giá tích cực</p>
                        </div>
                        <div className="talk">
                            <i className="fa fa-comments"></i><br/><span>Trò chuyện</span>
                        </div>
                        <div className="follow">
                            <i className="fa fa-plus"></i><i className="fa fa-archive"></i><br/><span>Theo Dõi</span>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}


export default ShopHeaderInfor;