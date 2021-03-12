const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');


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
                //  .png less than 8KB into a Base64 URL and insert this URL into the Bundle. 
                test: /\.png/,
                type: 'asset/inline',
                parser: {
                    maxSize: 8 * 1024 // 8kb
                }
            },
            {
                //  .svg less than 12KB into a Base64 URL 
                test: /\.svg/,
                type: 'asset/inline',
                parser: {
                    maxSize: 12 * 1024 // 12kb
                }
            },
            // {
            //     //  rest of PNG, JPG, GIF and SVG images.
            //     test: /\.jpg/,
            //     type: 'asset/resource',
            //     generator: {
            //         filename: 'static/[hash][ext][query]'
            //     }
            // },
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
                    ['mozjpeg', {quality: 10}],
                    ['pngquant', {
                        quality: 1,
                        speed: 4
                    }],
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



