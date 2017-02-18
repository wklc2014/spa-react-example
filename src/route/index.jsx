'use strict';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../redux/store/configureStore.js';
const store = configureStore();

import {Router, Route, IndexRoute, Redirect, hashHistory, browserHistory} from 'react-router';

import App from '../component/AppContainer.js';
import Dashboard from '../component/view/DashboardContainer.jsx';
import Counter from '../component/view/CounterContainer.jsx';

const route = (
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path='/' component={App}>
                <IndexRoute component={Dashboard} />
                <Route path='/counter' component={Counter} />
            </Route>
        </Router>
    </Provider>
);

export default route;
