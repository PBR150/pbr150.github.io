var gulp = require ('gulp');
var gutil = require('gulp-util');
var fs = require('fs');
var cssmin = require('gulp-cssmin');
var watch = require('gulp-watch');
var concat = require('gulp-concat');

gulp.task('NameOne',function(){
	console.log('Hello');
});



gulp.task('release', function(){
	var number = gutil.env.number;
	console.log('Number', number);
	if(fs.existsSync('./releases/'+ number)){
		return console.error('Number ' + number + ' already exists');
	}
	console.log('Making release ' + number + '');
	gulp.src('.dist/**/*.*')
	.pipe(gulp.dest('./releases/' + number + '/'));
});

gulp.task('cssmin', function(){
	gulp.src("./css/*.css")
	.pipe(concat("min_main.css"))
	.pipe(cssmin())
	.pipe(gulp.dest(".dist/css"));
})