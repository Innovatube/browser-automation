var webdriver = require('selenium-webdriver'),
	until = webdriver.until,
	By = webdriver.By,
	fs = require('fs'),
	path = require('path');

var	nf = function(err){
	console.log(err.message);
}

var driver = new webdriver.Builder().forBrowser('firefox').build();
driver.get('https://surveys.flowzone.cloud/survey/Motivator/56/1/2c31b79b-e2bf-549d-b86a-5f7c816cfeff')

driver.wait(until.elementLocated(By.css('.group-survey-pages')), 5000);

var item1 = driver.findElement(By.css('.drop-item > div:nth-child(1)'));

driver.actions()
.dragAndDrop(item1, {x: 0, y: -100})
.perform();

driver.wait(new Promise((res)=>{
	setTimeout(res,100000);
}),100000);

//driver.quit();

//.drop-item > div:nth-child(1)
//div.drop-item

