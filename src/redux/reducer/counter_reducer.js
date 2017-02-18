'use strict';
import actionType from '../actionType';
const {
    COUNTER_INCREMENT,
    COUNTER_DECREMENT,
    COUNTER_ADD
} = actionType;

import {counterInitState} from '../initState';

// reducer 其实也是个方法而已
// 参数是 state 和 action
// 返回值是新的 state
function counter_reducer(state = counterInitState, action) {
    switch (action.type) {
        case COUNTER_INCREMENT:
            return Object.assign({}, state, {
                data: state.data + state.add
            });

        case COUNTER_DECREMENT:
            return Object.assign({}, state, {
                data: state.data - state.add
            });

        case COUNTER_ADD:
            return Object.assign({}, state, {
                add: action.payload
            });

        default:
            return state;
    }
}

export default counter_reducer;
