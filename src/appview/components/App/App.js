import React,{Fragment} from 'react';
import routesCustomer from './../../customer.routes.config';
import routesSeller from './../../seller.routes.config';
import NotFoundPage from './../../pages/CustomerPage/NotFoundPage';
import {Switch,BrowserRouter as Router,Route} from 'react-router-dom';
import './App.scss';

function App(){
    return(
        <Router>
                <Switch>
                {showRoutes(routesCustomer)}
                {showRoutesSeller(routesSeller)}
                <Route path="" exact={true} component={NotFoundPage} /> 
                </Switch>
        </Router>
        
    )   
}
const showRoutes=(routesCustomer)=>{
    var result=null;
    if(routesCustomer.length>0){
        result=routesCustomer.map((route,index)=>{
            return <Route
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                        key={index}
                    />
        })
    }
    return result;

    
}
const showRoutesSeller=(routesSeller)=>{
    var result=null;
    if(routesSeller.length>0){
        result=routesSeller.map((route,index)=>{
            return <Route
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                        key={index}
                    />
        })
    }
    return result;
}

export default App;