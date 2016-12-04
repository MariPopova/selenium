var webdriver = require('selenium-webdriver'),
    chrome = require('selenium-webdriver/firefox'),
    By = webdriver.By,
    until = webdriver.until,
    test = require('selenium-webdriver/testing');

test.describe('Login Litecart', function() {
    var driver;

    test.before(function() {
        var options = new chrome.Options();
        //  options.addArguments(["start-fullscreen"]);

        driver = new webdriver.Builder()
            .forBrowser('firefox')
            .setChromeOptions(options)
            .build();
        driver.getCapabilities().then(function(caps) {
            console.log(caps);
        });
    });

    test.it('should append query to title', function() {
        driver.get('http://localhost/litecart/admin/');
        driver.findElement(By.name('username')).sendKeys('admin');
        driver.findElement(By.name('password')).sendKeys('admin');
        driver.findElement(By.name('login')).click();
    });

    test.after(function() {
        driver.quit();
    });
});