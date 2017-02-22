/**
 * 启动开发环境服务器
 */
'use strict';
var WebpackDevServer = require("webpack-dev-server");
var webpack = require("webpack");
var webpackConfig = require('./webpack.config.js');

// modify some webpack config options
// webpackConfig.entry.index.unshift(
//     "webpack-dev-server/client?http://localhost:8080/",
//     "webpack/hot/dev-server"
// );
var myConfig = Object.create(webpackConfig);
var server = new WebpackDevServer(webpack(webpackConfig), {
    contentBase: 'dist/',
    hot: true,
    port: 8080,
    stats: {
        chunks: false,
        children: false,
        colors: true
    },
    historyApiFallback: true,
    proxy: {
        '/api/*': {
            target: 'http://localhost:8081',
            secure: false,
        }
    }
})

server.listen(8080, "localhost", function() {
    console.log('SERVER is running at', 'http://localhost:8080');
});
