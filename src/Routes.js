import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './component/Login/Login';
//import Home from './Component/Home/Home';
//import Register from './Component/Register/Register';
//import Forgot from './Component/Forgot/Forgot';
import App from './App';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/app" component={App} />

    </Switch>
)

export default Routes;
