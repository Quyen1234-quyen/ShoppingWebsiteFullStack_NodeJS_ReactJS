import React,{Component,Fragment} from 'react';
import {Link} from 'react-router-dom';
import './ProductItem.scss';



class ProductItem extends Component{
    showRating = rating => {
        let result = [];
        if (rating >= 0) {
            for (let i = 1; i <= rating; i++) {
                result.push(<i className="fa fa-star" key={'i' + i} />);
            }
            for (let j = 1; j <= 5 - rating; j++) {
                result.push(<i className="fa fa-star" key={'j' + j} />);
            }
            if (rating !== parseInt(rating)) {
                result.push(<i className="fa fa-star-half-alt" key={'rating' + rating} />);
            }
        }
        return result
    }
    render(){
        var {product,index}=this.props;
        if(product!=undefined){
            return(
                <Fragment>
                    <div className="col-md-2">
                        <div className="product_item">
                            <Link to={`/products/productdetail/${product._id}`} className="linkLazada">
                            <div className="image">
                                <img src={product.img} width="100%"/>
                            </div>
                            <div className="product_item_des">
                                <p className="title">{product.name}</p>
                                <p className="price">{product.costPrice}</p>
                                <div className="discount">
                                    <del>25.0000đ</del> <span>-20%</span>
                                </div>
                                <div className="rating">
                                    <div>
                                        {this.showRating(product.rating)}
                                    </div>
                                    <p>Ho Chi Minh</p>
                                </div>
                            </div>
                            </Link>
                        </div>
                    </div>
                    
                </Fragment>
            );
        }else{
            return ""
        }
    }
}

export default ProductItem;