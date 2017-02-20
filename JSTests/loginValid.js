module.exports = function(webdriver){
	var webdriver = webdriver,
	By = webdriver.By;

	var test = {};
	test.run = function(driver){
		driver.get("https://beta.flowzone.cloud/#Pricing");

		try{
			driver.get(baseUrl + "/");

			//navigate to login screen
		    driver.findElement(By.cssSelector("a > div.flowIcon > div > span.flIconText")).click();
		    driver.findElement(By.xpath("//div[@id='app']/div/div/div/div/a[2]/button")).click();

		    //type email and password
		    driver.findElement(By.name("email")).sendKeys("ginny@innovatube.com");
		    driver.findElement(By.name("password")).sendKeys("Kutjchit141_");

		    //click "LOGIN" button
		    driver.findElement(By.cssSelector("button.flow-btn")).click();	

		    //verify if account is created
		    var oldAccount = true;
		    try{
		    	driver.findElement(By.className("profile-account"));	
		    }catch(err){
		    	console.log(err);
		    	oldAccount = false;
		    }

		    //verify if the purchase screen is present
		    var = purchaseScreen = true;
		    try{
		    	driver.findElement(By.className("fl-purchase"));
		    }
		    catch(err){
		    	console.log(err);
		    	purchaseScreen = false;
		    }
		    
		    var result = oldAccount || purchaseScreen;
		    console.log("Test 2 completed. Result: ", result);
		}
		catch(err){
			console.log(err);
		}
	
	}
	return test;
};