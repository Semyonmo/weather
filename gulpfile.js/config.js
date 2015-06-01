//            _   _   _                    __                          _
//   ___  ___| |_| |_(_)_ __   __ _ ___   / _| ___  _ __    __ _ _   _| |_ __
//  / __|/ _ \ __| __| | '_ \ / _` / __| | |_ / _ \| '__|  / _` | | | | | '_ \
//  \__ \  __/ |_| |_| | | | | (_| \__ \ |  _| (_) | |    | (_| | |_| | | |_) |
//  |___/\___|\__|\__|_|_| |_|\__, |___/ |_|  \___/|_|     \__, |\__,_|_| .__/
//                            |___/                        |___/        |_|
var dest = './app';
var src = './src';

var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

module.exports = {
    browserSync: {
        server: {
            baseDir: [dest, src]
        },
        files: [
            dest + "/**",
            "!" + dest + "/**.map"
        ]
    },
    backend: {
        src: src + '/assets/db.json',
        port: 4500
    },
    style: {
        src: {
            scss: src + "/**/*.scss",
            less: src + "/**/*.less"
        },
        dest: dest + "/style",
        settings: {
            scss : {
                includePaths: require('node-bourbon').includePaths
            },
            less: {

            }
        }
    },
    view: {
        src: src + "/view/*.jade",
        files: [src + "/view/**/*.jade", src + "/assets/data.json"],
        data: src + "/assets/data.json",
        dest: dest
    },
    angularTemplates: {
        src: src + '/app/**/*.jade',
        dest: src + '/app/templates'
    },
    angularComponentTemplates: {
        src: src + '/components/**/*.jade',
        dest: src + '/components/templates'
    },
    images: {
        src: src + "/assets/img/**",
        dest: dest + "/img"
    },
    sprites: {
        files: src + "/assets/icons/**/*.png",
        src: src + "/assets/icons/**/*.png",
        dest: {
            icons: dest + "/icons",
            src: src + "/assets/icons"
        },
        spritesmith: {
            imgName: "sprites.png",
            imgPath: "/icons/sprite.png",
            cssName: "sprites.css",
            cssFormat: "css"
        }
    },
    webpack: {
        name: 'browser',
        target: 'web',
        entry: src + "/app/app.js",
        output: {
            path: './app',
            filename: "/js/[name].js"
        },
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader?stage=0'
                }
            ]
        },
        plugins: [
            new ngAnnotatePlugin({
                add: true
                // other ng-annotate options here
            })
        ],
        resolve: {
            modulesDirectories: [
                'src',
                'src/components',
                'bower_components',
                'node_modules'
            ]
        }
    },
    assets: {
        src: src + '/assets/**',
        bundleConfigs: [
            {
                src: src + '/assets/fonts/**',
                dest: dest + '/fonts'
            },
            {
                src: './node_modules/font-awesome/fonts/**',
                dest: dest + '/fonts'
            }
        ]
    }
};