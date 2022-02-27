var {defineSupportCode} = require('cucumber');
var SearchPage = require ('../../pageObjects/searchPage.js') 
defineSupportCode(function({Given, When, Then}) {
    let searchPage = new SearchPage();
	Given("asd",async  function (){
        // await browser.driver.manage().window().maximize();
        //     await browser.get('https://angularjs.org');
        // await browser.driver.manage().window().maximize();
        await browser.get('https://angularjs.org');
      await searchPage.inputYourName();

	});
	
	
	Then('123',async  function(){
        await  searchPage.validateGuru();

	});
        

});