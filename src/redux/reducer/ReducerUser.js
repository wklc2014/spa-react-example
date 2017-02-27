'use strict';

import ActionType from '../actionType';

import {StateUser} from '../initialState';

export default function ReducerUser(state = StateUser, action) {
    switch (action.type) {
        case ActionType.LOGIN:
            return Object.assign({}, state, {
                username: action.payload.username
            });

        case ActionType.LOGOUT:
            return Object.assign({}, state, {
                username: ''
            });

        default:
            return state;
    }
}
