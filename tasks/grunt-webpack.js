const webpackConfig = require('../webpack.config');

module.exports = {
  dev: { ...webpackConfig, watch: false },
  watch: { ...webpackConfig, watch: true },
};
