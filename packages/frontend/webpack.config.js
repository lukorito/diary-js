const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
        })
    ],
    devServer: {
        port: 3000,
        historyApiFallback: true,
    }
}