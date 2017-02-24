'use strict';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import App from './App.jsx';

import {login} from '../redux/action/user_action.js';

function mapStateToProps(state) {
    return {
        counter: state.counter.data,
        user: state.user,
        routing: state.routing
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        login
    }, dispatch);
}

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
export default AppContainer;
