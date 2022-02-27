
var fse = require('fs-extra');
const path = require("path");


async function screenshotToFile(image){
    let directoryScreen = '/Users/bachvu/Desktop/ProtractorCucumber/reports/screenshots/'
    let date = new Date();
    let filename = date.toString()+date.getTime()+".png";
    var stream = fse.createWriteStream(directoryScreen + filename);
    stream.write(image);
    stream.end();
}



module.exports = {

    
    async takescreen(attach){
       let png = await browser.takeScreenshot();
       let decodedImage = new Buffer(await png.replace(/^data:image\/(png|gif|jpeg);base64,/, ''), 'base64');
       screenshotToFile(decodedImage)
       attach(decodedImage, 'image/png')

    },

      
};