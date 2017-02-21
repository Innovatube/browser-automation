module.exports = function(webdriver, driver){
	var By = webdriver.By,
		Until = webdriver.Until;

	console.log("======================");
	console.log("Testcase loginValid: Executing...");

	//callbacks for handling found and notfound element
	var f = (element)=>{};
	var nf = (err)=>{
		console.log(err.message);
	}


	var dashboardPresent = function(callback){
		return false;
	}

	var verifyOldAccount = function(callback){
		var a = driver.findElement(By.className("fl-login-title"))
		.then((element)=>{
			var isOld = element.getText() == "Thank you for choosing FLOW!";
			return callback(isOld);
		},nf);
	}


	var navigateLogin = function(callback){
		var menuButton = By.css("a > div.flowIcon > div > span.flIconText");
		var loginButton = By.xpath("//div[@id='app']/div/div/div/div/a[2]/button");

		driver.findElement(menuButton)
	    .then(element => element.click()
    	.then(()=>{ 
	    	driver.findElement(loginButton)
	    	.then(element=>element.click()
    		.then(callback), nf);
		}), nf);
	}

	var typeEmailPassword = function(callback){
		driver.findElement(By.name("email"))
	    .then(element => {
    		element.sendKeys("ginny@innovatube.com")
    		driver.findElement(By.name("password"))
		    .then(element =>{
		    	element.sendKeys("Kutjchit141_")
		    	callback()
		    },nf)
    	})
	}

	var pressLogin = function(callback){
		driver.findElement(By.css("button.flow-btn"))
		.then(element =>{
			console.log(element)
		});
	}

	var pressRegister = function(callback){
		driver.findElement(By.css("button.flow-btn"))
		.then(element =>{
			element.click()
			if(callback) callback()
		});
	}

	navigateLogin(
		typeEmailPassword(
			pressRegister(
				verifyOldAccount((isOld)=>{
					//preTask initialize to a function that do nothing
					var preTask = callback=>callback();
					if(isOld)
						preTask = navigateLogin;
					preTask( typeEmailPassword( pressLogin (
						console.log("Testcase finished")

					)))
				})
			)
		)
	)
};