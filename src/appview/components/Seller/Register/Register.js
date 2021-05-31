import React, { Component ,Fragment} from 'react';
import './Register.scss';
import Loading from './../../../components/Loading/Loading';
import {Link} from 'react-router-dom';
import Noty from 'noty';
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux';
import * as actionSeller from './../../../actions/seller';
import * as message from '../../../constants/Message';

const emailRegex=RegExp(/^[a-z][a-z0-9_\.]{3,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1}$/);
const checkEmail=(email)=>{
    var string="";
    if(!email){
        string="Nhập email của bạn.";
    }else{
        if(0<email.length && email.length<6){
            string="Độ dài của email phải từ 12-60 kí tự.";
        }
        if(email.length>5 && !emailRegex.test(email)){
            string="Email này không hợp lệ";
        }
    }
    

    return string;
}
const checkMatKhau=(mk)=>{
    var string=""
    if(mk.length==0){
        string="Nhập mật khẩu của bạn.";
    }
    if(0<mk.length && mk.length<8){
        string="Độ dài của mật khẩu phải từ 9-50 kí tự.";
    }
    if(mk.length >6 && mk.length<7){
        string="Mật khẩu phải có các ký tự chữ và số.";
    }
    
    return string;
}
const checkCode=(codeServer,codeClient)=>{
    var string='';
    if(codeClient!=codeServer){
        string="Code xác nhận email không chính xác.";
    }
    return string;
}
const checkMatKhauXacNhan=(mk,mkXN)=>{
    var string="";
    if(mk!=mkXN){
        string="Mật khẩu xác  nhận chưa chính xác.";
    }
    return string;
}
const checkName=(name)=>{
    var string="";
    if(!name){
        string="Nhập tên gian hàng của bạn."
    }else{
        if(name.length>0 && name.length<10){
            string="Độ dài của tên phải từ 11-60 kí tự."
        }
    }
    return string;
}
const checkPolicy=(chbLazada)=>{
    var string="";
    if(!chbLazada){
        string="Vui lòng đồng ý với điều khoản và điều kiện";
    }
    return string;
    
}

const checkAll=(txtEmail,txtNumXN,txtPass,txtPassXN,txtTenStore,chbLazada)=>{
    var result=false;
    if(txtEmail.length==0 && txtNumXN.length==0 && txtPass.length==0 && txtPassXN.length==0 && txtTenStore.length==0 && chbLazada.length==0){
        result=true;
    }
    return result;
}

class Register extends Component{
    constructor(props){
        super(props);
        this.state={
            checkError:true,
            redirect:false,
            click:false,
            txtRange:0,
            show:false,
            radLoaihinh:'cn',
            sltDchi:"vn",
            txtEmail:'',
            txtNumXN:'',
            txtPass:'',
            txtPassXN:'',
            txtTenStore:'',
            chbLazada:false,
            countTime:60,
            formError:{
                radLoaihinh:'',
                sltDchi:'',
                txtEmail:'',
                txtNumXN:'',
                txtPass:'',
                txtPassXN:'',
                txtTenStore:'',
                chbLazada:''
            }
        }
    }
    onHandleChange=(e)=>{
        var target=e.target;
        var name=target.name;
        var value=target.type==="checkbox"? target.checked:target.value;
        this.setState({
            [name]:value
        });
        var {txtEmail,txtRange,txtPass,txtTenStore,formError}=this.state;
        if(txtEmail.length<14){
            this.setState({
                txtRange:0
            })
        }else{
            formError.txtTenStore=checkName(txtTenStore);
            formError.txtPass=checkMatKhau(txtPass);
            formError.txtNumXN="Nhận mã từ email của bạn.";
            formError.txtPassXN="Nhập mật khẩu xác nhận của bạn."
        }
        if(txtRange >75){
            this.setState({
                txtRange:100
            })
        }
        if(txtEmail.length<15){
            this.setState({
                txtRange:0
            })
        }
        formError.txtEmail=checkEmail(txtEmail);
        this.setState({
            formError
        })
    }
    Notification=(type,text)=>{
        new Noty({
            type:type,
            layout:"topRight",
            text:text,
            timeout:1000
        }).show();
    }
    onSubmit=(e)=>{
        e.preventDefault();
        var {txtEmail,txtPass,txtRange,txtPassXN,txtTenStore,formError,chbLazada,txtNumXN,chbLazada,radLoaihinh,sltDchi,click}=this.state;
        formError.txtEmail=checkEmail(txtEmail);
        formError.txtNumXN=checkCode(this.props.codeEmail,txtNumXN);
        formError.txtPassXN=checkMatKhauXacNhan(txtPass,txtPassXN);
        if(txtEmail.length>14){
            formError.chbLazada=checkPolicy(chbLazada);
        }
        this.setState({
            formError
        });
        if(txtRange>80){
            this.setState({
                txtRange:100
            })
        }
        if(checkAll(formError.txtEmail,formError.txtNumXN,formError.txtPass,formError.txtPassXN,formError.txtTenStore,formError.chbLazada)){
            var body={
                email:txtEmail,
                password:txtPass,
                nameStore:txtTenStore,
                businessStoreType:radLoaihinh,
                addressStore:sltDchi
            }
            this.props.onRegisterSeller(body);
            this.setState({
                click:true
            })
        }
        
    }
    showPassword=()=>{
        var {show}=this.state;
        this.setState({
            show:!show
        })
    }
    
