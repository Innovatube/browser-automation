var webdriver = require('selenium-webdriver'),
	By = webdriver.By,
	fs = require('fs'),
	path = require('path');

var rootPath = path.normalize(__dirname );
var testDir = rootPath + '/JSTests';


//load tests - test chaining
var files = fs.readdirSync(testDir);
var testHead = currentTest = require(testDir + '/' + files[0])(webdriver); 
console.log('Loaded: ' + files[0]);
for(var i = 1; i < files.length; i++){
	currentTest.next = require(testDir + '/' + files[i])(webdriver);
	currentTest = currentTest.next;
    console.log('Loaded: ' + files[i]);
}
currentTest.next = {run: ()=>{console.log("All test are finished")}};

//1->2->4->6

var driver = new webdriver.Builder().forBrowser('firefox').build();
driver.baseUrl = 'https://beta.flowzone.cloud/';

var p = testHead.run(driver)
console.log(Promise.resolve(p) == p);

// driver.get(driver.baseUrl).then(()=>{
// 	console.log(testHead);
// 	//run the first test
// 	var p = testHead.run(driver)
// 	Promise.resolve(p) == p
// 	// testHead.run(driver).then(()=>{
// 	// 	driver.quit();	
// 	// });
// 	// testHead.next.run(driver);
	
// });

