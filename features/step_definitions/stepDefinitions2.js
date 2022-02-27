var {defineSupportCode} = require('cucumber');
var SearchPage = require ('../../pageObjects/searchPage.js') 
defineSupportCode(function({Given, When, Then}) {
    let searchPage = new SearchPage();
	Given("xzy",async  function (){
        // await browser.driver.manage().window().maximize();
        //     await browser.get('https://angularjs.org');
 
        // await browser.driver.manage().window().maximize();
        await browser.get('https://play.letcode.in/contextmenu');

	});
	
	
	Then('456',async  function(){
       

	});
        

});