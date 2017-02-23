var webdriver = require('selenium-webdriver'),
	By = webdriver.By,
	fs = require('fs'),
	path = require('path');

var	nf = function(err){
	console.log(err.message);
}

var driver = new webdriver.Builder().forBrowser('firefox').build();
driver.baseUrl = 'https://beta.flowzone.cloud/';
driver.get(driver.baseUrl);


var navigateLogin = function(){
	var menuButton = By.css("a > div.flowIcon > div > span.flIconText");
	var loginButton = By.xpath("//div[@id='app']/div/div/div/div/a[2]/button");

	driver.findElement(menuButton).click().catch(nf);
	driver.findElement(loginButton).click().catch(nf)
}

var typeEmailPassword = function(){
	driver.findElement(By.name("email"))
	.sendKeys("ginny@innovatube.com").catch(nf);

	driver.findElement(By.name("password"))
	.sendKeys("Kutjchit141_").catch(nf);
}

var pressRegister = ()=>{
	driver.findElement(By.css("button.flow-btn"))
	.click()
	.catch(nf);
}

navigateLogin();
typeEmailPassword();
pressRegister();

driver.findElement(By.className("fl-login-title"))
.getText().then((text)=>{
	if(text == "Thank you for choosing FLOW!"){
		var loginBtn = By.xpath('//*[@id="app"]/div/nav/div[3]/a/div/div/span');
		driver.findElement(loginBtn)
		.click()
		.catch(nf)
	}
},nf)

.then(()=>{
		console.log("Test case UI: Done!");
},nf);

//driver.quit();