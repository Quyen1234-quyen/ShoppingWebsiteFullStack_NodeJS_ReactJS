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
                                                <span>Kh??ng c?? ????ng gi?? n??o</span>
                                            </div>
                                            <div className="product_detail_brand">
                                                <span>Th????ng hi???u :</span><Link to="" className="item linkLazada">No Brand</Link>
                                            </div>
                                            <hr/>
                                            <div className="product_detail_price">
                                                <h4> {product.costPrice}??</h4>
                                                <p><del>236.000 ?? </del> &nbsp;-81%</p>
                                            </div>
                                            <h6>Khuy???n m??i </h6>
                                            {/* <div className="product_detail_soluong">
                                                <span>S??? l?????ng</span>
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
                                                    Th??m v??o gi??? h??ng
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* right */}
                                <div className="col-md-4 ">
                                    <div className="product_detail_right">
                                        <p>T??y ch???n giao h??ng</p>
                                        <div className="map">
                                            <div>
                                                <i className="fa fa-map-marker"></i>
                                            </div>
                                            <p>	H??? Ch?? Minh,Qu???n 1 , Ph?????ng Ph???m Ng?? L??o</p>
                                            <Link to="" className="item linkLazada">THAY ?????I</Link>
                                        </div>
                                        <div>
                                            <div>
                                                <i className="fa fa-truck"></i>
                                            </div>
                                            <p>Giao h??ng h???i t???c<br/>Ng??y mai</p>
                                            <span className="item">29.7000??</span>
                                        </div>
                                        <div>
                                            <div>
                                                <i className="fa fa-money"></i>
                                            </div>
                                            <p className="money">Thanh to??n khi nh???n h??ng(Kh??ng ???????c ?????ng ki???m)</p>
                                        </div>
                                        <p className="warranty">?????i tr??? v?? B???o h??nh <i className="fa fa-exclamation-circle"></i></p>
                                        <div>
                                            <div>
                                                <i className=" fa fa-check-square"></i>
                                            </div>
                                            <p className="money">100% h??ng ch??nh h??ng</p>
                                        </div>
                                        <div>
                                            <div>
                                                <i className=" fa fa-check-square"></i>
                                            </div>
                                            <p className="money">7 ng??y tr??? h??ng d??? d??ng <br/><span>kh??ng ???????c ?????i tr??? v???i l?? do "kh??ng v???a ??"</span></p>
                                        </div>

                                        <div>
                                            <div>
                                                <i className=" fa fa-shield"></i>
                                            </div>
                                            <p className="money">Kh??ng ??p d???ng ch??nh s??ch b???o h??nh</p>
                                        </div>

                                        <div className="your_store">
                                            <div className="store_infomation">
                                                <p>???????c b??n b???i<br/>
                                                    {product.storeID}<br/>
                                                    <span>LazMall<span>Gian H??ng Ch??nh H??ng</span></span>
                                                    
                                                </p>
                                                <div className="text-right">
                                                    <i className="fa fa-comments"></i><span>Tr?? chuy???n</span>
                                                </div>
                                            </div>
                                            <div className="evaluate">
                                                <div>
                                                    <span>????nh gi?? t??ch</span><br/>
                                                    <span>c???c</span>
                                                    <p>94%</p>
                                                </div>
                                                <div>
                                                    <span>Giao ????ng h???n</span>
                                                    <p className="p">94%</p>
                                                </div>
                                                <div>
                                                <span>T??? l??? ????nh gi??</span>
                                                    <p className="p">94%</p>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    
                                        <div className="link_store">
                                            <h4><Link to={`/shop/${product.storeID}`} className="item linkLazada">?????n Gian H??ng</Link></h4>
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