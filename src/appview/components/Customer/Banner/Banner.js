import React,{Component,Fragment} from 'react';
import './Banner.scss';

import BannerMenu from './../BannerMenu/BannerMenu';
import BannerSlider from './../BannerSlider/BannerSlider';


class Banner extends Component{
    render(){
        return(
            <Fragment>
                <div className="banner">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-3" >
                               <BannerMenu/>
                            </div>
                            <div className="col-md-9">
                                <BannerSlider/>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Banner;