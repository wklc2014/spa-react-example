'use strict';
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var node_modules_dir = path.join('./', 'node_modules');

var {NODE_ENV} = process.env;

var config = {
    entry: {
        index: path.resolve('./', 'src/entry/index.js')
    },
    output: {
        path: path.resolve('./', 'dist'),
        filename: '[name].js',
    },
    module: {
        loaders: [{
            test: /\.js|.jsx?$/,
            exclude: node_modules_dir,
            loader: 'babel-loader'
        }, {
            test: /\.css$/,
            loader: "style-loader!css-loader"
        }, {
            test: /\.scss$/,
            loader: 'style-loader!css-loader!sass-loader'
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url-loader?limit=25000'
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'spa-react',
            template: path.resolve('./', 'src/entry/index.html'),
            inject: false
        })
    ]
}

if (NODE_ENV === 'production') {

} else {
    // config['devtool'] = 'eval-sourcemap';
}

module.exports = config;