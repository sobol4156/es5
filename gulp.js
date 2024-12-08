var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cssmin = require('gulp-cssmin');
var htmlmin = require('gulp-htmlmin');

gulp.task('scripts', function () {
  return gulp.src('./*.js')
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist'))
});

gulp.task('styles', function() {
  return gulp.src('./*.css')
  .pipe(cssmin())
  .pipe(gulp.dest('dist'))
})

gulp.task('html', function() {
  return gulp.src('./*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'));
});

gulp.task('build', gulp.series('scripts', 'styles', 'html'))

gulp.task('deploy', function() {
  gulp.src('dist/**/*')
  .pipe(gulp.dest('/deploy/**/*'))
})