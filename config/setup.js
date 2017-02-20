/**
 * mock ajax 数据
 */
'use strict';

var mock = require('./mock');

module.exports = function(app) {
    app.all('*', function(req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        next();
    });
    Object.keys(mock).forEach(v => {
        var curr = mock[v];
        if (curr.status) {
            app.get(curr.api, curr.content);
        }
    })
}
