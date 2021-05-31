import React,{Component,Fragment} from 'react';
import {Link} from 'react-router-dom';
import './ProductDetail.scss';



class ProductDetail extends Component{

    onAddToCart=(product)=>{
        console.log("nhay");
        this.props.onAddToCart(product);
    }
    render(){
        var {product,nameCategory,nameGroup}=this.props;
        return(
            <Fragment>
                {/* product_detail */}
                <div className="product_item_detail">
                    <div className="container-fluid">
                        {/* header */}
                        <div className="product_item_detail_header">
                            <div className="row">
                                <div className="col-md-12">
                                    <p>{nameGroup} >> {nameCategory}</p>
                                </div>
                            </div>
                        </div>
                        {/* main */}

                        <div className="product_item_contain">
                            <div className="row">
                                {/* left */}
                                <div className="col-md-8">
                                    <div className="row">
                                        <div className="col-md-5">
                                            <img src={product.img} width="100%"/>
                                        </div>
                                        <div className="col-md-7">
                                            <h5 className="name">{product.name}</h5>
                                            <div className="product_detail_rating">
                                                <ul>
                                                    <li><i className="fa fa-star-o"></i></li>
                                                    <li><i className="fa fa-star-o"></i></li>
                                                    <li><i className="fa fa-star-o"></i></li>
                                                    <li><i className="fa fa-star-o"></i></li>
                                                    <li><i className="fa fa-star-o"></i></li>
                                                </ul>
                                                <span>Không có đáng giá nào</span>
                                            </div>
                                            <div className="product_detail_brand">
                                                <span>Thương hiệu :</span><Link to="" className="item linkLazada">No Brand</Link>
                                            </div>
                                            <hr/>
                                            <div className="product_detail_price">
                                                <h4> {product.costPrice}đ</h4>
                                                <p><del>236.000 đ </del> &nbsp;-81%</p>
                                            </div>
                                            <h6>Khuyến mãi </h6>
                                            {/* <div className="product_detail_soluong">
                                                <span>Số lượng</span>
                                                <div>
                                                    <i className="fa fa-minus"></i>
                                                    <span >1</span>
                                                    <i className="fa fa-plus"></i>
                                                </div>
                                            </div> */}
                                            <div className="product_detail_action">
                                                <div className="buy_product icon">
                                                    Mua ngay
                                                </div>
                                                <div 
                                                    className="add_cart icon"
                                                    onClick={()=>this.onAddToCart(product)}
                                                >
                                                    Thêm vào giỏ hàng
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* right */}
                                <div className="col-md-4 ">
                                    <div className="product_detail_right">
                                        <p>Tùy chọn giao hàng</p>
                                        <div className="map">
                                            <div>
                                                <i className="fa fa-map-marker"></i>
                                            </div>
                                            <p>	Hồ Chí Minh,Quận 1 , Phường Phạm Ngũ Lão</p>
                                            <Link to="" className="item linkLazada">THAY ĐỔI</Link>
                                        </div>
                                        <div>
                                            <div>
                                                <i className="fa fa-truck"></i>
                                            </div>
                                            <p>Giao hàng hỏi tốc<br/>Ngày mai</p>
                                            <span className="item">29.7000đ</span>
                                        </div>
                                        <div>
                                            <div>
                                                <i className="fa fa-money"></i>
                                            </div>
                                            <p className="money">Thanh toán khi nhận hàng(Không được đổng kiểm)</p>
                                        </div>
                                        <p className="warranty">Đổi trả và Bảo hành <i className="fa fa-exclamation-circle"></i></p>
                                        <div>
                                            <div>
                                                <i className=" fa fa-check-square"></i>
                                            </div>
                                            <p className="money">100% hàng chính hãng</p>
                                        </div>
                                        <div>
                                            <div>
                                                <i className=" fa fa-check-square"></i>
                                            </div>
                                            <p className="money">7 ngày trả hàng dễ dàng <br/><span>không được đổi trả với lý do "không vừa ý"</span></p>
                                        </div>

                                        <div>
                                            <div>
                                                <i className=" fa fa-shield"></i>
                                            </div>
                                            <p className="money">Không áp dụng chính sách bảo hành</p>
                                        </div>

                                        <div className="your_store">
                                            <div className="store_infomation">
                                                <p>Được bán bởi<br/>
                                                    {product.storeID}<br/>
                                                    <span>LazMall<span>Gian Hàng Chính Hãng</span></span>
                                                    
                                                </p>
                                                <div className="text-right">
                                                    <i className="fa fa-comments"></i><span>Trò chuyện</span>
                                                </div>
                                            </div>
                                            <div className="evaluate">
                                                <div>
                                                    <span>Đánh giá tích</span><br/>
                                                    <span>cực</span>
                                                    <p>94%</p>
                                                </div>
                                                <div>
                                                    <span>Giao đúng hạn</span>
                                                    <p className="p">94%</p>
                                                </div>
                                                <div>
                                                <span>Tỷ lệ đánh giá</span>
                                                    <p className="p">94%</p>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    
                                        <div className="link_store">
                                            <h4><Link to={`/shop/${product.storeID}`} className="item linkLazada">Đến Gian Hàng</Link></h4>
                                        </div>
                                    </div>

                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }

    
}

export default ProductDetail;