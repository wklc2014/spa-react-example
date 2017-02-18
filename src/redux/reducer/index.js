'use strict';

import { combineReducers } from 'redux';
import counter_reducer from './counter_reducer.js';

// 使用 redux 的 combineReducers 方法
// 将所有 reducer 打包起来
const rootReducer = combineReducers({
  counter: counter_reducer
})

export default rootReducer;
