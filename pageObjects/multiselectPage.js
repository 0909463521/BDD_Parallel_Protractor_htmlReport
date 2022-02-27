
 class MultiselectPage {
	constructor()
	{
		this._element = {
			ALLSELECT : element.all(by.id('selectable')),
			APPIUM: element(by.xpath("//*[contains(text(),'Appium')]")),
                        WEBDRIVERIO: element(by.xpath("//*[contains(text(),'Webdriver.io')]")),
                        CYPRESS: element(by.xpath("//*[contains(text(),'Cypress')]")),


		}
		
	}

	async multiSelectElement() {
        
        await  browser.actions().
               sendKeys(protractor.Key.CONTROL)
               .click(await this._element.APPIUM.getWebElement())
               .click(await this._element.WEBDRIVERIO.getWebElement())
               .click(await this._element.CYPRESS.getWebElement())
               .perform()






	}
	async validatemultiSelectElement(){
        // await  browser.actions().mouseMove(this._element.TXT_TARGET).perform();

        // let sizeofscreen =await  browser.manage().window().getSize();
        // console.log(sizeofscreen)
        // await browser.executeScript(`window.scrollTo(0,${sizeofscreen.height/2});`)
		// let txt_target = await this._element.TXT_TARGET.getText();
        // expect(txt_target).equal("Dropped!")
	
	}
	
};
module.exports = MultiselectPage;


