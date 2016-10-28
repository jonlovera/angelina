/**
 * Compress CSS files.
 *
 * ---------------------------------------------------------------
 *
 * Minifies css files and places them into .tmp/public/min directory.
 *
 * For usage docs see:
 *      https://github.com/gruntjs/grunt-contrib-cssmin
 */
var pipeline = require('../pipeline');
module.exports = function(grunt) {
    grunt.config.set('uncss', {
        dist: {
            // options: {
            //     csspath: '../' + pipeline.temporalFolder,
            //     stylesheets: ['../' + pipeline.temporalFolder + '/**/*.css'],
            //     htmlroot: '../' + pipeline.temporalFolder
            // },
            options: {
            //     compress: true,
                csspath: '../public',
                stylesheets: '../public/css/production.js',
                htmlroot: '../public'
            },
            files: [{
                    nonull: true,
                    src: './public',
                    // src: 'public/*.html',
                    dest: 'public/css/compiled.min.css'
                }]
                //     'public/css/**/*.css': ['public/**/*.html']
                // }
                // options: {
                // files: [{
                //     nonull: true,
                //     src: '**/*.css',
                //     cwd: pipeline.temporalFolder,
                //     dest: pipeline.temporalFolder + "/css/production.css"
                // }]
                // options: {
                //     ignore: ['#added_at_runtime', '.created_by_jQuery']
                // },
                // files: [{
                //   nonull: true,
                //   src: ['http://localhost:8080/path1', 'http://localhost:8080/path2'],
                //   dest: 'dist/css/tidy.css'
                // }]
                // files: [{
                //     nonull: true,
                //     src: ['**/*.css'],
                //     cwd: pipeline.temporalFolder
                // }]
        }
    });

    grunt.loadNpmTasks('grunt-uncss');
};