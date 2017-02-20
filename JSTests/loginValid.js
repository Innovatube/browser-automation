module.exports = function(webdriver){
	var webdriver = webdriver,
	By = webdriver.By;

	var test = {};
	test.run = function(driver){
		//driver.get(driver.baseUrl);
		console.log("Testcase loginValid executing...");
		try{
			//navigate to login screen
		    driver.findElement(By.css("a > div.flowIcon > div > span.flIconText")).click();
		    driver.findElement(By.xpath("//div[@id='app']/div/div/div/div/a[2]/button")).click();

		    //type email and password
		    driver.findElement(By.name("email")).sendKeys("ginny@innovatube.com");
		    driver.findElement(By.name("password")).sendKeys("Kutjchit141_");

		    //click "REGISTER" button
		    driver.findElement(By.css("button.flow-btn")).click();	

		    //verify if account is created
		    var oldAccount = true;
		    try{
		    	driver.findElement(By.className("fl-login-title"));	
		    }catch(err){
		    	console.log(err);
		    	oldAccount = false;
		    }

		    //verify if the purchase screen is present
		    var purchaseScreen = true;
		    try{
		    	driver.findElement(By.className("fl-purchase"));
		    }
		    catch(err){
		    	console.log(err);
		    	purchaseScreen = false;
		    }
		    
		    var result = oldAccount || purchaseScreen;
		    console.log("Test case loginValid completed. Result: ", result);
		}
		catch(err){
			console.log(err);
		}
	
	}
	return test;
};