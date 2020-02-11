// Page class for maine page

var MainPage = function() {

    this.navigateTo = function(param){
        browser.driver.get(param)
        browser.sleep(3000)
        browser.driver.manage().window().maximize();
    }

    this.searchText = function(param){
        waitForElement('id', 'search').sendKeys(param)
    }

    this.isSearchTextPresent = function (param) {
        return waitForElement('xpath', '//a//p[contains(text(),\''+param+'\')]')
    }

    this.getSearchableData = function () {
        return waitForElements('xpath', '//ul[@class=\'list-graph\']//li')
    }


    //Currently storing all page elements in this page.

    this.getAllReposPerProgrammingLanguage = function () {
        return waitForElements('xpath', '//div[@id=\'repos-per-programming-language\']//p')
    }

    this.clickOnDataField = function (param) {
        waitForElement('xpath', '//a//p[contains(text(),\''+param+'\')]').click()
    }

    this.clickOnLanguageRadio = function (param) {
        waitForElement('id', 'language-'+param.toLowerCase()).click()
    }

    this.clickOnMeetUpLink = function (param) {
        waitForElement('xpath', '//div[@class=\'bar\']//a[contains(text(),\''+param+'\')]').click()
    }


    this.getPageHeader = function () {
        return waitForElement('xpath', '//h3')
    }

    this.mouseHoverElement = function (param) {
        var el = waitForElement('xpath', '//div[@id=\'events-per-group\']//a[contains(text(),\''+param+'\')]')
        browser.driver.actions().mouseMove(el).perform();
    }

    this.getHoverText = function (param) {
        return waitForElement('xpath', '//div[contains(text(), \'last updated on '+param+'\')]')
    }

    function waitForElement(findType, findValue){
        browser.sleep(2000);
        console.log('Finding Element with '+findType+' : '+findValue)
        var el;
        if(findType === 'xpath'){
            el = browser.driver.findElement(by.xpath(findValue))
        }else if(findType === 'name'){
            el = browser.driver.findElement(by.name(findValue))
        }else if(findType === 'id'){
            el = browser.driver.findElement(by.id(findValue))
        }
        browser.driver.executeScript("arguments[0].setAttribute('style', arguments[1]);",el, "color: green; border: 2px solid green;").
        then(function(resp){
          browser.sleep(500);
        },function(err){
          console.log("error is :"+err);
        });
        return el;
      };

    function waitForElements(findType, findValue){
        browser.sleep(2000);
        console.log('Finding Element with '+findType+' : '+findValue)
        var el;
        if(findType === 'xpath'){
            el = browser.driver.findElements(by.xpath(findValue))
        }else if(findType === 'name'){
            el = browser.driver.findElements(by.name(findValue))
        }else if(findType === 'id'){
            el = browser.driver.findElements(by.id(findValue))
        }
        browser.driver.executeScript("arguments[0].setAttribute('style', arguments[1]);",el, "color: green; border: 2px solid green;").
        then(function(resp){
            browser.sleep(500);
        },function(err){
            console.log("error is :"+err);
        });
        return el;
    };

}

module.exports = new MainPage();
