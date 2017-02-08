
var webdriver = require('selenium-webdriver'),
	By = webdriver.By,
	until = webdriver.util;

var driver = new webdriver.Builder().forBrowser('firefox').build();
driver.get('https://beta.flowzone.cloud/').then(()=>{

	var elementToCheck = [];
	
	elementToCheck.push(driver.findElement(By.className('flCover')));
	elementToCheck.push(driver.findElement(By.name('Features')));
	elementToCheck.push(driver.findElement(By.name('Team')));
	elementToCheck.push(driver.findElement(By.name('Pricing')));
	elementToCheck.push(driver.findElement(By.className('Contact')));

	var result = true;
	elementToCheck.forEach((item, index)=>{
		result = (item!=null);
		console.log("Test case 1: ", result);
	})
});







driver.quit();