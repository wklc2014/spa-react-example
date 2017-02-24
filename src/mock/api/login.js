'use strict';

function login(request) {
    const data = {
        custom: 'response',
        stat: 'ok'
    };

    return [200, {}, data];
};

export default login;
