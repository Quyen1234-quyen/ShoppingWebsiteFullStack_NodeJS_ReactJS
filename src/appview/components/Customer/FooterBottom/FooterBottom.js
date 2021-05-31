import React,{Component,Fragment} from 'react';
import './FooterBottom.scss';


class FooterBottom extends Component{
    render(){
        return(
            <Fragment>
                <div className="footerBottom">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6">
                                <span>Copyright © Le Van Quyen All Right Reserved.</span>
                            </div>
                            <div className="col-md-4">
                                <span>Kết nối với chúng tôi</span>
                                <ul className="footer__socials">
                                    <li><i className="fa fa-facebook"></i></li>
                                    <li><i className="fa fa-twitter"></i></li>
                                    <li><i className="fa fa-linkedin"></i></li>
                                    <li><i className="fa fa-github"></i></li>
                                    <li><i className="fa fa-pinterest-p"></i></li>
                                </ul>
                            </div>
                            <div className="col-md-2 text-right">
                                <span>© Lazada 2019</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default FooterBottom;


