'use strict';
function getBxsAssess(req, res) {
    res.json({
        authToken: {
            username: 'admin'
        },
        stat: 'delay'
    });
}

module.exports = getBxsAssess;
