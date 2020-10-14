import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { LLogin, Home, Register } from '../pages/index';
import { Provider } from 'react-redux';
import { store } from './redux/store'

export default (
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={LLogin} />
                <Route exact path="/register" component={Register} />
            </Switch>
        </BrowserRouter>
    </Provider>
)