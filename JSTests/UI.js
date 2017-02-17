module.exports = function(webdriver){
	var webdriver = webdriver,
	By = webdriver.By;

	var test = {};
	test.run = function(driver){
		console.log("Test case 1 executing...");
		try{
			driver.findElement(By.className('flCover'));
			driver.findElement(By.name('Features'));
			driver.findElement(By.name('Team'));
			driver.findElement(By.name('Pricing'));
			driver.findElement(By.name('Contact'));
		}
		catch(err){
			console.log("ERROR: ", err);
			return;
		}
		console.log("PASSED");
	}

	return test;
};