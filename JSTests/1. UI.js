module.exports = function(webdriver){
	var test = {};
	var By = webdriver.By,
		Until = webdriver.Until;

	var	logNotFound = function(err){
		console.log(err.message);
	}

	test.next = {};
	test.run = function(driver){
		console.log("======================");
		console.log("Test case UI: Executing...");



		return 
		driver.findElement(By.className('flCover'))
		.catch(logNotFound)
		.then(driver.findElement(By.name('Features'))).catch(logNotFound)
		.then(driver.findElement(By.name('Team'))).catch(logNotFound)
		.then(driver.findElement(By.name('Pricing'))).catch(logNotFound)
		.then(driver.findElement(By.name('Contact'))).catch(logNotFound)
		// .then(()=>{
		// 	console.log("Test case UI: Finished");
		// 	// do something with prev result
		// 	return nextTest.run(driver);	
		// });
	}
	
	return test;
};