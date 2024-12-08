var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');

gulp.task('scripts', function () {
  return gulp.src('./src/js/*.js')
    .pipe(concat('index.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
});

gulp.task('styles', function() {
  return gulp.src('./src/css/*.css')
  .pipe(cleanCSS())
  .pipe(gulp.dest('dist/css'))
})

gulp.task('html', function() {
  return gulp.src('./src/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist/'));
});

gulp.task('build', gulp.series('scripts', 'styles', 'html'))