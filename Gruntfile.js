module.exports = function(grunt) {
var connectSSI = require('connect-ssi');
grunt.initConfig({
 
    /* =============================================
    DEFINING PATHS AND FOLDERS AND META DATA
    ================================================ */
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
    '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
    '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
    '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
    ' Licensed <%= _.pluck(pkg.license, "type").join(", ") %> */\n',
    path_js_all: 'app/modules/global/**/*.js',
    path_js_dist_path: 'dist/assets/js',
    path_scss: 'app/assets/sass',
    path_css: 'app/assets/css',

 
    compass: {
        dist: {
            options: {
                sassDir: '<%= path_scss %>',
                cssDir: '<%= path_css %>',
                specify: 'app/assets/sass/style.scss',
                environment: 'development',
                outputStyle: 'compressed'
            }
        }
    },
 
    connect: {
        options: {
            directory:'app',
            middleware: function (connect, options, middlewares) {
 
                if (!Array.isArray(options.base)) {
                    options.base = [options.base];
                }
                var directory = options.directory || options.base[options.base.length - 1];
 
                middlewares.unshift(connectSSI({
                    baseDir: directory,
                    ext: '.html'
                }));
                return middlewares;
            }
        },
        development: {
            options: {
                port: 8000,
                hostname: '*',
                base: ['tests','bower_components','app'],
                livereload: true
            }
        },
        production: {
            options: {
                port: 80,
                hostname: 'hirebuddy.sapient.com',
                base: 'dist'
            }
        }
    },
 
 
    // Task configuration.
    concat: {
        options: {
            banner: '<%= banner %>',
            stripBanners: true
        },
        dist: {
            options: { stripBanners: false },
            src: ['<%= path_js_all %>'],
            dest: '<%= path_js_dist_path %>/<%= pkg.name %>.js'
        }
    },
    uglify: {
        options: {
            banner: '<%= banner %>'
        },
        dist: {
            src: '<%= concat.dist.dest %>',
            dest: 'dist/<%= pkg.name %>.min.js'
        }
    },
    watch: {
        options: {
            spawn: false,
            livereload: true
        },
        css: {
            files: '**/*.scss',
            tasks: ['compass']
        }
    }
});   // end of grunt.initConfig
 
// These plugins provide necessary tasks.
grunt.loadNpmTasks('grunt-contrib-connect');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-compass');
 
// Default task.
grunt.registerTask('build', ['jshint', 'compass', 'concat', 'uglify']);
 
grunt.registerTask('default', ['compass','connect:development', 'watch']);
 
};