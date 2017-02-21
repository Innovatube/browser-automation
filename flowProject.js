
var webdriver = require('selenium-webdriver'),
	By = webdriver.By,
	fs = require('fs'),
	path = require('path');

var rootPath = path.normalize(__dirname );
var testDir = rootPath + '/JSTests';

//load tests - test chaining
var testCases = [];
var files = fs.readdirSync(testDir);
testCases.push(require(testDir + '/' + files[0]));
console.log('Loaded: ' + files[0]);
for(var i = 1; i < files.length; i++){
	testCases.push(
    	require(testDir + '/' + files[i]));
    console.log('Loaded: ' + files[i]);
}
console.log("");

var driver = new webdriver.Builder().forBrowser('firefox').build();
driver.baseUrl = 'https://beta.flowzone.cloud/';
driver.get(driver.baseUrl).then(()=>{
	testCases.forEach((test)=>{
		test(webdriver, driver);
	})
})
.then(()=>driver.quit());

