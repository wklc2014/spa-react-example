'use strict';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from './Counter.jsx';

import {
    increment,
    decrement,
    incrementIfOdd,
    incrementAsync
} from '../../redux/action/counter_action.js';

function mapStateToProps(state) {
    return {
        counter: state.data
    }
}

// 将 action 的所有方法绑定到 props 上
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        increment,
        decrement,
        incrementIfOdd,
        incrementAsync
    }, dispatch);
}

const CounterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);
export default CounterContainer;
