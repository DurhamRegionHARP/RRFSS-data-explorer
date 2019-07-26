const { src, dest, series } = require('gulp');
const concat = require('gulp-concat');
const uglifycss = require('gulp-uglifycss');
const uglifyjs = require('gulp-uglify');
const rename = require('gulp-rename');
const svgmin = require('gulp-svgmin');

function css(){
  return src(['css/deps/*.css', './css/src/*.css'])
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

function svg(){
  return src('assets/images/*.svg')
        .pipe(svgmin())
        .pipe(dest('assets/images/'));
}

exports.img = svg;
exports.build = series(css, js);
