module.exports = function(webdriver){
	var webdriver = webdriver,
	By = webdriver.By;

	var test = {};
	test.run = function(driver){
		var elementToCheck = [];
		
		elementToCheck.push(driver.findElement(By.className('flCover')));
		elementToCheck.push(driver.findElement(By.name('Features')));
		elementToCheck.push(driver.findElement(By.name('Team')));
		elementToCheck.push(driver.findElement(By.name('Pricing')));
		elementToCheck.push(driver.findElement(By.name('Contact')));

		var result = true;
		elementToCheck.forEach((item, index)=>{
			result = result && (item!=null);
		})
		
		console.log("Test case 1: ", result);
	}

	return test;
};