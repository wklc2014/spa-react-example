'use strict';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from './Counter.jsx';

import {
    ActionIncrement,
    ActionDecrement,
    ActionIncrementIfOdd,
    ActionIncrementAsync
} from '../../redux/action/ActionCounter.js';

function mapStateToProps(state) {
    return {
        counter: state.data
    }
}

// 将 action 的所有方法绑定到 props 上
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ActionIncrement,
        ActionDecrement,
        ActionIncrementIfOdd,
        ActionIncrementAsync
    }, dispatch);
}

const CounterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);
export default CounterContainer;
