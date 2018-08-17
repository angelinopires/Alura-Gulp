const gulp = require('gulp'),
      imagemin = require('gulp-imagemin'),
      clean = require('gulp-clean'),
      concat = require('gulp-concat'),
      htmlReplace = require('gulp-html-replace'),
      usemin = require('gulp-usemin'),
      uglify = require('gulp-uglify'), 
      cssmin = require('gulp-cssmin'),
      browserSync = require('browser-sync'),
      jshint = require('gulp-jshint'),
      jshintStylish = require('jshint-stylish'),
      csslint = require('gulp-csslint'),
      autoprefixer = require('gulp-autoprefixer'),
      less = require('gulp-less');


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

    return gulp.src('src/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
});

gulp.task('usemin', () => {

    return gulp.src('dist/**/*.html')
        .pipe(usemin({
            'css': [autoprefixer, cssmin],
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

    gulp.watch('src/css/*.css').on('change', event => {
        gulp.src(event.path)
            .pipe(csslint())
            .pipe(csslint.reporter());
    });

    gulp.watch('src/js/*.js').on('change', event => {
        gulp.src(event.path)
            .pipe(jshint())
            .pipe(jshint.reporter(jshintStylish));
    });

    gulp.watch('src/less/**/*.less').on('change', event => {
        gulp.src(event.path)
            .pipe(less().on('error', erro => {
                console.log('LESS, erro compilação: ' + erro.filename);
                console.log(erro.message);
            }))
            .pipe(gulp.dest('src/css'));
     });
});