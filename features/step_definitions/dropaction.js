var {defineSupportCode} = require('cucumber');
const { browser } = require('protractor');
var DropPage = require ('../../pageObjects/dropPage.js') 
defineSupportCode(function({Given, When, Then }) {
    let dropPage = new DropPage();

	Given("Navigate to Drop Page",async  function (){

    await browser.driver.manage().window().maximize();
    await browser.get('https://letcode.in/test');
    let titleLinkToDropPage = await  element(by.css('[href="/dropable"]'));

    await  browser.actions().mouseMove(titleLinkToDropPage).perform();
      
    await browser.executeScript("arguments[0].click();", titleLinkToDropPage);

    // await browser.executeScript("arguments[0].scrollIntoView();", titleLinkToDropPage);
    let currentURL = await browser.getCurrentUrl();
    expect(currentURL).equal("https://letcode.in/dropable");
	});


	When("Drag and Drop component",async  function (){
        await dropPage.draganddropelement();

    });
	
	Then('Validate result',async  function(){
        await dropPage.validateDragandDrop() 
	});
        

});