
 class DragaroundPage {
	constructor()
	{
		this._element = {
		

            DRAG_SOURCE :  element(by.id('sample-box')),
           
			TABLE_SQUARE :  element(by.className('example-boundary')),

            TMP: element(by.cssContainingText('p', 'Insight'))

		}
		
	}

	async draganddropelement() {
	

        let locationX = (await  this._element.DRAG_SOURCE.getLocation()).x;
        let locationY = (await  this._element.DRAG_SOURCE.getLocation()).y;

        let hellosize = await this._element.TABLE_SQUARE.getSize();
        console.log(await this._element.DRAG_SOURCE.getLocation());
        console.log(hellosize)
        await browser.actions().
        mouseDown(this._element.DRAG_SOURCE)
        .perform()
        await browser.actions().
        mouseMove(this._element.DRAG_SOURCE.getWebElement(), {x: 0, y: 0}).
        mouseMove({x:locationX , y:locationY}).
        mouseUp().
        perform(); 


	}
	async validateDragaround(){
        // await  browser.actions().mouseMove(this._element.TXT_TARGET).perform();

        console.log("DRAGGGGGGGGGGGGGG")
	
	}
	
};
module.exports = DragaroundPage;


