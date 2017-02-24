'use strict';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import counter_reducer from './counter_reducer.js';
import user_reducer from './user_reducer.js';

// 使用 redux 的 combineReducers 方法
// 将所有 reducer 打包起来
const rootReducer = combineReducers({
  counter: counter_reducer,
  user: user_reducer,
  routing: routerReducer
})

export default rootReducer;
