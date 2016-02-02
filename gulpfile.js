var gulp = require('gulp');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var minifyHTML = require('gulp-minify-html');
var minifycss = require('gulp-minify-css');
var concat = require('gulp-concat');
var del = require('del');

var hintTask = function () {
  gulp.src(['*.js', './src/js/**/*.js'])
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'));
  console.log('HINT: Hint Complete');
};

gulp.task('hint', function() {
  hintTask();
});

var buildTask = function() {
  gulp.src('./src/index.html')
    .pipe(minifyHTML())
    .pipe(gulp.dest('./'));
  gulp.src('./src/img/*')
    .pipe(gulp.dest('./img'));
  gulp.src('./src/fonts/*')
    .pipe(gulp.dest('./fonts'));
  gulp.src(['./src/css/bootstrap-v3.3.6.css', './src/css/style.css'])
    .pipe(concat('style.min.css'))
    .pipe(minifycss())
    .pipe(gulp.dest('./css'));
  gulp.src(['./src/js/jquery-v2.1.4.js', './src/js/bootstrap-v3.3.6.js', './src/js/amplitude-v2.2.0.js',])
    .pipe(concat('vendor.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./js'));
  gulp.src([ './src/js/radio.js'])
    .pipe(concat('radio.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./js'));
  console.log('BUILD: Build Complete');
};

gulp.task('build', function() {
  buildTask();
});