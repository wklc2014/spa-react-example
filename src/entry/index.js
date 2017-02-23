'use strict';
import React from 'react';
import ReactDOM, {render} from 'react-dom';
import { Provider } from 'react-redux';

import store from '../redux/store';

import {Router, hashHistory, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
const history = syncHistoryWithStore(hashHistory, store);

import '../style/index.scss';

import route from '../route';
const oApp = document.getElementById('app');

import '../mock';

render((
    <Provider store={store}>
        <Router history={history} routes={route(store)} />
    </Provider>
), oApp);
