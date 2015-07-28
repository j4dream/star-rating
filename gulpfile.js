var gulp = require('gulp');
var jsmin = require('gulp-jsmin');
var cssmin = require('gulp-minify-css');
var inlinecss = require('gulp-inlinecss');

gulp.task('default', function() {
	gulp.src('src/*.js')
		.pipe(jsmin())
		.pipe(inlinecss())
		.pipe(gulp.dest('build'));

});