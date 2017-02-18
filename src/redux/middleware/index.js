'use strict';
import {applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
const middlewares = [thunk];

if (__DEV__) {
    const createLogger = require('redux-logger');
    const logger = createLogger({
        level: 'info',
        collapsed: true
    });
    middlewares.push(logger);
}

const middleware = applyMiddleware(...middlewares);

export default middleware;
