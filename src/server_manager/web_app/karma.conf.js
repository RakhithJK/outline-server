const webpackConfig = require('../test.webpack.js');

module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    files: [
      './main.ts',
      '**.spec.ts',
    ],
    preprocessors: {
      '**.spec.ts': ['webpack'],
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    browsers: ['ChromeHeadless'],
    singleRun: false,
    concurrency: Infinity,
    webpack: {
      module: webpackConfig.module,
      resolve: webpackConfig.resolve,
      plugins: webpackConfig.plugins,
      mode: 'development'
    }
  })
};