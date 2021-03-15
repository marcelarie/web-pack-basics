
<p align="center">
<img src="https://webpack.js.org/icon-square-small-slack.9281492bb267314634b4.png" />
</p>

<h1 align="center">Basics</h1>

## Roadmap

### Local Installation

```bash
npm install --save-dev webpack
```

Installing locally is what we recommend for most projects. This makes it easier 
to upgrade projects individually when breaking changes are introduced. Typically
webpack is run via one or more npm scripts which will look for a webpack 
installation in your local node_modules directory:Installing locally is what we 
recommend for most projects. 

This makes it easier to upgrade projects individually when breaking changes are 
introduced. Typically webpack is run via one or more npm scripts which will look 
for a webpack installation in your local node_modules directory:

### NPM Scripts

```json
{
    "name": "web-pack-basics",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
        "dev": "webpack --mode development",
        "start": "webpack serve --host 127.0.0.1 --port 8080",
        "build": "webpack --mode production"
    }
}
```
#### Development mode
Compiles the code quicker and allows the development methods.
#### Production mode
Optimizes the code for production and allow the production methods.
#### webpack-dev-server
Lunches the webpack bundle to a specific host/port.


### HTML
```bash
npm install --save-dev html-webpack-plugin html-loader
```

Webpack dependency used to compile HTML using the given location on the config.

```js
plugins: [
    new HtmlWebpackPlugin(
        {
            template: './index.html',
        },
    ),
```

### Styles

```js
rules: [
    {
        test: /\.s[ac]ss$/i,
        use: [
            "style-loader",
            "css-loader",
            "sass-loader",
        ],
    },
```
#### style-loader
Creates `style` nodes from JS strings
#### css-loader
Translates CSS into CommonJS
#### sass-loader
Compiles Sass to CSS

### Javascript
```bash
npm install --save-dev @babel/core @babel/cli @babel/preset-env
```
Used on module bundles to compile JavaScript files.

### Assets
```bash
npm install image-minimizer-webpack-plugin --save-dev
```
This plugin uses imagemin to optimize your images.

#### ImageMinimizerPlugin config
```js
new ImageMinimizerPlugin({
    minimizerOptions: {
        plugins: [
            ['gifsicle', {interlaced: true}],
            ['jpegtran', {progressive: true}],
            ['mozjpeg', {quality: 1}],
            ['pngquant', {
                quality: [0.7, 0.9],
                speed: 4
            }],
            [
                'svgo',
                {
                    plugins: [
                        {
                            name: 'removeViewBox',
                            active: false,
                        },
                    ],
                },
            ],
        ],
    },
}),
```
#### Rules for diferent image file types 

```js
{
    //  .png less than 8KB into a Base64 URL and 
    // insert this URL into the Bundle. 
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
```

                        (                      )  
                      (  (          (  )\ )   (       (    ( /(  
                      )\))(   '(  ( )\(()/(   )\      )\   )\()) 
                     ((_)()\ ) )\ )((_)/(_)|(((_)(  (((_)|((_)\  
                     _(())\_)(|(_|(_)_(_))  )\ _ )\ )\___|_ ((_) 
                     \ \((_)/ / __| _ ) _ \ (_)_\(_|(/ __| |/ /  
                      \ \/\/ /| _|| _ \  _/  / _ \  | (__  ' <   
                       \_/\_/ |___|___/_|   /_/ \_\  \___|_|\_\  
                                                      





