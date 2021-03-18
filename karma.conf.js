var fs = require('fs');

// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function(config) {

  
  var webdriverConfig = {
      hostname: 'hub-cloud.browserstack.com/wd/hub',
      port: 80
  }

  config.set({
      hostname: 'hub-cloud.browserstack.com/wd/hub', // hostname, where karma web server will run
      port: 9876,
      basePath: './',
      frameworks: ['jasmine'],
      plugins: [
          'karma-jasmine',
          'karma-webdriver-launcher',
          'karma-*',
          'karma-mocha-reporter'
      ],
      client: {
          clearContext: false
      },

      preprocessors: {
      },
      files: [
        'tests/*.js',
        'src/*.js'
      ],
     
      captureTimeout: 600000,
      retryLimit: 1,
      browserDisconnectTimeout: 90000,
      browserDisconnectTolerance: 1,
      browserNoActivityTimeout: 90000,
      reporters: ['mocha'],
      colors: true,
      concurrency: 1,
      logLevel: config.LOG_DEBUG,
      browsers: ['Win8.1_chrome_71','Win10_Edge_18'],
      customLaunchers: {
        'Win8.1_chrome_71': {
              base: 'WebDriver',
              config: webdriverConfig,
              browserName: 'chrome',
              platform: 'Windows 8.1',
              version: 'latest',
              build: 'Jasmine Unit Test Demo',
              name: 'Karma jasmine Sample',
              user: process.env.BROWSERSTACK_USER,
              accessKey: process.env.BROWSERSTACK_ACCESSKEY
              
          },
        'Win10_Edge_18': {
            base: 'WebDriver',
            config: webdriverConfig,
            browserName: 'MicrosoftEdge',
            platform: 'Windows 10',
            version: 'latest',
            build: 'Jasmine Unit Test Demo',
            name: 'Karma jasmine Sample',
            user: process.env.BROWSERSTACK_USER,
            accessKey: process.env.BROWSERSTACK_ACCESSKEY
            
        }
      },
      singleRun: true,
      autoWatch: true
  });
};