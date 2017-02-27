'use strict';

function MockGetBxsAssess(request) {
    const data = {
        authToken: {
            username: 'admin'
        },
        stat: 'delay'
    }
    return [404, {}, data];
}

export default MockGetBxsAssess;
