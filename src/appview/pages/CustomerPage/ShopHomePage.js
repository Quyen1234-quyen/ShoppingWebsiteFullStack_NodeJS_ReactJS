import React,{Fragment,Component}from 'react';
import HeaderContainer from './../../containers/Customer/HeaderContainer/HeaderContainer';
import FooterMain from './../../components/Customer/FooterMain/FooterMain';
import ShopContainer from './../../containers/Customer/ShopContainer/ShopContainer';
import ProductContainer from './../../containers/Customer/ProductContainer/ProductContainer';
class ShopHomePage extends Component{
    constructor(props){
        super(props);
    }
    render(){
        var {match}=this.props;
        return(
            <Fragment>
            <HeaderContainer/>
            <ShopContainer/>
            <ProductContainer match={match}/>
            <FooterMain/>
        </Fragment>
        )
    }
}
export default ShopHomePage;