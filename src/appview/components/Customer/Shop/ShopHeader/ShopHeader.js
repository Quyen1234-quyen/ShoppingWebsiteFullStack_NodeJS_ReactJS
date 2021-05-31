import React,{Component,Fragment} from 'react';
import './ShopHeader.scss';

import ShopHeaderInfor from './../ShopHeaderInfor/ShopHeaderInfor';

class ShopHeader extends Component{
    render(){
        return(
            <Fragment>
                <div className="header_shop">
                    <div className="container-fluid">
                        <div className="banner">
                            <ShopHeaderInfor/>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}


export default ShopHeader;