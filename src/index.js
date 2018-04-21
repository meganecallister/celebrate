import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import  '../node_modules/font-awesome/css/font-awesome.min.css';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './ducks/store';

ReactDOM.render(
    
    <Provider store={ store }>
        <HashRouter>
            <App />
        </HashRouter>            
    </Provider>
    
, document.getElementById('root'));
