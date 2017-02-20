module.exports = function(webdriver){
	var webdriver = webdriver,
	By = webdriver.By;
	Until = webdriver.Until;

	var test = {};
	test.run = function(driver){
		//driver.get(driver.baseUrl);
		console.log("======================");
		console.log("Testcase loginValid: Executing...");
		
		this.performSync(driver);

	    console.log("Test case loginValid: Done!");
	}

	//callbacks for handling found and notfound element
	var f = (element)=>{};
	var nf = (err)=>{
		console.log(err.message);
	}

	test.performSync = function(driver){
		//navigate to login screen
	    this.navigateLogin(driver);

	    //type email and password
		this.typeEmailPassword(driver);	    

	    //click "REGISTER" button
	    this.pressRegister(driver);

	    //verify if account is created
	    var oldAccount = this.verifyOldAccount(driver);


	    //verify dashboard presence
	    var dashboardPresent = this.dashboardPresent(driver);

	    if(!(oldAccount || dashboardPresent)){	
	    };
	}

	test.dashboardPresent = function(driver){
		return false;
	}

	test.verifyOldAccount = function(driver){
		var a = driver.findElement(By.className("fl-login-title"));
		.then((element)=>{
			return (element.getText() == "Thank you for choosing FLOW!");
		},nf);
	}


	test.navigateLogin = function(driver){
		var menuButton = By.css("a > div.flowIcon > div > span.flIconText");
		var loginButton = By.xpath("//div[@id='app']/div/div/div/div/a[2]/button");

		driver.findElement(menuButton)
	    .then((element)=>element.click()
	    	.then((element)=>{ 
		    	driver.findElement(loginButton)
		    	.then(element=>
		    		element.click()
		    	,nf);	
		    },nf)
	    ,nf);
	}

	test.typeEmailPassword = function(driver){
		driver.findElement(By.name("email"))
	    .then(element=>
	    	element.sendKeys("ginny@innovatube.com")
	    ,nf);

	    driver.findElement(By.name("password"))
	    .then(element=>
	    	element.sendKeys("Kutjchit141_")
	    ,nf);
	}

	test.pressRegister = function(driver){
		driver.findElement(By.css("button.flow-btn")).then(element =>
			element.click()
		,nf);
	}

	return test;
};