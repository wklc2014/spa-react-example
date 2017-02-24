'use strict';

function getBxsAssess(request) {
    const data = {
        authToken: {
            username: 'admin'
        },
        stat: 'delay'
    }
    return [200, {}, data];
}

export default getBxsAssess;
