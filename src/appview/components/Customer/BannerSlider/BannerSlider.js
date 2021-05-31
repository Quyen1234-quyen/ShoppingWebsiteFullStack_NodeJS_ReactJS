import React,{Component,Fragment} from 'react';
import './BannerSlider.scss';

class BannerSlider extends Component{
    render(){
        return(
            <Fragment>
                <div className="banner_Slider">
                <div id="demo" className="carousel slide" data-ride="carousel">
                            <ul className="carousel-indicators">
                                <li data-target="#demo" data-slide-to="0" className="active"></li>
                                <li data-target="#demo" data-slide-to="1"></li>
                                <li data-target="#demo" data-slide-to="2"></li>
                                <li data-target="#demo" data-slide-to="3"></li>
                                <li data-target="#demo" data-slide-to="4"></li>
                                <li data-target="#demo" data-slide-to="5"></li>
                                <li data-target="#demo" data-slide-to="6"></li>
                                <li data-target="#demo" data-slide-to="7"></li>
                            </ul>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="../img/lazada/slider1.png" alt=""  width="100%"/>
                                       
                                </div>
                                <div className="carousel-item">
                                    <img src="../img/lazada/slider2.png" alt=""  width="100%"/>
                                        
                                </div>
                                <div className="carousel-item">
                                    <img src="../img/lazada/slider3.png" alt=""  width="100%"/>
                                        
                                </div>
                                <div className="carousel-item">
                                    <img src="../img/lazada/slider5.png" alt=""  width="100%"/>
                                        
                                </div>
                                <div className="carousel-item">
                                    <img src="../img/lazada/slider6.png" alt=""  width="100%"/>
                                        
                                </div>
                                <div className="carousel-item">
                                    <img src="../img/lazada/slider7.png" alt=""  width="100%"/>
                                        
                                </div>
                                <div className="carousel-item">
                                    <img src="../img/lazada/slider8.png" alt=""  width="100%"/>
                                        
                                </div>
                                <div className="carousel-item">
                                    <img src="../img/lazada/slider9.png" alt=""  width="100%"/>
                                        
                                </div>
                            </div>
                            {/* <a className="carousel-control-prev" href="#demo" data-slide="prev">
                                <div className="icon-control"><i className="fa fa-chevron-left"></i></div>
                            </a>
                            <a className="carousel-control-next" href="#demo" data-slide="next">
                                <div className="icon-control"><i className="fa fa-chevron-right"></i></div>
                            </a> */}
                        </div>
                </div>
            </Fragment>
        );
    }
}

export default  BannerSlider;