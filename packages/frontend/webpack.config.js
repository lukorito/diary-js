const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, "dist/"),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module : {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader',
            },
            {
                test: /\.(bmp|gif|png|jpg|jpeg)?$/,
                loader: ['url-loader?limit=1024'],
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader',
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'public/index.html'
        }),
      new Dotenv({
          path: './../../.env'
      })
    ],
    devServer: {
        port: 3000,
        historyApiFallback: true,
    },
    node: { fs: 'empty' },
};
