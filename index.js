var webdriver = require('selenium-webdriver'),
	By = webdriver.By,
	until = webdriver.util;

var driver = new webdriver.Builder().forBrowser('firefox').build();
driver.get('https://google.com');

var element = driver.findElement(By.name('q'));
element.sendKeys('browser automation');

driver.getTitle().then(function(title) {
  console.log('Page title is: ' + title);
});

driver.wait(function() {
  return driver.getTitle().then(function(title) {
    return title.toLowerCase().lastIndexOf('browser automation', 0) === 0;
  });
}, 10000);


driver.getTitle().then(function(title) {
  console.log('Page title is: ' + title);
});

driver.quit();