var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create(),
    del = require('del');
const zip = require('gulp-zip');

// Tasks
gulp.task('sass', function() {
    return gulp.src('build/styles/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('build/styles'))
        .pipe(browserSync.stream());
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "build/"
        },
        open: false,
    });
});

// Watch tasks
gulp.task('watch', function() {
    // TODO: Add task to copy file to build when it changes.
    gulp.watch('build/scripts/*.js').on('change', gulp.series(browserSync.reload));
    gulp.watch('build/**/*.html').on('change', gulp.series(browserSync.reload));
    gulp.watch('build/styles/**/*.scss', gulp.series('sass'));
});

// BUILD
gulp.task('build:clean', function() {
    return del([
        'build/**'
    ])
});
gulp.task('build:copy', function() {
    gulp.src('./bower_components/**')
        .pipe(gulp.dest('build/bower_components/'));
    return gulp.src('src/**')
        .pipe(gulp.dest('build/'));
});
gulp.task('build', gulp.series(
    'build:clean',
    'build:copy'
));

// EXPORT
gulp.task('export', gulp.series('build',
    () => {
        return gulp.src('build/*')
            .pipe(zip('website.zip'))
            .pipe(gulp.dest('./'));
    }
));

// Default task
gulp.task('default', gulp.series('build', gulp.parallel('sass', 'browser-sync', 'watch')));