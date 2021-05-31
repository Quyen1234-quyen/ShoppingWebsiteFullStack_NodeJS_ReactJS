import React,{Component,Fragment} from 'react';
import './HeaderMain.scss';

import HeaderLogo from './../HeaderLogo/HeaderLogo';
import HeaderSearch from './../HeaderSearch/HeaderSearch';
import HeaderCart from './../HeaderCart/HeaderCart';
class HeaderMain extends Component{
    render(){
        var {cart}=this.props;
        return(
            <Fragment>
                <div className="header__main">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-2">
                                <HeaderLogo/>
                            </div>
                            <div className="col-md-7">
                                <HeaderSearch/>
                            </div>
                            <div className="col-md-3">
                                <HeaderCart cart={cart}/>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default HeaderMain;