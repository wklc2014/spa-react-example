'use strict';
import actionType from '../actionType';
const {
    COUNTER_INCREMENT,
    COUNTER_DECREMENT,
    COUNTER_ADD,
} = actionType;

// 导出加一的方法
export function increment() {
    return {
        type: COUNTER_INCREMENT
    }
}

// 导出减一的方法
export function decrement() {
    return {
        type: COUNTER_DECREMENT
    }
}

// 导出奇数加一的方法，
// 该方法返回一个方法，包含 dispatch 和 getState 两个参数，
// dispatch 用于执行 action 的方法，
// getState 返回 state
export function incrementIfOdd() {
    return (dispatch, getState) => {
        const { counter } = getState();

        // 偶数则返回
        if (counter.data % 2 === 0) {
            return
        }
        // 没有返回就执行加一
        dispatch(increment());
    }
}

// 导出一个方法
// 包含一个默认参数 delay
// 返回一个方法
// 一秒后加一
export function incrementAsync(delay = 1000) {
    return dispatch => {
        setTimeout(() => {
            dispatch(increment());
        }, delay)
    }
}

export function changeCounterAdd(add) {
    return {
        type: COUNTER_ADD,
        payload: add
    }
}
