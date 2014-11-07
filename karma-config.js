// Karma configuration

module.exports = function(config) {
  var packageJson = require('./package.json');

  config.set({
    browserNoActivityTimeout: 40000,

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai', 'chai-sinon'],

    // list of files / patterns to load in the browser
    files: [
      '_.escape.js',
      'test/*.js',
    ],

    //preprocess matching files before serving them to the browser
    //available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      '_.escape.js': 'coverage'
    },

    coverageReporter: {
      reporters:[
        {type: 'html', dir:'coverage/'},
        {type: 'lcov', dir:'coverage/'},
        {type: 'text'}
      ],
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: [
      'spec',
      'coverage',
      'junit'
    ],

    htmlReporter: {
      outputFile: 'test-results.xml'
    },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: [
      'Chrome',
      'IE10 - Win7',
      'IE9 - Win7'
    ],

    plugins: [
      'karma-mocha',
      'karma-chai',
      'karma-chai-sinon',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-safari-launcher',
      'karma-coverage',
      'karma-junit-reporter',
      'karma-ievms',
      'karma-spec-reporter'
    ],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
