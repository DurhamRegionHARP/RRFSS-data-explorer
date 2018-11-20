var gulp = require("gulp");
var concat = require("gulp-concat");
var uglifycss = require("gulp-uglifycss");

gulp.task('join', function() {
  return gulp.src(['./css/theme.css', './css/logos.css', './css/cards.css'])
              .pipe(concat('styles.css'))
              .pipe(gulp.dest('./css/'));
});
gulp.task('css', function () {
  return gulp.src('./css/styles.css')
              .pipe(uglifycss({
                "uglyComments": false
              }))
              .pipe(gulp.dest('./css/dist/'));
});
gulp.task('default', ['join', 'css']);