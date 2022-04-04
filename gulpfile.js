const { src, dest } = require("gulp");
const gulp = require ('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const rename = require('gulp-rename');


gulp.task('cssminify', function(cb){
  return src('./sass/*.scss')
        .pipe(sass().on("error", sass.logError))
        .pipe(dest('./static/styles'))
        .pipe(postcss(cssnano()))
        .pipe(rename({
            extname: '.min.css'
          }))
        .pipe(dest('./static/styles'));
      cb()
});

gulp.task('watch', function(cb){
  gulp.watch('./sass/**/*.scss', gulp.series(['cssminify']));
  // gulp.watch('./**/*.js');
  // gulp.watch('./views/**/*.hbs')
  cb();
})
