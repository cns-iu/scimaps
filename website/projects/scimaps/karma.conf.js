// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageReporter: {
      dir: require('path').join(__dirname, '../../coverage/scimaps'),
      reports: [
        'html',
        'lcovonly',
        'text-summary'
      ],
      fixWebpackSourcePaths: true,
      check: {
        emitWarning: false,
        global: {
          statements: 75,
          lines: 75
        }
      }
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    browsers: ['ChromeHeadless'],
    singleRun: true,

    customLaunchers: {
      ChromeHeadlessWSL: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox', '--disable-features=VizDisplayCompositor']
      }
    }
  });
};
