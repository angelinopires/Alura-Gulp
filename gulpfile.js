const gulp = require('gulp'),
      imagemin = require('gulp-imagemin'),
      clean = require('gulp-clean'),
      concat = require('gulp-concat'),
      htmlReplace = require('gulp-html-replace'),
      usemin = require('gulp-usemin'),
      uglify = require('gulp-uglify'), 
      cssmin = require('gulp-cssmin'),
      browserSync = require('browser-sync');


gulp.task('default', ['copy'], () => {
    gulp.start('build-img', 'usemin');
});

gulp.task('clean', () => {

    return gulp.src('dist').pipe(clean()); 
});

gulp.task('copy', ['clean'], () => {

    return gulp.src('src/**/*').pipe(gulp.dest('dist'));
});

gulp.task('build-img', () => {

    gulp.src('dist/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
});

gulp.task('usemin', () => {

    gulp.src('dist/**/*.html')
        .pipe(usemin({
            'css': [cssmin],
            'js': [uglify]
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('server', () => {

    browserSync.init({
        server: {
            baseDir: 'src'
            // proxy: "localhost:3000"
            // if we want to use Browser Sync with in another server, we should use Proxy
        }
    });

    gulp.watch('src/**/*').on('change', browserSync.reload);
});