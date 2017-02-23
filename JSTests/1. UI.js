module.exports = function(webdriver, driver){
	var By = webdriver.By,
		Until = webdriver.Until;

	console.log("======================");
	console.log("Test case UI: Executing...");

	var	logNotFound = function(err){
		console.log(err.message);
	}

	var testEnd = function(){
		console.log("Test case UI: Finished");
	}

	driver.findElement(By.className('flCover')).catch(logNotFound)
	driver.findElement(By.name('Features')).catch(logNotFound)
	driver.findElement(By.name('Team')).catch(logNotFound)
	driver.findElement(By.name('Pricing')).catch(logNotFound)
	driver.findElement(By.name('Contact')).catch(logNotFound)
	.then(testEnd, testEnd);


	
};