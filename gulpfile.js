var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();

// Tasks
gulp.task('sass', function () {
    gulp.src('./styles/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./styles'))
        .pipe(browserSync.stream());
});

gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: "./"
        },
        open: false,
    });
});

// Watch tasks
gulp.task('watch', function () {
    gulp.watch('./styles/**/*.scss', ['sass']);
    gulp.watch('./**/*.html').on('change', browserSync.reload);
});

// Default task
gulp.task('default', ['sass', 'browser-sync', 'watch']);