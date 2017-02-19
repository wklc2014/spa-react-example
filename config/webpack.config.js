'use strict';
var webpack = require('webpack');
var path = require('path');
var node_modules_dir = path.join('./', 'node_modules');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var __PLUGINS__ = require('./plugins.js');
var __VENDOR__ = require('./vendor.js');

var config = {
    entry: {
        vendor: __VENDOR__,
        index: [path.resolve('./', 'src/entry/index.js')]
    },
    output: {
        path: path.resolve('./', 'dist'),
        filename: '[name].[chunkHash:8].js',
        publicPath: '',
        chunkFilename: "[name].[chunkHash:8].js",
    },
    module: {
        loaders: [{
            test: /\.js|.jsx?$/,
            exclude: node_modules_dir,
            include: [
                path.resolve('./', 'src'),
            ],
            loader: 'babel-loader'
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader!css-loader')
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'postcss-loader', 'sass-loader']
            })
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url-loader?limit=25000'
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: __PLUGINS__
}

module.exports = config;
