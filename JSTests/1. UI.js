module.exports = function(webdriver, driver){
	var By = webdriver.By,
		Until = webdriver.Until;

	var	testLog = function(err){
		console.log("1. UI: " + err.message);
	}

	var testEnd = function(){
		console.log("Test case UI: Finished");
	}

	driver.findElement(By.className('flCover')).catch(testLog)
	driver.findElement(By.name('Features')).catch(testLog)
	driver.findElement(By.name('Team')).catch(testLog)
	driver.findElement(By.name('Pricing')).catch(testLog)
	driver.findElement(By.name('Contact')).catch(testLog)
	.then(testEnd, testEnd);


	
};