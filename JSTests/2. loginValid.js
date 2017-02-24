module.exports = function(webdriver, driver){
	var By = webdriver.By,
		Until = webdriver.Until;

	//callbacks for handling found and notfound element
	var f = (element)=>{};
	var nf = (err)=>{
		console.log(err.message);
	}

	var navigateLogin = function(){
		var menuButton = By.css("a > div.flowIcon > div > span.flIconText");
		var loginButton = By.xpath("//div[@id='app']/div/div/div/div/a[2]/button");

		driver.findElement(menuButton).click().catch(nf);
		driver.findElement(loginButton).click().catch(nf);
	}

	var typeEmailPassword = function(){
		driver.findElement(By.name("email"))
		.sendKeys("ginny@innovatbe.com").catch(nf);

		driver.findElement(By.name("password"))
		.sendKeys("Kutjchit141_").catch(nf);
	}

	var pressRegister = ()=>{
		driver.findElement(By.css("button.flow-btn"))
		.click()
		.catch(nf);
	}

	var verifyOldAccount = ()=>{
		driver.findElement(By.className("fl-login-title"))
		.getText().then((text)=>{
			return (text == "Thank you for choosing FLOW!")
		},nf)	
	}

	var clickLogin = ()=>{
		var loginBtn =
		 	By.xpath('//*[@id="app"]/div/nav/div[3]/a/div/div/span');
		driver.findElement(loginBtn)
		.click()
		.catch(nf)
	}

	navigateLogin()
	typeEmailPassword()
	pressRegister()
	

};