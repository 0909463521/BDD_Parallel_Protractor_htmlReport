var {defineSupportCode} = require('cucumber');
const { browser } = require('protractor');
var SortPage = require ('../../pageObjects/sortPage.js') 
defineSupportCode(function({Given, When, Then }) {
    let sortPage = new SortPage();

	Given("Navigate to Sort Page",async  function (){

    await browser.driver.manage().window().maximize();
    await browser.get('https://letcode.in/test');
    let titleLinkToDragPage = await  element(by.css('[href="/sortable"]'));

    await  browser.actions().mouseMove(titleLinkToDragPage).perform();
      
    await browser.executeScript("arguments[0].click();", titleLinkToDragPage);
    
    // let entertaiment = await element(by.xpath(`//body/ins[2]/ins[1]/span[1]/*[1]`));

    // await browser.executeScript("arguments[0].click();", entertaiment);


    // await browser.executeScript("arguments[0].scrollIntoView();", titleLinkToDropPage);
    let currentURL = await browser.getCurrentUrl();
    expect(currentURL).equal("https://letcode.in/sortable");
	});


	When("Sort component",async  function (){

        
        let entertaiment = await element(by.xpath("//body/ins[2]/ins[1]/span[1]/*[1]"));

        await entertaiment.click();
        
        await sortPage.sortElement();

    });
	
	Then('Validate Sort result',async  function(){
        await sortPage.validateSort() 
	});
        

});