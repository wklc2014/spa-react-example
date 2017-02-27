'use strict';

import ActionType from '../actionType';

import ServiceLogin from '../../service/ServiceLogin.js';

export function ActionLogin(data) {
    return dispatch => {
        ServiceLogin(data, (stat, resp) => {
            if (stat === 'ok') {
                dispatch({
                    type: ActionType.LOGIN,
                    payload: {
                        username: resp.username
                    }
                })
            }
        })
    }
}

export function ActionLogout() {
    return {
        type: ActionType.LOGOUT
    }
}
