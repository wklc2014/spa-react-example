'use strict';
var WebpackDevServer = require("webpack-dev-server");
var webpack = require("webpack");
var webpackConfig = require('./webpack.config.js');
var __SETUP__ = require('./setup.js');
var __ENV__ = require('./env.js');

var compiler = webpack(webpackConfig);
var __PORT__ = 8080;

var server = new WebpackDevServer(compiler, {
    contentBase: '/dist',
    hot: true,
    inline: true,
    setup: __SETUP__,
    port: __PORT__
})


server.listen(__PORT__, "localhost", function() {
    console.log('SERVER is run', 'http://localhost:' + __PORT__);
});
