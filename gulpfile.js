var gulp = require('gulp');
var concat = require('gulp-concat');


// first let's just get concat working
// since that seems to be the biggest thing

// first just get the files combined
gulp.task('concat-js', function() {
    return gulp.src(['./js/data/*.js', './js/viewmodels/*.js','./js/*.js'])
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./dist/js/'));
});

// next modify html to read release version