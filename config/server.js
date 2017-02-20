/**
 * 启动开发环境服务器
 */
'use strict';
var WebpackDevServer = require("webpack-dev-server");
var webpack = require("webpack");
var webpackConfig = require('./webpack.config.js');
var __SETUP__ = require('./setup.js');

var server = new WebpackDevServer(webpack(webpackConfig), {
    contentBase: 'dist/',
    hot: true,
    inline: true,
    setup: __SETUP__,
    port: 8080,
    stats: {
        chunks: false,
        children: false,
        colors: true
    }
})

server.listen(8080, "localhost", function() {
    console.log('SERVER is running at', 'http://localhost:8080');
});
