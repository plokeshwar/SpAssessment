exports.config = {

	// setting to launch tests directly without selenium server
	directConnect : true,
	// address of running selenium server
	seleniumAddress : 'http://localhost:4444/wd/hub',

	// setting time outs
	getPageTimeOut : 200000,
	allScriptsTimeout : 500000,

	// setting framework
	framework : 'custom',
	frameworkPath : require.resolve('protractor-cucumber-framework'),

	// setting protractor to ignore uncaught exceptions to take care by protractor-cucumber-framework
	ignoreUncaughtExceptions : true,

	// configuration parameters
	params: {
		testEnv: 'test'
    },
	
	// browser to launch tests
	capabilities : {
		browserName : 'chrome',
		loggingPrefs: {
			browser: 'ALL'
		},
		acceptInsecureCerts : true,
		chromeOptions : {
			args : [ '--disable-extensions' ]
		}
	},

	// Specify Test Files
	//
	// Define which tests should execute
	specs : [ 
	          'features/e2e/*.feature'
	       ],

	//Define which tests should be excluded from execution.
	exclude : [
	          // 'features/test.feature'
			],

	// Set node node_modules/protractor/bin/webdriver-manager start level and enables colors for log output
	logLevel : 'verbose',
	coloredLogs : true,

	// arguments to cucumber.js
	cucumberOpts : {
		require : [ 
		            'features/support/env.js', 
		            'features/support/hooks.js',
		            'features/step_definitions/*Steps.js'
		],
		tags : false,
		format : 'pretty',
		profile : false,
		'no-source' : true
	}
	
};
