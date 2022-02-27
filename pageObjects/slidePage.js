
 class SlidePage {
	constructor()
	{
		this._element = {
			SLIDER : element(by.id('generate')),
            WORD_LIMIT: element(by.xpath("//div[contains(text(),'Word limit : 1')]")),
            RESULT:  element(by.xpath("//div[contains(text(),'Afghanistan')]")),
		}
		
	}

	async slideelement() {
   
        let maxValue = await this._element.SLIDER.getSize();
        //reset to 0
        await browser.actions().dragAndDrop(
            this._element.SLIDER.getWebElement(),
            {x:(-800), y:0}
        ).mouseUp().perform();
       
        
       
	}
	async validateSlide(){
        // await  browser.actions().mouseMove(this._element.TXT_TARGET).perform();
        await expect(this._element.WORD_LIMIT).equal('Word limit : 1');
        await expect(this._element.RESULT).equal('Afghanistan')
	
	}
	
};
module.exports = SlidePage;


