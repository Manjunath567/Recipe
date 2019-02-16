import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
//import App from './Component/App/App';
import Routes from './Routes';

ReactDOM.render(
        <BrowserRouter>
            <Routes />
        </BrowserRouter>,
    document.getElementById('root')
);
