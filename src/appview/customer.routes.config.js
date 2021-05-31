import React from 'react';

import HomePage from './pages/CustomerPage/HomePage';
import CartPage from './pages/CustomerPage/CartPage';
import LoginPage from './pages/CustomerPage/LoginPage';
import RegisterPage from './pages/CustomerPage/RegisterPage';
import ProductDetailPage from './pages/CustomerPage/ProductDetailPage';
import CheckOutPage from './pages/CustomerPage/CheckOutPage';
import ShopHomePage from './pages/CustomerPage/ShopHomePage';

const routesCustomer=[
    {
        path:'/',
        exact:true,
        main:()=><HomePage/>
    },
    {
        path:'/user/cart',
        exact:true,
        main:()=><CartPage/>
    },
    {
        path:'/user/login',
        exact:true,
        main:()=><LoginPage/>
    },
    {
        path:'/user/register',
        exact:true,
        main:()=><RegisterPage/>
    },
    {
        path:'/user/checkout',
        exact:true,
        main:()=><CheckOutPage/>
    },
    {
        path:'/products/productdetail/:id',
        exact:true,
        main:({match})=><ProductDetailPage match={match}/>
    },
    {
        path:'/shop/:id',
        exact:true,
        main:({match})=><ShopHomePage match={match}/>
    }
];

export default routesCustomer;