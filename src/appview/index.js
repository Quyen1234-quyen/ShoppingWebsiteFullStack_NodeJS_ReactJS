import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import AuthenRouter from './components/AuthenRouter/AuthenRouter';
import "bootstrap/dist/css/bootstrap.min.css";
// import "font-awesome/css/font-awesome.min.css";
import "jquery";
import "bootstrap/dist/js/bootstrap.min.js";
import 'noty/lib/noty.css';
import 'noty/lib/themes/mint.css';
import store from './store';
import {Provider} from 'react-redux';



ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
,document.getElementById('app'))