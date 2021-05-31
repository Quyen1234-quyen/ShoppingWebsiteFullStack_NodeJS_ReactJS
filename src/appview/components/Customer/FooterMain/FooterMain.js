import React,{Component,Fragment} from 'react';
import FooterBanner from './../FooterBanner/FooterBanner';
import FooterBannerNear from './../FooterBannerNear/FooterBannerNear';
import FooterBottom from  './../FooterBottom/FooterBottom';

class FooterMain extends Component{
    render(){
        return(
            <Fragment>
                <FooterBanner/>
                <FooterBannerNear/>
                <FooterBottom/>
            </Fragment>
        );
    }
}


export default FooterMain;