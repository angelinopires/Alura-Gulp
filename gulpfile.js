const gulp = require('gulp'),
      imagemin = require('gulp-imagemin'),
      clean = require('gulp-clean'),
      concat = require('gulp-concat'),
      htmlReplace = require('gulp-html-replace'),
      usemin = require('gulp-usemin'), // Used to concat all files into only 1
      uglify = require('gulp-uglify'), // remove spaces and renames variables to get more efficient
      cssmin = require('gulp-cssmin'); // Idem


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