var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

// Tasks
gulp.task('sass', function () {
    gulp.src('./styles/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./styles'));
});

// Watch tasks
gulp.task('watch', function () {
    gulp.watch('./styles/**/*.scss', ['sass']);
});

// Default task
gulp.task('default', ['sass', 'watch']);