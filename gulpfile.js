var gulp = require('gulp');
var mocha = require('gulp-mocha');
var gutil = require('gulp-util');

gulp.task('default', function() {
      gulp.watch(['actions/**', 'test/**'], ['mocha']);
});

gulp.task('mocha', function() {
    return gulp.src(['test/actions/*.js'], { read: false })
        .pipe(mocha({ reporter: 'list' }))
        .on('error', gutil.log);
});