var gulp = require('gulp');
var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify');
var minifycss = require('gulp-minify-css');

gulp.task('default', function(){
	gulp.src('./main.js')
        .pipe(browserify())
        .pipe(gulp.dest('./dist'))
});

gulp.task('minifyjs', function(){
	gulp.src('./dist/main.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/min'))
});

gulp.task('minifycss', function() {
  gulp.src('./main.css')
    .pipe(minifycss({keepBreaks:true}))
    .pipe(gulp.dest('./dist/min'))
});