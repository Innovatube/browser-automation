
var webdriver = require('selenium-webdriver'),
	By = webdriver.By,
	fs = require('fs'),
	path = require('path');

var rootPath = path.normalize(__dirname );
var testDir = rootPath + '/JSTests';

//load tests
var testCases = [];
fs.readdirSync(testDir).forEach(function(file) {
    if (file.indexOf('.js') >= 0) {
        testCases.push(
        	require(testDir + '/' + file)(webdriver));
        console.log('Loaded: ' + file);
    }
})
console.log("");

var driver = new webdriver.Builder().forBrowser('firefox').build();
driver.baseUrl = 'https://beta.flowzone.cloud/';
driver.get(driver.baseUrl).then(()=>{
	testCases.forEach((test)=>{
		test.run(driver);

	})
	driver.quit();
});

