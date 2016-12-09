var webdriver = require('selenium-webdriver');
chrome = require('selenium-webdriver/chrome'),
    By = webdriver.By,
    until = webdriver.until,
    test = require('selenium-webdriver/testing');

test.describe('Login Litecart', function() {
    var driver;

    test.before(function() {
        var options = new chrome.Options();
        //  options.addArguments(["start-fullscreen"]);

        driver = new webdriver.Builder()
            .forBrowser('chrome')
            .setChromeOptions(options)
            .build();
        driver.getCapabilities().then(function(caps) {
            console.log(caps);
        });
    });

    test.it('should append query to title', function() {
        driver.get('http://localhost/litecart/');
        var cards = driver.findElements(By.className('image-wrapper')).then(function(a) {
            for (var i = 0; i < a.length; i++) {
                    a[i].findElement(By.css("[class *= sticker]"));
                }

        });
    });

    test.after(function() {
        driver.quit();
    });
});