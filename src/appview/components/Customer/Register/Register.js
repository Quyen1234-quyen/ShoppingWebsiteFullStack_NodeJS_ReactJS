import React,{Component,Fragment} from 'react';
import {Link} from 'react-router-dom';
import './Register.scss';
import { PassThrough } from 'stream';


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
const checkNgaySinh=(ngay,thang,nam)=>{
    console.log(ngay,thang,nam);
    var string="";
    if(ngay==0 || thang ==0 || nam ==0){
        string ="Vui lòng chọn ngày sinh";
    }
    else{
        string="";
    }
    return string;
}
const checkHoTen=(hoTen)=>{
    var string="";
    if(hoTen.length==0){
        string="thông tin bắt buộc";
    }
    if(0<hoTen.length && hoTen.length<3){
        string="Độ dài phải từ 2 -50 kí tự";
    }
    if(hoTen.length==0){
        string="thông tin bắt buộc";
    }
    return string;
}

const checkAll=(email,pass,ngaysinh,hoten)=>{
    var result=false;
    if(email.length==0 && pass.length==0 && ngaysinh.length==0 && hoten.length==0){
        result=true;
    }
    return result;
}

class Register extends Component{
    constructor(props){
        super(props);
        this.state={
            show:false,
            txtEmail:"",
            txtRange:0,
            txtPassword:"",
            sltThang:0,
            sltNgay:0,
            sltNam:0,
            sltGioiTinh:1,
            txtTen:"",
            chbLazada:true,
            formErrors:{
                txtEmail:"",
                txtPassword:"",
                ngaySinh:"",
                txtTen:"",
                chbLazada:""
            }
        }
    }
   
