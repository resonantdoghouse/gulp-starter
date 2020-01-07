const gulp = require('gulp');
const terser = require('gulp-terser');
const rename = require('gulp-rename');
const browserSync = require('browser-sync');
const cssnano = require('gulp-cssnano');
const autoprefixer = require('gulp-autoprefixer');
const eslint = require('gulp-eslint');
const sass = require('gulp-sass');
// const pug = require("gulp-pug");
// const webpack = require("webpack-stream");

gulp.task('watch', function() {
  gulp.watch('js/*.js', gulp.series('scripts'));
  gulp.watch('css/*.css', gulp.series('styles'));
  // gulp.watch("js/*.js", gulp.series("webpack"));
  // gulp.watch("*.pug", gulp.series("pug")).on("change", browserSync.reload);
});

gulp.task('lint', function() {
  return gulp
    .src('./js/*.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task(
  'scripts',
  gulp.series('lint', function() {
    return gulp
      .src('./js/*.js')
      .pipe(terser())
      .pipe(rename({ extname: '.min.js' }))
      .pipe(gulp.dest('./build/js'));
  })
);

gulp.task('styles', function() {
  return gulp
    .src('./css/*.css')
    .pipe(
      autoprefixer({
        browsers: ['last 2 versions']
      })
    )
    .pipe(cssnano())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./build/css'));
});

gulp.task('sass', function() {
  return gulp
    .src('./sass/style.scss')
    .pipe(sass())
    .pipe(
      autoprefixer({
        browsers: ['last 2 versions']
      })
    )
    .pipe(gulp.dest('./build/css'))
    .pipe(cssnano())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('./build/css'));
});

gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });

  gulp
    .watch(['*.html', 'build/js/bundle.js', 'build/css/*.css', 'build/js/*.js'])
    .on('change', browserSync.reload);
});

gulp.task('default', gulp.parallel('browser-sync', 'watch'));

// webpack option to allow code-splitting e.g. using import
gulp.task(
  'webpack',
  gulp.series('lint', function() {
    return gulp
      .src('./js/*.js')
      .pipe(
        webpack({
          output: {
            filename: 'bundle.js'
          }
        })
      )
      .pipe(gulp.dest('./build/js'));
  })
);

// gulp.task("pug", function buildHTML() {
//   return gulp
//     .src("*.pug")
//     .pipe(
//       data(function(file) {
//         return JSON.parse(fs.readFileSync("./project.json"));
//       })
//     )
//     .pipe(
//       pug({
//         pretty: true
//         // pug config options here.
//       })
//     )
//     .pipe(gulp.dest(""));
// });
