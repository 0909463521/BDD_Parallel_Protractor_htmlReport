var {defineSupportCode} = require('cucumber');
const { browser } = require('protractor');
var SlidePage = require ('../../pageObjects/multiselectPage.js') 
defineSupportCode(function({Given, When, Then }) {
    let slidePage = new SlidePage();

	Given("Navigate to MultiSelect Page",async  function (){

    await browser.driver.manage().window().maximize();
    await browser.get('https://letcode.in/test');
    let titleLinkToDropPage = await  element(by.css('[href="/selectable"]'));

    await  browser.actions().mouseMove(titleLinkToDropPage).perform();
      
    await browser.executeScript("arguments[0].click();", titleLinkToDropPage);

    // await browser.executeScript("arguments[0].scrollIntoView();", titleLinkToDropPage);
    let currentURL = await browser.getCurrentUrl();
    expect(currentURL).equal("https://letcode.in/selectable");
	});


	When("MultiSelect component",async  function (){
        await slidePage.multiSelectElement();
        
        

    });
	
	Then('Validate MultiSelect result',async  function(){
        console.log("multiSelect");
	});
        

});