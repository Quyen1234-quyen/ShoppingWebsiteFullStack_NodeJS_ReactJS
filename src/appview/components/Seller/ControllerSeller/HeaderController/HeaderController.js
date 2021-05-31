import React, { Component , Fragment} from 'react';
import './HeaderController.scss';




class HeaderController extends Component{
    render(){
        var {nameStore}=this.props;
        return(
            <Fragment>
                <div className="header">
                        <ul>
                            <li className="nameShop">{nameStore}-Shop <i className="fa fa-chevron-down"></i></li>
                            <li className="noti"><i className="fa fa-bell"></i>
                                <span>0</span>
                            </li>
                        </ul>
                </div>
            </Fragment>
        )
    }
}

export default HeaderController;