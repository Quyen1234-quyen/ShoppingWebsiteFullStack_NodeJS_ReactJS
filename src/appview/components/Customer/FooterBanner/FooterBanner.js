import React,{Component, Fragment} from 'react';
import './FooterBanner.scss';


class FooterBanner extends Component{
    render(){
        return (
            <Fragment>
                <div className="footer_banner">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-4">
                                <img src="../../../img/lazada/footer1.png" width="100%"/>
                            </div>
                            <div className="col-md-4">
                                <img src="../../../img/lazada/footer2.png" width="100%"/>
                            </div>
                            <div className="col-md-4">
                                <img src="../../../img/lazada/footer3.png" width="100%"/>
                            </div>

                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}


export default FooterBanner;