'use strict';

import actionType from '../actionType';

import {userInitState} from '../initState';

function login_reducer(state = userInitState, action) {
    switch (action.type) {
        case actionType.LOGIN:
            return Object.assign({}, state, {
                username: action.payload.username
            });

        default:
            return state;
    }
}

export default login_reducer;
