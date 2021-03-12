const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const imageminPngquant = require('imagemin-pngquant');



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
            {
                // rest of PNG, JPG, GIF and SVG images.
                test: /\.png/,
                type: 'asset/resource',
            },
            {
                //  .png less than 8KB into a Base64 URL and insert this URL into the Bundle. 
                test: /\.png/,
                type: 'asset',
            },
            {
                //  .svg less than 12KB into a Base64 URL 
                test: /\.svg/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 12 * 1024 // 12kb
                    },
                },
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
                    ['mozjpeg', {quality: 1}],
                    ['pngquant', {quality: 0.1, speed: 4}],
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



