/**
 * 启动开发环境服务器
 */
'use strict';
var WebpackDevServer = require("webpack-dev-server");
var webpack = require("webpack");
var webpackConfig = require('./webpack.config.js');
var __SETUP__ = require('./setup.js');

// modify some webpack config options
webpackConfig.entry.index.unshift(
    "webpack-dev-server/client?http://localhost:8080/",
    "webpack/hot/dev-server"
);
var myConfig = Object.create(webpackConfig);
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
    },
    historyApiFallback: true
})

server.listen(8080, "localhost", function() {
    console.log('SERVER is running at', 'http://localhost:8080');
});
