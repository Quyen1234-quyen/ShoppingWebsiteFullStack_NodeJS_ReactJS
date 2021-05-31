import React from 'react';

import LoginSellerPage from './pages/SellerPage/LoginSellerPage';
import RegisterSellerPage from './pages/SellerPage/RegisterSellerPage';
import ControllerSellerPage from './pages/SellerPage/ControllerSellerPage';
import DanhMucSellerPage from './pages/SellerPage/DanhMucSellerPage';

const routesSeller=[
    {
        path:'/seller/login',
        exact:true,
        main:()=><LoginSellerPage/>
    },
    {
        path:'/seller/register',
        exact:true,
        main:()=><RegisterSellerPage/>
    },
    {
        path:'/sellercenter/:id/:token',
        exact:true,
        main:(match)=><ControllerSellerPage match={match}/>
    },
    {
        path:'/sellercenter/:id/cate',
        exact:true,
        main:(match)=><DanhMucSellerPage match={match}/>
    }
]


export default routesSeller;