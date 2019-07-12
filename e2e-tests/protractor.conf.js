//jshint strict: false
exports.config = {
  sauceUser: process.env.SAUCE_USERNAME,

  sauceKey: process.env.SAUCE_ACCESS_KEY,

  sauceBuild: "angular-pipeline-demo: " + process.env.BRANCH_NAME + "-" + process.env.BUILD_NUMBER,

  allScriptsTimeout: 11000,

  specs: [
    '*.spec.js'
  ],

  onPrepare: function () {
        var caps = browser.getCapabilities()
        console.log(caps)
    },

  multiCapabilities: [{
        browserName: 'chrome',
        version: 'latest',
        platform: 'OS X 10.14',
        name: "chrome-tests-demo-views",
        shardTestFiles: true,
        maxInstances: 25,
        tunnelIdentifier: 'derek_shared_demo',
        extendedDebugging: true
    },
    {
      browserName: 'firefox',
      version: 'latest',
      platform: 'OS X 10.12',
      name: "firefox-tests-demo-views",
      shardTestFiles: true,
      maxInstances: 25,
      tunnelIdentifier: 'derek_shared_demo',
      extendedDebugging: true
  },{
      browserName: 'chrome',
      version: 'latest',
      platform: 'OS X 10.12',
      name: "chrome-tests-demo-views",
      shardTestFiles: true,
      maxInstances: 25,
      tunnelIdentifier: 'derek_shared_demo',
      extendedDebugging: true
  },{
    browserName: 'firefox',
    version: 'latest',
    platform: 'OS X 10.12',
    name: "firefox-tests-demo-views",
    shardTestFiles: true,
    maxInstances: 25,
    tunnelIdentifier: 'derek_shared_demo',
    extendedDebugging: true
}
  ],

  // capabilities: {
  //   'browserName': 'chrome'
  // },

  baseUrl: 'http://localhost:5000/#!/view1',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },
  onComplete: function () {

      var printSessionId = function (jobName) {
          browser.getSession().then(function (session) {
              console.log('SauceOnDemandSessionID=' + session.getId() + ' job-name=' + jobName);
          });
      }
      printSessionId("Angular/Protractor Demo Test Suite");
  }
};
