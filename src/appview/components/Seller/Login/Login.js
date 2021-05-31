import React, { Component,Fragment } from 'react';
import './Login.scss';
import {Redirect} from 'react-router-dom'
import Noty from 'noty';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {loginRequest} from '../../../actions/authentication';
import crypto from 'crypto-js';
import * as message from '../../../constants/Message';

const emailRegex=RegExp(/^[a-z][a-z0-9_\.]{3,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1}$/);
const checkEmail=(email)=>{
    var string="";
    if(email.length==0){
        string="thông tin bắt buộc.";
    }
    if(0<email.length && email.length<6){
        string="Độ dài của email phải từ 6-60 kí tự.";
    }
    if(email.length>5 && !emailRegex.test(email)){
        string="Email này không hợp lệ";
    }

    return string;
}

const checkMatKhau=(mk)=>{
    var string=""
    if(mk.length==0){
        string="thông tin bắt buộc";
    }
    if(0<mk.length && mk.length<6){
        string="Độ dài của email phải từ 6-50 kí tự.";
    }
    if(mk.length >5 && mk.length<7){
        string="Mật khẩu phải có các ký tự chữ và số.";
    }
    
    return string;
}
const checkAll=(email,pass)=>{
    var result=false;
    if(email.length==0 && pass.length==0){
        result=true;
    }
    return result;
}
class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            show:false,
            noti:false,
            redirect:false,
            click:false,
            password:'',
            email:'',
            formError:{
                password:'',
                email:''
            }
        }
    }
    componentWillMount(){
        var {isAuthenticated}=this.props;
    }
    componentDidMount=()=>{
        this.setState({
            redirect:false,
            click:false
        })
    }
    onHandleChange=(e)=>{
        var target=e.target;
        var name=target.name;
        var value=target.value;
        this.setState({
            [name]:value
        });
        var {email,password,formError}=this.state;
        formError.email=checkEmail(email);
        formError.password=checkMatKhau(password);
        this.setState({
            formError
        })
    }
    onSubmit=(e)=>{
        e.preventDefault();
        var {email,password,formError}=this.state;
        formError.email=checkEmail(email);
        formError.password=checkMatKhau(password);
        this.setState({
            formError
        })
        if(checkAll(formError.email,formError.password)){
            const body={
                email:email,
                password:password
            }
            this.props.onLogin(body);

            setTimeout(() => {
                this.setState({
                    click:true
                })
            }, 2900);
        }
        
    }
    Notification=(type,text)=>{
        new Noty({
            type:type,
            layout:"topRight",
            text:text,
            timeout:1000
        }).show();
    }
    showPassword=()=>{
        var {show}=this.state;
        this.setState({
            show:!show
        })
    }
    render(){ 
        var {password,email,formError,click,redirect,show,noti}=this.state;
        var {click}=this.state;
        var {isAuthenticated}=this.props;
        if(click){
            if(isAuthenticated.types==2 && isAuthenticated.idStore){
                if(!redirect){
                    {this.Notification('success',message.LOGIN_SUCCESS)}
                }
                setTimeout(()=>{
                    this.setState({
                        redirect:true

                    })
                },2000);
                if(redirect){
                    this.setState({
                        click:false
                    });

                    return <Redirect to={`/sellercenter/${isAuthenticated.idStore}/${sessionStorage.getItem("authenKey")}`}/>
                }
                
                
            }else{
                {this.Notification('warning',message.LOGIN_FAIL)}
                    this.setState({
                        click:false,
                        noti:false
                    })
            }
        }
        
        return(
            <Fragment>
                <div className="login_seller">
                    <div className="header_login">

                    </div>
                    <div className="main">
                        <div className="container-fluid">
                            <div className="form">
                                <form onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                        <input
                                            type="text" 
                                            autoComplete="off"
                                            className="form-control"
                                            name="email"
                                            value={email}
                                            onChange={this.onHandleChange}
                                            placeholder="Email"
                                        />
                                        <p>{formError.email}</p>
                                            
                                    </div>
                                    <div className="form-group mk">
                                        <input
                                            type={ !show? "password":"text" }
                                            className="form-control " 
                                            autoComplete="off"
                                            data-toggle="password"
                                            name="password"
                                            placeholder="Nhập mật khẩu của bạn"
                                            value={password}
                                            onChange={this.onHandleChange}
                                        />
                                        <i 
                                            className={ !show? "fa fa-eye-slash eye":"" }
                                            onClick={this.showPassword}
                                        >
                                        </i>
                                        <i 
                                            onClick={this.showPassword}
                                            className={ show? "fa fa-eye eye":"" }>
                                        </i>
                                        <p>{formError.password}</p>
                                            
                                    </div>
                                    <div className="form-group">
                                        <button className="form-control">
                                            Đăng Nhập
                                        </button>
                                    </div>
                                    <div className="text-right">
                                        <Link to="">Quên mật khẩu</Link>
                                    </div>
                                    <div className="text-center dangki">
                                        Chưa có tài khoản ? <Link to="/seller/register">Đăng Ký ngay</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
const mapStateToProps=state=>{
    return{
        isAuthenticated:state.isAuthenticated
    }
}
const mapDispatchToProps=(dispatch,props)=>{
    return{
        onLogin:(body)=>{
            dispatch(loginRequest(body));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Login);