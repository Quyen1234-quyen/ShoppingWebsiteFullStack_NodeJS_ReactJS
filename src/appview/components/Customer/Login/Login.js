import React,{Component,Fragment} from 'react';
import {Link} from 'react-router-dom';
import './Login.scss';

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
            email:'',
            password:'',
            formErros:{
                email:'',
                pass:''
            }
        }
    }
    showPassword=()=>{
        var {show}=this.state;
        this.setState({
            show:!show
        })
    }
    onHandleChange=(e)=>{
        var target=e.target;
        var name=target.name;
        var value=target.type==='checkbox'? target.checked :target.value;
        this.setState({
            [name]:value
        });

        var {email,password,formErros}=this.state;
        formErros.email=checkEmail(email);
        formErros.password=checkMatKhau(password);
        this.setState({
            formErros
        })
    }
    onSubmit=(e)=>{
        e.preventDefault();
        var {email,password,formErros}=this.state;
        formErros.email=checkEmail(email);
        formErros.password=checkMatKhau(password);
        this.setState({
            formErros
        })

        if(checkAll(formErros.email,formErros.password)){
            console.log("goi axios");
        }
    }
    render(){
        var {email,password,formErros,show}=this.state;
        return(
            <Fragment>
                <div className="login">
                    <div className="container">
                        <div className="login_header">
                            <h4>Chào mừng đến với lazada.Đăng nhập ngay</h4><p>Thành viên mới?<Link to="/user/register">Đăng Ký</Link> tại đây</p>
                        </div>
                        <div className="main">
                            <form onSubmit={this.onSubmit}>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">    
                                        <label >Số điện thoại hoặc  email *</label>
                                        <input 
                                            type="text" 
                                            name="email"
                                            value={email}
                                            onChange={this.onHandleChange}
                                            className="form-control"  
                                            placeholder="Vui lòng nhập số điện thoại hoặc email của bạn" 
                                            autoComplete="off"
                                            />
                                        <span>{formErros.email}</span>
                                    </div>
                                    <div className="form-group mk">    
                                        <label >Mật Khẩu*</label>
                                        <input 
                                             type={ !show? "password":"text" }
                                            name="password"
                                            value={password}
                                            onChange={this.onHandleChange}
                                            className="form-control" 
                                            placeholder="Vui lòng nhập mật khẩu của bạn" 
                                            autoComplete="off"
                                            data-toggle="password"
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
                                            <span>{formErros.password}</span>
                                    </div>
                                    <div className="text-right">
                                        <Link to="/forgetpassword"><p >Quên mật khẩu?</p></Link>
                                    </div>
                                </div>
                                <div className="col-md-6 ">
                                    <div className="form-group login_right">
                                        <button
                                            type="submit"
                                            className="form-control"
                            
                                        >
                                            Đăng Nhập
                                        </button>
                                    </div>
                                    <div>
                                        <p>Hoặc,đăng nhập bằng</p>
                                    </div>
                                    <div className="login_social">
                                        <div className="facebook icon text-center">
                                            <i className="fa fa-facebook"></i> Facebook
                                        </div>
                                        <div className="google icon text-center">
                                            <i className="fa fa-google-plus"></i> Google
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}



export default Login;