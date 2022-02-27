
 class SortPage {
	constructor()
	{
		this._element = {
	
            // TODo 
            
            GETTOWORK: "//div[contains(text(),'Get to work')]",

            PICKUPGRO: "//div[contains(text(),'Pick up groceries')]",
            GOHOME: "//div[contains(text(),'Go home')]",
            FALLASLEEP: "//div[contains(text(),'Fall asleep')]",

            // DONEEE

            GETUP: "//div[contains(text(),'Get up')]",
            BRUSHTEETH: "//div[contains(text(),'Brush teeth')]",
            TAKEASHOWER: "//div[contains(text(),'Take a shower')]",
            CHECKEMAIL: "//div[contains(text(),'Check e-mail')]",
            WALKDOG: "//div[contains(text(),'Walk dog')]",


            

		}
		
	}

	async sortElement() {
        // let sizeofscreen =await  browser.manage().window().getSize();
        // console.log(sizeofscreen)
        // await browser.executeScript(`window.scrollTo(0,${sizeofscreen.height/3});`)
        
        // await browser.sleep(3000)

        // WORK - EMAIL
        await touchAndMove(this._element.GETTOWORK,this._element.CHECKEMAIL)

        // PICK UP  - DOG
        await touchAndMove(this._element.PICKUPGRO,this._element.WALKDOG)

      

        // // Getup _ Sleep   - BrushTeeth
        await touchAndMove(this._element.FALLASLEEP,this._element.BRUSHTEETH)
        
        //   // Go Home  - TakeShower
        await touchAndMove(this._element.GOHOME,this._element.TAKEASHOWER)
        

	}
	async validateSort(){
        // await  browser.actions().mouseMove(this._element.TXT_TARGET).perform();

        console.log("Helloooooooooo")
	
	}

   
	
};
async function touchAndMove(source , target)
{
    

    eleSource = await element(by.xpath(`${source}`));
    eleTarget = await element(by.xpath(`${target}`));

    console.log(await eleSource.getText())
    console.log(await eleTarget.getText())

    await browser.actions().
    mouseDown(eleSource)
    .perform();

    // await scrollToElement(eleTarget)

    await browser.actions().
    mouseMove(await eleSource.getWebElement(), {x: 0, y: 0}).
    mouseMove(eleTarget).
    perform(); 

    await browser.actions().
    mouseUp(eleSource).
    perform();

    // await browser.actions().dragAndDrop(source,target).perform();

    // await browser.actions().mouseUp().perform()

    // await browser.actions().dragAndDrop(source,target).mouseUp().perform();


    await browser.sleep(3000)
}
async function scrollToElement(element) {
    browser.executeScript('arguments[0].scrollIntoView()',await element.getWebElement())

}
module.exports = SortPage;


