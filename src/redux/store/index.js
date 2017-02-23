'use strict';
import { createStore, compose } from 'redux';
import middleware from '../middleware';
import reducer from '../reducer';

const store = createStore(
    reducer,
    middleware
);

export default store;
