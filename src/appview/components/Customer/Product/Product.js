import React,{Component,Fragment} from 'react';
import './Product.scss';

class Product extends Component{
    render(){
        return(
            <Fragment>
               <div className="row">
                    {this.props.children}
               </div>
            </Fragment>
        );
    }
}

export default Product;