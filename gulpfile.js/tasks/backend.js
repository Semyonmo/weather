var gulp = require('gulp');
var jsonServer = require('json-server');
var server = jsonServer.create(); // Returns an Express server
var config = require('../config').backend;


gulp.task('backend', function () {
    var router = jsonServer.router(config.src); // Returns an Express router
    server.use(jsonServer.defaults); // logger, static and cors middlewares
    server.use(router); // Mount router on '/'

    server.listen(config.port);
});

