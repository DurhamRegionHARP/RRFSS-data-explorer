const { src, dest, series } = require('gulp');
const concat = require('gulp-concat');
const uglifycss = require('gulp-uglifycss');
const uglifyjs = require('gulp-uglify');
const rename = require('gulp-rename');

function css(){
  return src(['css/deps/*.css', './css/src/theme.css', './css/src/logos.css', './css/src/cards.css'])
         .pipe(concat('styles.css'))
         .pipe(uglifycss({ "uglyComments": true }))
         .pipe(rename({ extname: '.min.css' }))
         .pipe(dest('css/dist/'));
}

function js(){
  return src(['script/src/chartist.js', 'script/src/chartist-*'])
         .pipe(concat('bundle.js'))
         .pipe(uglifyjs())
         .pipe(rename({ extname: '.min.js' }))
         .pipe(dest('script/dist/'));
         
}

exports.build = series(css, js);