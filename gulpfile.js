var gulp = require('gulp');
var sass = require('gulp-sass');

// Tasks
gulp.task('sass', function () {
    gulp.src('./styles/**/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest('./styles'));
});

// Watch tasks
gulp.task('watch', function () {
    gulp.watch('./styles/**/*.scss', ['sass']);
});

// Default task
gulp.task('default', ['sass', 'watch']);