import React,{Component,Fragment} from 'react';
import {Link} from 'react-router-dom';
import './LoginModel.scss';
import Login from './../../Login/Login';



class LoginModel extends Component{
    constructor(props){
        super(props);
        this.state={
            isDisplay:true
        }
    }
    onClose=()=>{
        var {isDisplay}=this.state;
        this.setState({
             isDisplay:false
        })
    }

    render(){
        if(this.state.isDisplay===false){
            return(
                <Fragment/>
            )
        }else{
            return(
                <Fragment>
                    <div>
                        <div className="model_login">
                            <div className="model_login_content">
                                <span 
                                className="fa fa-close close"
                                onClick={this.onClose}
                                ></span>
                                <Login/>
                            
                            </div>
                        </div>
                    </div>
                </Fragment>
            );
        }
        
    }
}


export default LoginModel;