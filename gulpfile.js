var gulp = require('gulp'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync'),
	concat = require('gulp-concat'),
	autoprefixer = require('gulp-autoprefixer'),
	uglify = require('gulp-uglifyjs');

// gulp.task('concatCss', ['sass'], function(){
// 	return gulp.src('src/sass/**/styles.css')
// 	.pipe(concat('styles.css'))
// 	.pipe(gulp.dest('src/css'))
	
// });

// gulp.task('concatJs', function(){
// 	return gulp.src('src/blocks/**/*.js')
// 	.pipe(concat('main.js'))
// 	.pipe(gulp.dest('src/common/js'))
// 	.pipe(browserSync.reload({stream: true}))
// });

gulp.task('sass', function() {
	return gulp.src('src/sass/styles.scss')
  	.pipe(sass())
  	.pipe(autoprefixer({
  		browsers: ['last 15 versions'],
  		cascade: true
  	}))
 	.pipe(gulp.dest('src/css'))
 	.pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function(){
	browserSync({
		server: {
			baseDir: 'src'
		},
		notify: false
	});
});

// gulp.task('js-libs', function(){
// 	return gulp.src('src/libs/jquery/dist/jquery.min.js')
// 	.pipe(concat('libs.min.js'))
// 	.pipe(uglify())
// 	.pipe(gulp.dest('src/common/js'))
// });

gulp.task('watch', ['browser-sync','sass'], function(){
	gulp.watch('src/sass/**/*.scss', ['sass']);
	gulp.watch('src/**/*.html', browserSync.reload);
	gulp.watch('src/js/**/*.js', browserSync.reload);
});

gulp.task('default', ['watch']);