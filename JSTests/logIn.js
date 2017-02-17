module.exports = function(webdriver){
	var webdriver = webdriver,
	By = webdriver.By;

	var test = {};
	test.run = function(driver){
		driver.get("https://beta.flowzone.cloud/#Pricing");
	}

	return test;
};