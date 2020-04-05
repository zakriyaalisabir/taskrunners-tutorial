const gulp = require('gulp');
const nodemon = require('gulp-nodemon');

gulp.task(
  'start',
  gulp.series('build', () => {
    return nodemon({ script: 'server.js' });
  })
);

gulp.task(
  'start:watch',
  gulp.series('build:watch', () => {
    return nodemon({ script: 'server.js' });
  })
);
