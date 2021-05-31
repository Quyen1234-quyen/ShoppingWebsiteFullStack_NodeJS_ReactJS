import React,{Component ,Fragment} from 'react';
import CheckoutInfo from './../CheckoutInfo/CheckoutInfo';
import CheckoutResult from './../CheckoutResult/CheckoutResult';
import './Checkout.scss';

class Checkout extends Component{
    render(){
        return(
            <Fragment>
                <div className="checkout">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-8">
                                <CheckoutInfo/>
                            </div>
                            <div className="col-md-4">
                                <CheckoutResult/>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Checkout;
