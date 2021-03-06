'use strict';

const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry : [
        'babel-polyfill',
        './src/index'
    ],
    output : {
        path : path.resolve(__dirname, 'public'),
        filename : 'bundle.js',
        library : "[name]"
    },
    devtool : 'inline-source-map',
    module : {
        rules : [
            {
                test : /\.js$/,
                exclude : /(node_modules)/,
                include : [
                    path.resolve(__dirname, 'src')
                ],
                use : {
                    loader : 'babel-loader',
                    options : {
                        presets : ['@babel/preset-react'],
                        plugins : ['@babel/plugin-transform-runtime']
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },
    devServer : {
        contentBase : path.resolve(__dirname, 'public'),
        host : 'localhost',
        port : 3000
    },
    plugins : [
        new webpack.NoEmitOnErrorsPlugin()
    ]
};