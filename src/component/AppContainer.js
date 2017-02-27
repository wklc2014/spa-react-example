'use strict';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import App from './App.jsx';

import {
    ActionLogin,
    ActionLogout
} from '../redux/action/ActionUser.js';

function mapStateToProps(state) {
    return {
        counter: state.counter.data,
        user: state.user,
        routing: state.routing
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ActionLogin,
        ActionLogout
    }, dispatch);
}

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
export default AppContainer;
