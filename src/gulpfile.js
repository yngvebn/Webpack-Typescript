var gulp = require('gulp');
var webpack = require('webpack-stream');
var wp = require('webpack');
var argv = require('yargs').argv;


gulp.task('watch', function () {
    let config = require('./webpack.config.js');
    config.watch = true;
    return gulp.src('app/app.ts')
        .pipe(webpack(config))
        .pipe(gulp.dest('js/'));
});

gulp.task('default', function () {
    let config = require('./webpack.config.js');

    if (argv.production) {
        config.plugins.push(new wp.optimize.UglifyJsPlugin({ mangle: false }));
    }

    return gulp.src('app/app.ts')
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest('js/'));
});