import React,{Component,Fragment} from 'react';
import {Link} from 'react-router-dom';
import './BannerMenu.scss';

class BannerMenu extends Component{
    render(){
        return(
            <div className="banner_Menu">
                <ul>
                    <li><Link to="/ahihi" className="item">Thiết Bị Di Động</Link><i className="fa fa-angle-right"></i>
                        <ul className="sub_menu_banner">
                            <li><Link to="/ahihi" className="item">Thiết Bị Di Động</Link><i className="fa fa-angle-right"></i></li>
                            <li><Link to="/ahihi" className="item">Thiết Bị Di Động</Link><i className="fa fa-angle-right"></i></li>
                            <li><Link to="/ahihi" className="item">Thiết Bị Di Động</Link><i className="fa fa-angle-right"></i></li>
                            <li><Link to="/ahihi" className="item">Thiết Bị Di Động</Link><i className="fa fa-angle-right"></i></li>
                            <li><Link to="/ahihi" className="item">Thiết Bị Di Động</Link><i className="fa fa-angle-right"></i></li>
                            <li><Link to="/ahihi" className="item">Thiết Bị Di Động</Link><i className="fa fa-angle-right"></i></li>
                        </ul>
                    </li>
                    <li><Link to="/ahihi" className="item">Phụ Kiện Điện Tử</Link><i className="fa fa-angle-right"></i></li>
                    <li><Link to="/ahihi" className="item">TV & Thiết Bị Điện Di Động</Link><i className="fa fa-angle-right"></i></li>
                    <li><Link to="/ahihi" className="item">Sức Khỏe & Làm Đẹp</Link><i className="fa fa-angle-right"></i></li>
                    <li><Link to="/ahihi" className="item">Hàng Mẹ,Bé & Đồ Chơi</Link><i className="fa fa-angle-right"></i></li>
                    <li><Link to="/ahihi" className="item">Siêu Thị Tạp Hóa</Link><i className="fa fa-angle-right"></i></li>
                    <li><Link to="/ahihi" className="item">Hàng Gia Dụng & Đời Sống</Link><i className="fa fa-angle-right"></i></li>
                    <li><Link to="/ahihi" className="item">Thời Trang Nam</Link><i className="fa fa-angle-right"></i></li>
                    <li><Link to="/ahihi" className="item">Thời Trang Nữ</Link><i className="fa fa-angle-right"></i></li>
                    <li><Link to="/ahihi" className="item">Phụ Kiện Thời Trang</Link><i className="fa fa-angle-right"></i></li>
                    <li><Link to="/ahihi" className="item">Thể Thao & Du Lịch</Link><i className="fa fa-angle-right"></i></li>
                    <li><Link to="/ahihi" className="item">Ôtô,Xe Máy & Thiết Bị Định Vị</Link><i className="fa fa-angle-right"></i></li>
                </ul>
            </div>
        );
    }
}

export default  BannerMenu;