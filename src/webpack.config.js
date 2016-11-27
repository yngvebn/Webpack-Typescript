var webpack = require('webpack');
var path = require('path');
module.exports = {
    entry: {
        app: './app/app.ts',
        vendor: ['angular', 'angular-ui-router', 'reflect-metadata']
    },
    output: {
        filename: 'bundle.js',
        path: require('path').resolve('./js/')
    },
    // Turn on sourcemaps
    devtool: 'source-map',
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    }, // Add minification
    plugins: [
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")
    ],
    devServer: { inline: true },
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts-loader' },
            { test: /\.html$/, loader: "ngTemplate?relativeTo=" + __dirname + "!html" }
        ]
    }
}