    thang=()=>{
        var content=null;
        var result=[];
        for(var i=1;i<=12 ;i++){
            result.push(i);
        }
        if(result.length>0){
            content=result.map((t,index)=>{
                return <option value={index+1} key={index}>tháng {index+1}</option> ;
            })
        }
        return content;
    }
    ngay=()=>{
        var content=null;
        var result=[];
        for(var i=1;i<=31;i++){
            result.push(i);
        }
        if(result.length>0){
            content=result.map((t,index)=>{
                return <option value={index+1} key={index}> {index+1}</option> ;
            })
        }
        return content;
    }
    nam=()=>{
        var content=null;
        var result=[];
        for(var i=1;i<=31;i++){
            result.push(i);
        }
        if(result.length>0){
            content=result.map((t,index)=>{
                return <option value={index+1990} key={index}> {1990+index}</option> ;
            })
        }
        return content;
    }
    onHandleChange=(e)=>{
        var target=e.target;
        var name=target.name;
        var value=target.type === 'checkbox' ? target.checked :target.value;
        this.setState({
            [name]:value
        });
        var {formErrors,txtEmail,txtPassword,txtTen,sltNgay,sltThang,sltNam}=this.state;
        formErrors.txtEmail=checkEmail(txtEmail);
        formErrors.txtPassword=checkMatKhau(txtPassword);
        formErrors.txtTen=checkHoTen(txtTen);    
        formErrors.ngaySinh=checkNgaySinh(sltNgay,sltThang,sltNam);
        this.setState({
            formErrors
        })
    }
    showPassword=()=>{
        var {show}=this.state;
        this.setState({
            show:!show
        })
    }
    onSubmit=(e)=>{
        e.preventDefault();
        var {formErrors,txtEmail,txtPassword,sltThang,sltNgay,sltNam,txtTen}=this.state;
        formErrors.txtEmail=checkEmail(txtEmail);
        formErrors.txtPassword=checkMatKhau(txtPassword);
        formErrors.ngaySinh=checkNgaySinh(sltNgay,sltThang,sltNam);
        formErrors.txtTen=checkHoTen(txtTen);
        this.setState({
            formErrors
        })

        if(checkAll(formErrors.txtEmail,formErrors.txtPassword,formErrors.ngaySinh,formErrors.txtTen)){
            console.log("goi axios");
        }
    }    
    componentDidMount=()=>{
        var {sltThang,sltNgay,sltNam,formErrors}=this.state;
        if(sltNgay!=0 && sltThang!=0 && sltNam!=0){
            formErrors.ngaySinh="";
        }
        this.setState({
            formErrors
        })
    }
    render(){
        var {txtRange,formErrors,sltNgay,sltNam,sltThang,show,txtPassword,txtEmail}=this.state;
        var check=false;
        if(txtEmail.length>14){
            check=true;
        }
        return(
            <Fragment>
                <div className="register">
                    <div className="container">
                        <div className="register_header">
                            <h4>Tạo tài khoản lazada</h4><p>Bạn đã là thành viên?<Link to="/user/login">Đăng Nhập</Link> tại đây</p>
                        </div>
                        
                        <div className="main">
                            <div className="register_contain">
                                <form onSubmit={this.onSubmit}>
                                    <div className="row">
                                        {/* left */}
                                        <div className="col-md-6">
                                            <div className="form-group">    
                                                <label >Địa chỉ  email *</label>
                                                <input 
                                                    type="text" 
                                                    className="form-control"
                                                    placeholder="Vui lòng nhập email của bạn" 
                                                    autoComplete="off"
                                                    formNoValidate
                                                    name="txtEmail"
                                                    value={this.state.txtEmail}
                                                    onChange={this.onHandleChange}
                                                    onClick={this.onClick}
                                                />
                                                <span>{formErrors.txtEmail}</span>
                                            </div>
                                            <div className={txtRange >90 ? "form-group ":" form-group hidden"}>
                                                <label >Email Verification Code*</label>
                                                <input 
                                                    type="number" 
                                                    className="form-control"
                                                    placeholder="6 chữ số" 
                                                    autoComplete="off"
                                                />
                                                <span>thông tin bắt buộc.</span>
                                            </div>
                                            
                                            <div className={txtRange <=90 ? "form-group ":" form-group hidden"}>
                                                <label >Trượt để nhận mã Email >></label>
                                                <input 
                                                    disabled={!check ?"disabled":""}
                                                    type="range"
                                                    className="form-control"
                                                    placeholder="Trượt để nhận mã Email" 
                                                    name="txtRange"
                                                    value={this.state.txtRange}
                                                    onChange={this.onHandleChange}
                                                />
                                                
                                            </div>
                                            <div className="form-group mk">    
                                                <label >Mật Khẩu*</label>
                                                <input 
                                                    type={ !show? "password":"text" }
                                                    className="form-control " 
                                                    placeholder="Tối thiểu 6 kí tự bao gồm chữ và số" 
                                                    autoComplete="off"
                                                    data-toggle="password"
                                                    name="txtPassword"
                                                    value={txtPassword}
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
                                                <span>{formErrors.txtPassword}</span>
                                            </div>
                                            <div className="form-group ngay_sinh">
                                                <div>
                                                    <label>Ngày Sinh</label>
                                                    <div className="select">
                                                        <select 
                                                            name="sltNgay" 
                                                            value={sltNgay}
                                                            onChange={this.onHandleChange}
                                                            className="form-control">
                                                            <option value={0}>Ngày</option>
                                                            {this.ngay()}
                                                            
                                                    
                                                        </select>
                                                        <select 
                                                            id="thang"
                                                            name="sltThang" 
                                                            value={sltThang}
                                                            onChange={this.onHandleChange}
                                                            className="form-control">
                                                            <option value={0}>Tháng</option>
                                                            {this.thang()}
                                                            
                                                
                                                        </select>
                                    
                                                        <select 
                                        
                                                            name="sltNam" 
                                                            value={sltNam}
                                                            onChange={this.onHandleChange}
                                                            className="form-control">
                                                            <option value={0}>Năm</option>
                                                            {this.nam()}
                                            
                                                        </select>
                                                    </div>
                                                    <span>{formErrors.ngaySinh}</span>
                                                </div>
                                                <div className="gioi_tinh">
                                                    <label>Giới tính</label>
                                                    <select 
                                                        className="form-control"
                                                        name="sltGioiTinh"
                                                        value={this.state.sltGioiTinh}
                                                        onChange={this.onHandleChange}
                                                    >
                                                            <option value={1}>Nam</option>
                                                            <option value={0}>Nữ</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        {/* right */}
                                        <div className="col-md-6 register_right">
                                            <div className="form-group">    
                                                <label >Họ tên*</label>
                                                <input 
                                                    type="text" 
                                                    className="form-control"
                                                    placeholder="Họ Tên" 
                                                    autoComplete="off"
                                                    formNoValidate
                                                    name="txtTen"
                                                    value={this.state.txtTen}
                                                    onChange={this.onHandleChange}
                                                />
                                                <span>{formErrors.txtTen}</span>
                                            </div>
                                            <div className="checkbox">
                                                <label>
                                                    <input
                                                        type="checkbox"
                                                        name="chbLazada"
                                                        value={this.state.chbLazada}
                                                        onChange={this.onHandleChange}
                                                        checked={this.state.chbLazada === true}
                                                    /> &nbsp;
                                                    Tôi muốn nhận các thông tin khuyến mãi từ Lazada.
                                                </label>

                                            </div>
                                            <div className="form-group">
                                                <button
                                                    type="submit"
                                                    className="form-control"
                                                >
                                                Đăng Ký
                                                </button>
                                            </div>

                                            <div>
                                                <p>Tôi đồng ý với<Link to=""> Chính sách bảo mật Lazada</Link></p>
                                                <p>Hoặc Đăng kí với</p>
                                            </div>

                                            <div className="form-group">
                                                <button
                                                    id="sdt"
                                                    type="button"
                                                    className="form-control"
                                                >
                                                Đăng Ký bằng số điện thoại
                                                </button>
                                            </div>

                                            <div className="register_social">
                                                <div className="facebook icon">
                                                    <i className="fa fa-facebook"></i> Facebook
                                                </div>
                                                <div className="google icon">
                                                    <i className="fa fa-google-plus"></i> Google
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}



export default Register;