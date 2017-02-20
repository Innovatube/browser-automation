module.exports = function(webdriver){
	var webdriver = webdriver,
	By = webdriver.By;

	var test = {};
	test.run = function(driver){
		driver.get(driver.baseUrl).then(()=>{
			
			console.log("======================");
			console.log("Test case UI: Executing...");
			this.perform(driver);
			console.log("Test case UI: Done!");
		});
	}

	test.perform = function(driver){
		driver.findElement(By.className('flCover')).catch(logNotFound);
		driver.findElement(By.name('Features')).catch(logNotFound);
		driver.findElement(By.name('Team')).catch(logNotFound);
		driver.findElement(By.name('Pricing')).catch(logNotFound);
		driver.findElement(By.name('Contact')).catch(logNotFound);

		var	logNotFound = function(err){
			console.log(err.message);
		}
	}

	return test;
};