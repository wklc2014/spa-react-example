'use strict';
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');
var path = require('path');
var node_modules_dir = path.join('./', 'node_modules');

var __ENV__ = require('./env.js');

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
    plugins: [
        new HtmlWebpackPlugin({
            title: 'spa-react',
            template: path.resolve('./', 'src/entry/index.html'),
        }),
        new webpack.DefinePlugin(__ENV__),
        new ExtractTextPlugin('[name].css'),
        new webpack.NoErrorsPlugin(),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [
                    autoprefixer({
                        browsers: ['> 0.01%']
                    })
                ]
            }
        })
    ]
}

if (__ENV__.__DEV__) {
    config.devtool = 'eval-sourcemap';
}

module.exports = config;
