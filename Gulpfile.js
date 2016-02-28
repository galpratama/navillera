/* Include all the things we need */
var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var cleanCSS = require('gulp-clean-css');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var notify = require("gulp-notify");
var autoprefixer = require('gulp-autoprefixer');
var connect = require('gulp-connect-php');

gulp.task('sass', function() {
    gulp.src('styles/**/*.scss')        
        /* Prevent pipe breaking caused by errors from gulp plugins */
        .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))

        /* Source map init */
        .pipe(sourcemaps.init())

        /* Compile sass, and output error to notif */
        .pipe(sass({}).on('error', function(err) {
            return notify().write(err);
        }))
        
        /* autoprefixr choo choo */
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))

        /* Write source maps */
        .pipe(sourcemaps.write('./'))

        /* Write css */
        .pipe(gulp.dest('./css/'))

        .pipe(notify({ message: 'Styles task complete' }))
        
        /* Reload the browser CSS after every change */
        .pipe(reload({stream:true}));
});

gulp.task('minify-css', function() {
  gulp.src('css/main.css')
      /* Source map init */
      .pipe(sourcemaps.init())

      /* Do the magic */
      .pipe(cleanCSS())

      /* Write source maps */
      .pipe(sourcemaps.write('./'))

      /* Write minify */
      .pipe(gulp.dest('css/min'))

      /* Reload the browser CSS after every change */
      .pipe(reload({stream:true}));
    });

gulp.task('php', function() {
    connect.server({ base: 'build', port: 80, keepalive: true});
});

gulp.task('browsersync-php', function () {
    browserSync({
        // Change your server port math to your server, usually its 80
        proxy: '127.0.0.1:80',
        port: 8080,
        open: true,
        notify: true,
        // Change your path to your desired folder at htdocs/www (if you use xampp or ampps)
        startPath: "/single-project/frontend-boilerplate/"
    });
});

gulp.task('browsersync-html', function () {
    browserSync({
            server: {
            baseDir: './'
        },
        port: 8081,
        open: false,
        notify: true
    });
});

gulp.task('default', ['sass','browsersync-php','minify-css'], function() {
    gulp.watch('styles/**/*.scss', ['sass']);
    gulp.watch('css/main.css', ['minify-css']);
    gulp.watch("**/*.html").on('change', browserSync.reload);
    gulp.watch('**/*.php').on('change', browserSync.reload);
});
