
var webdriver = require('selenium-webdriver'),
	By = webdriver.By,
	fs = require('fs'),
	path = require('path');

var rootPath = path.normalize(__dirname );
var testDir = rootPath + '/JSTests';
var testCases = [];

//load tests
fs.readdirSync(testDir).forEach(function(file) {
    if (file.indexOf('.js') >= 0) {
        testCases.push(
        	require(testDir + '/' + file)(webdriver));
        console.log('Loaded: ' + file);
    }
})


var driver = new webdriver.Builder().forBrowser('firefox').build();
driver.get('https://beta.flowzone.cloud/').then(()=>{
	testCases.forEach((test)=>{

		test.run(driver);
	})
	
	driver.quit();
});

