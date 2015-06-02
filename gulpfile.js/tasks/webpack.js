var gulp = require('gulp');
var config = require('../config').webpack;
var webpack = require('webpack');
var logger = require('../util/compileLogger');
var browserSync = require('browser-sync');

gulp.task("webpack", ['angular-templates', 'angular-components-templates'], function (callback) {
    var built = false;

    webpack(config).watch(400, function (err, stats) {
        logger(err, stats);
        browserSync.reload();

        // On the initial compile, let gulp know the task is done
        if (!built) {
            built = true;
            callback();
        }
    });
});