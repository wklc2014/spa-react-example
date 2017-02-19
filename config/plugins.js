'use strict';
var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');
var __ENV__ = require('./env.js');

var plugins = [
    new HtmlWebpackPlugin({
        title: 'spa-react',
        template: path.resolve('./', 'src/entry/index.html'),
        favicon: path.resolve('./', 'src/img/favicon.ico')
    }),
    new webpack.DefinePlugin(__ENV__),
    new ExtractTextPlugin('[name].[chunkHash].css'),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.LoaderOptionsPlugin({
        options: {
            postcss: [
                autoprefixer({
                    browsers: ['> 0.01%']
                })
            ]
        }
    })
];

if (__ENV__.__DEV__) {
    plugins.push(
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest'],
        })
    )
} else if (__ENV__.__PROD__) {
    plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false, // remove all comments
            },
            compress: {
                warnings: false
            }
        })
    )
}

module.exports = plugins;
