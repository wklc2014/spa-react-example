'use strict';
var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
        vendor: [
            'react',
            'react-dom',
            'react-redux',
            'redux',
            'redux-thunk',
            'react-router',
            'react-router-redux',
            'classnames',
            'qwest'
        ],
    },
    output: {
        path: path.resolve('./', 'dist'),
        filename: '[name].dll.js',
        library: '[name]',
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.resolve('./dist/', 'vendor.manifest.json'),
            name: '[name]',
            context: __dirname,
        })
    ],
};