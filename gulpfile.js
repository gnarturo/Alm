var gulp = require('gulp');
var serve = require('gulp-serve');
var ts = require('gulp-typescript');
var gulpWebpack = require('gulp-webpack');
var webpack = require('webpack');

gulp.task('js', function() {
    return gulp.src('./src/*.ts')
        .pipe(ts({
            noImplicitAny: false,
            module: 'amd'
        }))
        .pipe(gulp.dest('./dist'));
});

gulp.task('bundle', function() {
    return gulp.src('./dist/alm.js')
        .pipe(gulpWebpack({
            output: {
                filename: 'bundle.js',
                libraryTarget: 'var',
                library: 'alm'
            },
            plugins: [
                new webpack.optimize.UglifyJsPlugin()
            ]
        }))
        .pipe(gulp.dest('./dist'));
});

gulp.task('example', function() {
    return gulp.src('./example/src/main.js')
        .pipe(gulpWebpack({
            output: {
                filename: 'main.js'
            }
        }))
        .pipe(gulp.dest('./example/dist/'));
});

gulp.task('serve', serve('./example/'));
