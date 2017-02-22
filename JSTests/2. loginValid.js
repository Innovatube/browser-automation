module.exports = function(webdriver) {
	var test = {};
    var By = webdriver.By,
        Until = webdriver.Until;

    //exception handling for notfound element
    var nf = (err) => console.log(err.message);
    var driver;

    test.next = {};
    test.run = function(_driver){
    	console.log("======================");
    	console.log("Testcase loginValid: Executing...");
    	driver = _driver;

    	return navigateLogin()
	    .then(typeEmailPassword)
	    .then(pressRegister)
	    .then(verifyOldAccount)
	    .then((isOld)=>{
	    	if(isOld) return navigateLogin();
	    })
	    .then(typeEmailPassword)
	    .then(pressLogin)
	    .then(verifyDashboardPresent)
	    .then(()=>{
	    	console.log("Testcase loginValid: Finished...");
	    	return test.next.run();
	    });	
    }

    var verifyDashboardPresent = function() {
        return false;
    }

    var verifyOldAccount = function() {
        return driver.findElement(By.className("fl-login-title"))
        .catch(nf)
        .then((element) => {
            var isOld = element.getText() == "Thank you for choosing FLOW!";
            return isOld;
        });
    }


    var navigateLogin = function() {
        var menuButton = By.css("a > div.flowIcon > div > span.flIconText");
        var loginButton = By.xpath("//div[@id='app']/div/div/div/div/a[2]/button");
        return new Promise((callback) => {
            driver.findElement(menuButton)
                .then(element => element.click(), nf)
                .then(() => {
                    driver.findElement(loginButton)
                        .then(element => element.click(), nf)
                        .then(callback);
                });
        })
    }

    var typeEmailPassword = function() {
        return driver.findElement(By.name("email")).catch(nf)
            .then(element =>
                element.sendKeys("ginny@innovatube.com"))
            .then(() => {
                driver.findElement(By.name("password")).catch(nf)
                    .then(element =>
                        element.sendKeys("Kutjchit141_"))
            });
    }


    var pressLogin = function() {
    	return driver.findElement(By.css("button.flow-btn"))
        .then(element => {
            //
        });
    }
    	
    var pressRegister = function(){
		return driver.findElement(By.css("button.flow-btn"))
		.catch(nf)
        .then(element => {
            element.click()
        });
    }

    return test;
};
