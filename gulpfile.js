var handlebars = require('gulp-handlebars');
var wrap require('gulp-wrap');
var declare = require('gulp-declare');
var concat = require('gulp-concat');

gulp.task('templates', function(){
  gulp.src('source/templates/*.hbs')
	.pipe(handlers())
	.pipe(wrap('Handlebar.template(<%= contents %>)'))
	.pipe(declare({
	  namespace: 'MyApp.templates',
	  noRedeclare: true,
	}))
	.pipe(concat('templates.js'))
	.pipe(gulp.dest('build/js/'));
});

