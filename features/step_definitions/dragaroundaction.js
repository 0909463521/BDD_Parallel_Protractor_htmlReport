var {defineSupportCode} = require('cucumber');
const { browser } = require('protractor');
var DragaroundPage = require ('../../pageObjects/dragaroundPage.js') 
defineSupportCode(function({Given, When, Then }) {
    let dragPage = new DragaroundPage();

	Given("Navigate to Drag Page",async  function (){

    await browser.driver.manage().window().maximize();
    await browser.get('https://letcode.in/test');
    let titleLinkToDragPage = await  element(by.css('[href="/draggable"]'));

    await  browser.actions().mouseMove(titleLinkToDragPage).perform();
      
    await browser.executeScript("arguments[0].click();", titleLinkToDragPage);

    // await browser.executeScript("arguments[0].scrollIntoView();", titleLinkToDropPage);
    let currentURL = await browser.getCurrentUrl();
    expect(currentURL).equal("https://letcode.in/draggable");
	});


	When("Drag around component",async  function (){
        await dragPage.draganddropelement();

    });
	
	Then('Validate Drag result',async  function(){
        await dragPage.validateDragaround() 
	});
        

});