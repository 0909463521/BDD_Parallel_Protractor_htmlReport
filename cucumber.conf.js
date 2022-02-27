 var reporter = require('cucumber-html-reporter');
 const fs = require("fs");
 const fsExtra = require('fs-extra')
 const path = require("path");
 const directoryPath = path.join(__dirname, 'reports');

exports.config = {

	// setting to launch tests directly without selenium server
	directConnect : true,
	// address of running selenium server
    // seleniumAddress: "http://localhost:4444/wd/hub",
    chromeDriver:'/Users/bachvu/Desktop/ProtractorCucumber/chromedriver',
  // firefoxDriver: path.join(__dirname, 'geckodriver'),

	// setting time outs
	getPageTimeOut : 6000,
	allScriptsTimeout : 6000,

	// setting framework
	framework : 'custom',
	frameworkPath : require.resolve('protractor-cucumber-framework'),

	// setting protractor to ignore uncaught exceptions to take care by protractor-cucumber-framework
	ignoreUncaughtExceptions : true,

/*	// configuration parameters
	params: {
		testEnv: 'test'
    },*/
	
	// browser to launch tests
	capabilities : {
        // browserName: "firefox",
        // Marionette: true,
        // acceptSslCerts:true
        browserName:'chrome',
        name: 'BV QA',
        logName: 'Chrome - English',
        count: 1,
        shardTestFiles: true,
        chromeOptions: {
          prefs: { "profile.default_content_setting_values.notifications": 2 }
        },
        maxInstances: 2

	},

    // multiCapabilities: [
    // {
    //     'browserName': 'chrome',

       
    // }, 
    // {
    //     'browserName': 'chrome',

    // },
    
    // ],

	// Specify Test Files
	//
	// Define which tests should execute
	specs : [ 
	          './features/test.feature',
              './features/test2.feature'
	       ],

	//Define which tests should be excluded from execution.
	exclude : [
	          // 'features/search.feature'
			],

	// Set log level and enables colors for log output


	// arguments to cucumber.js
	cucumberOpts : {
		require : [ 
		            'services/world.js', 
		            '/Users/bachvu/Desktop/ProtractorCucumber/services/hook.js',
		            'features/step_definitions/*.js'
		],
		tags : false,
		profile : false,
		'no-source' : true,  
        strict: false,    
        format: 'json:/Users/bachvu/Desktop/ProtractorCucumber/reports/cucumber.json', 
        'format-options': '{"colorsEnabled": true }',
	},
    
    afterLaunch: async function afterLaunch() {
            console.log("Report full of all parallel process");
        await RunReportHtml();
    
    }
	
};

async function RunReportHtml()
{
 
  try{
    var newReport = [];
    const files = await fs.readdirSync(directoryPath);
    console.log("demoooooo")
    console.log(files)
   for( var i = 0 ; i<files.length ; i++ )
   {
     
    const fullPath = path.join(directoryPath, files[i]);
    if (!(fullPath.includes('html') || fullPath.includes('DS_Store') || fullPath.includes('screenshots') )  ) {
      const data = fs.readFileSync(fullPath, "utf8");

      newReport = newReport.concat(JSON.parse(data));
      fs.unlinkSync(fullPath);

    }
   }

  fs.writeFileSync("./reports/cucumber.json", JSON.stringify(newReport));
  await generateHtmlReport();
  console.log("Done successfully!");
  
  }catch(err){

  }
 
}
async function generateHtmlReport()
{
    var options = {
          theme: 'bootstrap',
          jsonFile: '/Users/bachvu/Desktop/ProtractorCucumber/reports/cucumber.json',
          output: '/Users/bachvu/Desktop/ProtractorCucumber/reports/cucumberreportsss.html',
          reportSuiteAsScenarios: true,
          launchReport: true,
          metadata: {
              "App Version":"0.3.2",
              "Test Environment": "STAGING",
              "Browser": "Chrome  54.0.2840.98",
              "Platform": "Windows 10",
              "Parallel": "Scenarios",
              "Executed": "Remote"
          }
        };
  
       await  reporter.generate(options);
       fs.unlinkSync("/Users/bachvu/Desktop/ProtractorCucumber/reports/cucumber.json");
      //  fsExtra.emptyDirSync(directoryPath+"/screenshots");


}


