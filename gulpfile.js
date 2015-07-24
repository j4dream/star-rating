var gulp = require('gulp');
var jsmin = require('gulp-jsmin');
var cssmin = require('gulp-minify-css');

gulp.task('default', function() {
	gulp.src('src/*.js')
		.pipe(jsmin())
		.pipe(gulp.dest('build'));

	gulp.src('src/*.css')
		.pipe(cssmin())
		.pipe(gulp.dest('build'));
});