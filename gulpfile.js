var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');
var cssnano = cssnano = require('gulp-cssnano');
var minifycss = require('gulp-minify-css');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var notify = require('gulp-notify');
var cache = require('gulp-cache');
var livereload = require('gulp-livereload');
var runSequence = require('run-sequence');
var del = require('del');
var util = require('gulp-util');
var shell = require('gulp-shell');

// Declaration of variables
var SITE_FOLDER = 'site';
var DIST_FOLDER = 'dist';

gulp.task('default', function(callback) {
    runSequence(
    //'install-dependencies',
    'process-site-index',
    'process-site-pages',
    'process-directive-pages',
    'process-site-styles',
    'process-site-scripts',
    'process-resources-scripts',
    'process-vendor-styles',
    'process-images',
    'process-videos',
    'process-fonts',
    'watch-site-index',
    'watch-site-pages',
    'watch-directive-pages',
    'watch-site-styles',
    'watch-site-scripts',
    'watch-vendor-styles',
    'watch-resources-scripts',
    'watch-images',
    'watch-videos',
    function (error) {
        if (error) {
            util.log(error.message);
        } else {
            util.log('FRUTERIA SANTA MARIA -> Gulp tasks were executed succesfully!.');
        }
        callback(error);
    });
});

gulp.task('install-dependencies', shell.task([
	'npm install'
]));

gulp.task('process-site-index', function() {
    util.log('FRUTERIA SANTA MARIA -> Running process-site-index task...');
    return gulp.src([
            SITE_FOLDER + '/index.html'
        ])
        .pipe(gulp.dest(DIST_FOLDER))
        .pipe(notify({ message: 'FRUTERIA SANTA MARIA -> process-site-index task complete' }));
});

gulp.task('process-site-pages', function() {
    util.log('FRUTERIA SANTA MARIA -> Running process-site-pages task...');
    return gulp.src([
            SITE_FOLDER + '/pages/**/*.html'
        ])
        .pipe(gulp.dest(DIST_FOLDER + '/pages'))
        .pipe(notify({ message: 'FRUTERIA SANTA MARIA -> process-site-pages task complete' }));
});

gulp.task('process-directive-pages', function() {
    util.log('FRUTERIA SANTA MARIA -> Running process-directive-pages task...');
    return gulp.src([
            SITE_FOLDER + '/etc/directives/**/*.html'
        ])
        .pipe(gulp.dest(DIST_FOLDER + '/etc/directives'))
        .pipe(notify({ message: 'FRUTERIA SANTA MARIA -> process-directive-pages task complete' }));
});

gulp.task('process-site-styles', function() {
    util.log('FRUTERIA SANTA MARIA -> Running process-site-styles task...');
    return sass(SITE_FOLDER + '/resources/css/app/sass/**/*.scss')
        .on('error', sass.logError)
        .pipe(autoprefixer('last 2 version'))
        .pipe(gulp.dest(DIST_FOLDER + '/resources/css'))
        .pipe(rename({suffix: '.min'} ))
        .pipe(cssnano())
        .pipe(gulp.dest(DIST_FOLDER + '/resources/css'))
        .pipe(notify({ message: 'FRUTERIA SANTA MARIA -> process-site-styles task completed.' }));
});

gulp.task('process-site-scripts', function() {
    util.log('FRUTERIA SANTA MARIA -> Running process-site-scripts task...');
    return gulp.src([
            SITE_FOLDER + '/etc/**/*.js',
            SITE_FOLDER + '/pages/**/*.js',
            SITE_FOLDER + '/pages/index.js',
            SITE_FOLDER + '/pages/config.js',
        ])
        .pipe(concat('app.js'))
        .pipe(gulp.dest(DIST_FOLDER + '/resources/js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify({
            mangle: false
        }))
        .pipe(gulp.dest(DIST_FOLDER + '/resources/js'))
        .pipe(notify({ message: 'FRUTERIA SANTA MARIA -> process-site-scripts task complete' }));
});