    render(){
        var count=0;
        var {codeEmail}=this.props;
        console.log("codemail",codeEmail);
        var {sltDchi,txtEmail,txtPass,txtPassXN,txtTenStore,formError,radLoaihinh,chbLazada,show,txtRange,txtNumXN,click,redirect}=this.state;
        var check=false;
        if(txtEmail.length<14){
            check=false;
            var check1={
                "check":"1"
            };
            localStorage.setItem('checkEmailSend',JSON.stringify(check1));
        }else{
            check=true
        }
        if(txtRange==100){
            var checkEmailSend=JSON.parse(localStorage.getItem('checkEmailSend'));
            if(checkEmailSend.check==1){
                console.log("vao day1");
                var check={
                    "check":"2"
                };
                localStorage.setItem('checkEmailSend',JSON.stringify(check));
                this.props.onSendMailRegister(txtEmail);
            }else{
                if(codeEmail=="" &&  !error){
                    this.setState({
                        txtRange:0
                    })
                }
            } 
        }
        console.log("click",click);
        if(click){
            if(this.props.error){
                this.Notification('success',message.MSG_REGISTER_SELLER_SUCCESS);
                setTimeout(() => {
                    this.setState({
                        redirect:true
                    })
                }, 9000);
                if(redirect){
                    this.setState({
                        click:false
                    })
                    return <Redirect to="/seller/login"/>
                }
            }
        }
        console.log("render");
        return(
            <Fragment>
                <div className="register_seller">
                    {click? <Loading/>:''}
                    <div className="header_register">
                        <div className="container text-left">
                            <Link className="linkLazada" to="/"><h5>LAZADA <br/><span>Fake shenTemmo</span></h5></Link>
                        </div>
                    </div>
                    <div className="main">
                        <div className="container-fluid">
                            <div className="dangnhap">
                                <h6>Chúc mừng! Chỉ còn một bước nữa để bắt đầu bán hàng với Lazada </h6><Link to="/seller/login" className="linkLazada">Đăng Nhập</Link>
                            </div>
                            <div className="form">
                                <h6 className="text-center">Đăng Ký</h6>
                                <hr/>
                                {this.props.error?'':
                                <div class="alert alert-danger alert-dismissible">
                                    <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                                    <strong>Danger!</strong> {message.MSG_REGISTER_SELLER_FAIL}
                                </div>
                                }
                                <form onSubmit={this.onSubmit}>
                                    <div className="form-group row">
                                        <label className="col-md-3 ">Loại hình *</label>
                                        <div className="col-md-8 businessType">
                                            <div className="form-check form-check-inline">
                                                <input 
                                                    className="form-check-input" 
                                                    type="radio" 
                                                    name="radLoaihinh"
                                                    value="cn"
                                                    onChange={this.onHandleChange}
                                                    checked={radLoaihinh==="cn"}
                                                    />
                                                <label >Cá nhân</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input 
                                                    className="form-check-input" 
                                                    type="radio" 
                                                    name="radLoaihinh" 
                                                    value="ct"
                                                    onChange={this.onHandleChange}
                                                    checked={radLoaihinh==="ct"}
                                                    />
                                                <label >Công ty</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                         <div className="col-md-8 offset-md-3">
                                            Vui lòng xác nhận bạn đã trên 18 tuổi để đủ điều kiện đăng ký tài khoản bán hàng cá nhân trên Lazada
                                         </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-md-3">Địa chỉ kho *</label>
                                        <div className="col-md-8">
                                            <select 
                                                name="sltDchi" 
                                                value={sltDchi}
                                                onChange={this.onHandleChange}
                                                className="form-control"
                                            >
                                                <option value="vn">Việt Nam</option>   
                                              
                                            </select>
                                            <p>{formError.sltDchi}</p>
                                        </div>
                                        
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-md-3 ">Email *</label>
                                        <div className="col-md-8">
                                            <input
                                                type="text" 
                                                autoComplete="off"
                                                className="form-control"
                                                name="txtEmail"
                                                value={txtEmail}
                                                onChange={this.onHandleChange}
                                            />
                                            <p>{formError.txtEmail}</p>
                                        </div>
                                        
                                    </div>
                                    <div className={txtRange==100 ? " form-group row":"hidden"}>
                                        <label className={txtRange ==100 ? " col-md-3":"hidden"}>Email Verification Code*</label>
                                        <div className={txtRange==100 ? " col-md-8 code":"  hidden"}>
                                                <input 
                                                    type="number" 
                                                    className="form-control"
                                                    placeholder="6 chữ số" 
                                                    autoComplete="off"
                                                    name="txtNumXN"
                                                    value={txtNumXN}
                                                    onChange={this.onHandleChange}
                                                />
                                            <p className="noti">{formError.txtNumXN}</p>
                                            <i> Gửi code sau({count})</i>
                                        </div>
                                    </div>
                                            
                                    <div className={txtRange !==100 ? "form-group row":"hidden"}>
                                        <label className={txtRange !==100 ? "col-md-3":"  hidden"}>Trượt để nhận mã Email</label>   
                                        <div className={txtRange !==100 ? "col-md-8":"  hidden"}>
                                            <input 
                                                disabled={!check?"disabled":""}
                                                type="range"
                                                className="form-control"
                                                placeholder="Trượt để nhận mã Email" 
                                                name="txtRange"
                                                value={txtRange}
                                                onChange={this.onHandleChange}
                                            />
                                                
                                        </div>
                                    </div>
                                    <div className={txtRange ==100 ? " form-group row":"hidden"}>
                                    <label className={txtRange ==100 ? " col-md-3":"hidden"}>Mật khẩu*</label>
                                        <div className={txtRange ==100 ? " col-md-8 mk":"  hidden"}>
                                            <input
                                                disabled={!check?"disabled":""}
                                                type={ !show? "password":"text" }
                                                className="form-control"
                                                name="txtPass"
                                                value={txtPass}
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
                                            <p>{formError.txtPass}</p>
                                        </div>
                                        
                                    </div>
                                    <div className={txtRange ==100 ? " form-group row":"hidden"}>
                                    <label className={txtRange ==100 ? " col-md-3":"hidden"}>Xác nhận mật khẩu*</label>
                                        <div className={txtRange ==100 ? " col-md-8":"  hidden"}>
                                            <input
                                                disabled={!check?"disabled":""}
                                                type="password" 
                                                autoComplete="off"
                                                className="form-control"
                                                name="txtPassXN"
                                                value={txtPassXN}
                                                onChange={this.onHandleChange}
                                            />
                                            <p className="noti">{formError.txtPassXN}</p>
                                        </div>
                                        
                                    </div>
                                    <div className={txtRange ==100 ? " form-group row":"hidden"}>
                                    <label className={txtRange ==100 ? " col-md-3":"hidden"}>Tên Store*</label>
                                        <div className={txtRange ==100 ? " col-md-8":"  hidden"}>
                                            <input
                                                disabled={!check?"disabled":""}
                                                autoComplete="off"
                                                type="text" 
                                                className="form-control"
                                                name="txtTenStore"
                                                value={txtTenStore}
                                                onChange={this.onHandleChange}
                                            />
                                            <p>{formError.txtTenStore}</p>
                                        </div>
                                        
                                    </div>
                                    <div className="form-group row">
                                        <div className="checkbox col-md-8 offset-md-3">
                                                <label>
                                                    <input
                                                        type="checkbox"
                                                        name="chbLazada"
                                                        value={true}
                                                        onChange={this.onHandleChange}
                                                        checked={chbLazada===true}
                                                    /> &nbsp;
                                                    Tôi đã đọc và đồng ý với Lazada <Link className="linkLazada" to="#">Điều khoản và Điều Kiện</Link>
                                                    <p>{formError.chbLazada}</p>
                                                </label>

                                        </div>
                                    </div>
                                    <div className="form-group text-center">
                                        <div className="text-center">
                                            <button type="submit">
                                                Đăng Ký
                                            </button>
                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                    <div className="footer">

                    </div>
                </div>
            </Fragment>
        )
    }
}
const mapStateToProps=state=>{
    return{
        codeEmail:state.codeEmail,
        error:state.error
    }
}

const mapDispatchToProps=(dispatch,props)=>{
    return{
        onSendMailRegister:(email)=>{
            dispatch(actionSeller.actSendMailRegisterSeller(email));
        },
        onRegisterSeller:(body)=>{
            dispatch(actionSeller.actRegisterSellerSuccessRequest(body));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Register);