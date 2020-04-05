const gulp = require('gulp');
const webpack = require('webpack');
const config = require('../webpack.config');

const callback = () => {
  console.log('callback');
};

gulp.task('build', (callback) => {
  return webpack(config, callback);
});

gulp.task('build:watch', (callback) => {
  return gulp.watch(
    ['src/public/*.js', 'src/views/*.html', 'build'],
    { events: 'all' },
    callback()
  );
});
