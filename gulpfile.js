var gulp = require('gulp');
var concat = require('gulp-concat');
var htmlreplace = require('gulp-html-replace');
var runSequence = require('run-sequence');

// todo: optimize css

gulp.task('copy-css', function() {
  return gulp.src(['./css/bootstrap.min.css', './css/style.css'])
    .pipe(gulp.dest('./dist/css'));
});

// todo: optimize images

gulp.task('copy-images', function() {
  return gulp.src(['./images/**/*.*'])
    .pipe(gulp.dest('./dist/images'));
});

gulp.task('copy-js-libs', function() {
    return gulp.src(['./js/libs/**/*.*'])
    .pipe(gulp.dest('./dist/js/libs'));
});

// todo: minify js, if we want to?

gulp.task('concat-js', function() {
    return gulp.src(['./js/data/*.js', './js/viewmodels/*.js','./js/*.js'])
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./dist/js/'));
});

gulp.task('replace-js', function() {
    return gulp.src('index.html')
        .pipe(htmlreplace({
            'js':'js/all.js'
        }))
        .pipe(gulp.dest('./dist/'));
});

// callback function/param is for async tasks
// need to study that later
gulp.task('build-site', function() {
    // actually all of these can be parallel
    // but for learning purposes i won't make them parallel
    runSequence(['copy-css', 'copy-images', 'copy-js-libs' ],
        ['concat-js', 'replace-js']);
});