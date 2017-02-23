'use strict';

module.exports = function getBxsAssess(res) {
    res.body = {
        authToken: {
            username: 'admin'
        },
        stat: 'delay'
    }
    return {
        username: 'admin'
    };
}
