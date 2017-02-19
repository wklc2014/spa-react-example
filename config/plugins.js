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
    new ExtractTextPlugin('[name].css'),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.LoaderOptionsPlugin({
        options: {
            postcss: [
                autoprefixer({
                    browsers: ['> 0.01%']
                })
            ]
        }
    }),
    new webpack.optimize.CommonsChunkPlugin({
        names: ['vendor', 'manifest'],
    })
];

module.exports = plugins;
