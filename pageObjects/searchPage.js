
 class SearchPage {
	constructor()
	{
		this._element = {
			YOURNAME : element(by.model('yourName')),
			GURUTXT : element(by.xpath('html/body/div[2]/div[1]/div[2]/div[2]/div/h1'))
		}
		
	}

	async inputYourName() {
		await this._element.YOURNAME.sendKeys('GURU99');
	}
	async validateGuru(){
		await this._element.GURUTXT;
	
	}
	
};
module.exports = SearchPage;


