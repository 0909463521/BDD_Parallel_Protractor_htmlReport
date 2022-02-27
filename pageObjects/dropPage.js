
 class DropPage {
	constructor()
	{
		this._element = {
			DRAG_SOURCE : element(by.id('draggable')),
			DROP_TARGET : element(by.id('droppable')),
            TXT_TARGET  : element(by.cssContainingText('p', 'Dropped!'))
		}
		
	}

	async draganddropelement() {
	
        await browser.actions().dragAndDrop(this._element.DRAG_SOURCE,this._element.DROP_TARGET).mouseUp().perform();

	}
	async validateDragandDrop(){
        // await  browser.actions().mouseMove(this._element.TXT_TARGET).perform();

        let sizeofscreen =await  browser.manage().window().getSize();
        console.log(sizeofscreen)
        await browser.executeScript(`window.scrollTo(0,${sizeofscreen.height/2});`)
		let txt_target = await this._element.TXT_TARGET.getText();
        expect(txt_target).equal("Dropped!")
	
	}
	
};
module.exports = DropPage;


