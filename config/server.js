/**
 * 启动开发环境服务器
 */
'use strict';
var WebpackDevServer = require("webpack-dev-server");
var webpack = require("webpack");
var webpackConfig = require('./webpack.config.js');
var __SETUP__ = require('./setup.js');

var __PORT__ = 8080;

var server = new WebpackDevServer(webpack(webpackConfig), {
    contentBase: 'dist',
    hot: true,
    inline: true,
    setup: __SETUP__,
    port: __PORT__,
    open: true
})

server.listen(__PORT__, "localhost", function() {
    console.log('SERVER is running at', 'http://localhost:' + __PORT__);
});
