#Selenium-WebDriver browser automation

First clone this repo, install dependencies:


`git clone https://github.com/Innovatube/browser-automation.git`


`npm install`


##Trying "Flow website" test-cases with Selenium IDE (Firefox only):

- The link to flow website: https://beta.flowzone.cloud/
- Hand written test cases: https://docs.google.com/spreadsheets/d/1JDifwRafpNojGTnAIs4jwgNMmYVh-7yjkivB6bOeQ8U/edit#gid=299622649
- First install Selenium IDE addon: https://addons.mozilla.org/en-US/firefox/addon/selenium-ide/
- Open the IDE, click on "File" menu and select "Open test suite...", then select the test suite FlowProjectTests_Selenese/Website/WebsiteFLOW
- Select "Actions" menu, then "Play entire test suite"


##Using WebDriver API in NodeJS:

First download & install WebDriver:

[ChromeDriver]
(https://sites.google.com/a/chromium.org/chromedriver/downloads)

[FirefoxDriver]
(https://github.com/mozilla/geckodriver/releases/)

After that, make sure that the paths to those drivers are added to your system environment variables.

Start the test:
`npm start`

Node-WebDriver API documentation:
http://seleniumhq.github.io/selenium/docs/api/javascript/index.html

Other WebDriver documentation: 
http://www.seleniumhq.org/docs/03_webdriver.jsp
