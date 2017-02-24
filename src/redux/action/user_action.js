'use strict';

import actionType from '../actionType';

export function login(name = 'admin_123') {
    return {
        type: actionType.LOGIN,
        payload: {
            username: name
        }
    }
}
