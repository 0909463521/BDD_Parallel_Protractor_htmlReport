var outputDir = './reports/';
var targetJson = outputDir + 'cucumber_report.json';

var {takescreen} = require('./ultils.js')
var JsonFormatter = require('cucumber').JsonFormatter;
var fse = require('fs-extra');
var reporter = require('cucumber-html-reporter');


var {defineSupportCode,BeforeAll,After} = require('cucumber');

// defineSupportCode(async function({registerHandler}) {
// 	  registerHandler('BeforeFeatures',async function () {
		  
// 			console.log("asd")
//         });
// });


BeforeAll(async function() {
        // await browser.waitForAngularEnable(false);
   
});
defineSupportCode(function({setDefaultTimeout}) {
    setDefaultTimeout(10 * 60 * 1000);
});
After(async function(){
    var attach = this.attach; 
 
    await takescreen(attach);
})
