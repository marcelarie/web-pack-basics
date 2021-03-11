const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

// import {path} from 'path';

module.exports = {
    entry: './source',
    mode: 'development',
    output: {
        publicPath: "/public/assets/",
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    },
                },
            },
            // {
            //     test: /\.(jpe?g|png|gif|svg)$/i,
            //     use: [
            //         {
            //             loader: 'file-loader', // Or `url-loader` or your other loader
            //         },
            //     ],
            // },
            {
                test: /\.svg/,
                type: 'asset/inline'
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: false,
                            name: 'images/[hash]-[name].[ext]'
                        },
                    },
                ],
            },
        ],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                template: './index.html',
            },
        ),
        new ImageMinimizerPlugin({
            minimizerOptions: {
                // Lossless optimization with custom option
                // Feel free to experiment with options for better result for you
                plugins: [
                    ['gifsicle', {interlaced: true}],
                    ['jpegtran', {progressive: true}],
                    ['optipng', {optimizationLevel: 5}],
                    [
                        'svgo',
                        {
                            plugins: [
                                {
                                    removeViewBox: false,
                                },
                            ],
                        },
                    ],
                ],
            },
        }),
    ],
};



