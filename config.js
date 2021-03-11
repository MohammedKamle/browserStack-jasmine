exports.config = {
    directConnect: true,

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome',
        'shardTestFiles': true,
        'maxInstances': 2
    },

    framework: 'jasmine',
    specs: [
        'input_spec.js',
        'mat_paginator_spec.js'
    ],

    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    }
};