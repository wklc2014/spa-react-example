'use strict';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducer';

// applyMiddleware 来自 redux
// 可以包装 store 的 dispatch
// thunk 作用是使 action 创建函数
// 可以返回一个 function 代替一个 action 对象
const createStoreWithMiddleware = applyMiddleware(
    thunk
)(createStore);

function configureStore(initialState) {
    return createStoreWithMiddleware(reducer, initialState)
}

export default configureStore;
