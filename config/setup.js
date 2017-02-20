/**
 * mock ajax 数据
 */

'use strict';

module.exports = function(app) {
    // Here you can access the Express app object
    // and add your own custom middleware to it.
    // For example, to define custom handlers for some paths:
    app.get('/assess/login', function(req, res) {
        res.json({
            custom: 'response',
            stat: 'ok'
        });
    });
}
