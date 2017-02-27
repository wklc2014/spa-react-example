'use strict';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Dashboard from './Dashboard.jsx';

import {
    ActionChangeCounterAdd
} from '../../redux/action/ActionCounter.js';

function mapStateToProps(state) {
    return {
        add: state.counter.add
    }
}

// 将 action 的所有方法绑定到 props 上
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ActionChangeCounterAdd
    }, dispatch);
}

const DashboardContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);
export default DashboardContainer;
