
var webdriver = require('selenium-webdriver'),
	By = webdriver.By,
	fs = require('fs'),
	path = require('path');

var rootPath = path.normalize(__dirname );
var testDir = rootPath + '/JSTests';

//load tests
var testCases = [];
var files = fs.readdirSync(testDir);
for(var i = 0; i < files.length; i++){
	testCases.push(
    	require(testDir + '/' + files[i]));
    console.log('Loaded: ' + files[i]);
}
console.log("");

var driver = new webdriver.Builder().forBrowser('firefox').build();
driver.baseUrl = 'https://beta.flowzone.cloud/';
driver.get(driver.baseUrl);
testCases.forEach((test)=>{
	test(webdriver, driver);
})

driver.quit();