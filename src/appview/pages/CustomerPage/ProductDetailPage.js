import React,{Fragment,Component}from 'react';
import HeaderContainer from './../../containers/Customer/HeaderContainer/HeaderContainer';
import ProductDetailContainer from './../../containers/Customer/ProductDetailContainer/ProductDetailContainer';
import FooterMain from './../../components/Customer/FooterMain/FooterMain';
class ProductDetailPage extends Component{
    render(){
        var {match}=this.props;
        return(
            <Fragment>
                <HeaderContainer/>
                <ProductDetailContainer match={match}/>
                <FooterMain/>
            </Fragment>
        );
    }
    
}
export default ProductDetailPage;