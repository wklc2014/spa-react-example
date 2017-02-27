'use strict';

function login(request) {
    const data = {
        username: 'abcdefg',
        stat: 'ok'
    };

    return [200, {}, data];
};

export default login;