gulp.task('process-resources-scripts', function() {
    util.log('FRUTERIA SANTA MARIA -> Running process-resources-scripts task...');
    return gulp.src([
            SITE_FOLDER + '/resources/js/jquery/*.js',
            SITE_FOLDER + '/resources/js/underscore/*.js',
            SITE_FOLDER + '/resources/js/lodash/*.js',
            SITE_FOLDER + '/resources/js/angular/*.js',
            SITE_FOLDER + '/resources/js/ngStorage/*.js',
            SITE_FOLDER + '/resources/js/angular-messages/*.js',
            SITE_FOLDER + '/resources/js/angular-route/*.js',
            SITE_FOLDER + '/resources/js/angular-simple-logger/*.js',
            SITE_FOLDER + '/resources/js/angular-google-maps/*.js',
            SITE_FOLDER + '/resources/js/angular-resource/*.js',
            SITE_FOLDER + '/resources/js/bootstrap/*.js',
            SITE_FOLDER + '/resources/js/moment/*.js',
            SITE_FOLDER + '/resources/js/bootstrap-datetimepicker/*.js',
            SITE_FOLDER + '/resources/js/fullcalendar/fullcalendar.min.js',
            SITE_FOLDER + '/resources/js/fullcalendar/gcal.js',
            SITE_FOLDER + '/resources/js/fullcalendar/lang-all.js'
        ])
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest(DIST_FOLDER + '/resources/js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(DIST_FOLDER + '/resources/js'))
        .pipe(notify({ message: 'FRUTERIA SANTA MARIA -> process-resources-scripts task complete' }));
});

gulp.task('process-vendor-styles', function() {
    util.log('FRUTERIA SANTA MARIA -> Running process-vendor-styles task...');
    return gulp.src(SITE_FOLDER + '/resources/css/vendor/**/*.css')
        .pipe(autoprefixer('last 2 version'))
        .pipe(concat('vendor.css'))
        .pipe(gulp.dest(DIST_FOLDER + '/resources/css'))
        .pipe(rename({suffix: '.min'} ))
        .pipe(cssnano())
        .pipe(gulp.dest(DIST_FOLDER + '/resources/css'))
        .pipe(notify({ message: 'FRUTERIA SANTA MARIA -> process-vendor-styles task completed.' }));
});

gulp.task('process-images', function() {
    util.log('FRUTERIA SANTA MARIA -> Running process-images task...');
    return gulp.src([
            SITE_FOLDER + '/resources/images/**/*.{gif,jpg,png,svg,ico}'
        ])
        .pipe(gulp.dest(DIST_FOLDER + '/resources/images'))
        .pipe(notify({ message: 'FRUTERIA SANTA MARIA -> process-images task completed.' }));
});

gulp.task('process-videos', function() {
    util.log('FRUTERIA SANTA MARIA -> Running process-videos task...');
    return gulp.src([
            SITE_FOLDER + '/resources/videos/*'
        ])
        .pipe(gulp.dest(DIST_FOLDER + '/resources/videos'))
        .pipe(notify({ message: 'FRUTERIA SANTA MARIA -> process-videos task complete' }));
});

gulp.task('process-fonts', function() {
    util.log('FRUTERIA SANTA MARIA -> Running process-fonts task...');
    return gulp.src([
            SITE_FOLDER + '/resources/fonts/**/*'
        ])
        .pipe(gulp.dest(DIST_FOLDER + '/resources/fonts'))
        .pipe(notify({ message: 'FRUTERIA SANTA MARIA -> process-fonts task complete' }));
});

gulp.task('watch-site-index', function() {
    gulp.watch(SITE_FOLDER + '/*', ['process-site-index'])
});

gulp.task('watch-site-pages', function() {
    gulp.watch(SITE_FOLDER + '/pages/**/*.html', ['process-site-pages'])
});

gulp.task('watch-directive-pages', function() {
    gulp.watch(SITE_FOLDER + '/etc/directives/**/*.html', ['process-directive-pages'])
});

gulp.task('watch-site-styles', function() {
    gulp.watch(SITE_FOLDER + '/resources/css/app/sass/*.scss', ['process-site-styles'])
});

gulp.task('watch-site-scripts', function() {
    gulp.watch(SITE_FOLDER + '/**/*.js', ['process-site-scripts'])
});

gulp.task('watch-vendor-styles', function() {
    gulp.watch(SITE_FOLDER + '/resources/css/vendor/**/*.css', ['process-vendor-styles'])
});

gulp.task('watch-resources-scripts', function() {
    gulp.watch(SITE_FOLDER + '/resources/js/**/*.js', ['process-resources-scripts'])
});

gulp.task('watch-images', function() {
    gulp.watch(SITE_FOLDER + '/resources/images/**/*.{gif,jpg,png,svg}', ['process-images'])
});

gulp.task('watch-videos', function() {
    gulp.watch(SITE_FOLDER + '/resources/videos/*', ['process-videos'])
});