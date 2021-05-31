import React,{Component,Fragment} from 'react';
import './RegisterModel.scss';
import Register from './../../Register/Register';


class RegisterModel extends Component{
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
        var {isDisplay}=this.state;
        if(isDisplay===false){
            return(
                <Fragment/>
            )
        }else{
            return(
                <Fragment>
                    <div className="modle_register">
                        <div className="model_register_content">
                            <span 
                                className="fa fa-close close"
                                onClick={this.onClose}
                            ></span>
                            <Register/>
                        </div>
                    </div>
                </Fragment>
            );
        }
    }
}

export default RegisterModel;