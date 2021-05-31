import {combineReducers} from 'redux';
import isAuthenticated from './authentication/isAuthenticated';
import productsCustomer from './customer/productsCustomer';
import cart from './customer/cart';
import editProduct from './seller/editProduct';
import products from './seller/products';
import isDisplayForm from './seller/isDisplayForm';
import codeEmail from './seller/codeEmail';
import groupCategory from './main/groupCategory';
import categoryReducer from './main/categoryReducer';
import storeReducer from './main/storeReducer';
import productReducer from './main/productReducer';
import error from './main/error';


const appReducers=combineReducers({
    //main
    groupCategory,
    categoryReducer,
    storeReducer,
    productReducer,
    error,
    //authen
    isAuthenticated,
    //customer
    productsCustomer,
    cart,
    //seller
    isDisplayForm,
    products,
    editProduct,
    codeEmail
    //admin
    
});

export default appReducers;