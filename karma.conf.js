var webpackConfig = require('./webpack.config.js');

module.exports = function (config) {
  config.set({
    browsers: ['Chrome'],
    singleRun: true,
    frameworks: ['mocha', "requirejs"],
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true
    },
    files: [
      // 'node_modules/require-directory/index.js',
      'node_modules/jquery/dist/jquery.min.js',
      'node_modules/foundation-sites/dist/js/foundation.min.js',
      'app/tests/**/*.test.jsx'
    ],
    preprocessors: {
      'app/tests/**/*.test.jsx': ['webpack', 'sourcemap']
    },
    reporters: ['mocha'],
    client: {
      mocha: {
        timeout: '5000'
      }
    },
    // load plugins
		plugins: [
			require("karma-mocha"),
			require("karma-requirejs"),
      require('karma-coverage')
		]
  });
};