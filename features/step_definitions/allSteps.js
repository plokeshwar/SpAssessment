// Step definitions

var mainPage = require('../pages/mainPage.js');
var {defineSupportCode} = require('cucumber');

defineSupportCode(function ({Given, When, Then}) {

    When(/^I navigate to site (.*)$/, function (name) {
        mainPage.navigateTo(name)
    });

    Then(/^I land on (.*)$/, function (name) {
        browser.driver.getTitle().then(function (title) {
            expect(title).to.equal(name)
        });
    });

    When(/^I search (.*) in the search field$/, function (text) {
        mainPage.searchText(text)
    });

    When(/^I click on (.*) data link$/, function (text) {
        mainPage.clickOnDataField(text)
    });

    When(/^I click on (.*) language radio button$/, function (text) {
        mainPage.clickOnLanguageRadio(text)
    });

    When(/^I mouse hover (.*) event$/, function (text) {
        mainPage.mouseHoverElement(text)
    });

    When(/^I click on (.*) meetup link$/, function (text) {
        mainPage.clickOnMeetUpLink(text)
        browser.driver.sleep(10000)
    });

    Then(/^I should be taken to new tab with title (.*)$/, function (expectedTitle, done) {
        var winHandles = browser.driver.getAllWindowHandles();
        winHandles.then(function (handles) {
            var parentWindow = handles[0];
            var popUpWindow = handles[1];
            browser.driver.switchTo().window(popUpWindow);
            browser.driver.sleep(10000)
            browser.driver.getTitle().then(function (title) {
                console.log(title)
                expect(title).to.equal(expectedTitle)
                browser.driver.close();
                browser.driver.switchTo().window(parentWindow);
                browser.driver.sleep(10000)
                done();
            });
        })


    })

    Then(/^I should be displayed with hover text (.*)$/, function (text, done) {
        mainPage.getHoverText(text).isDisplayed().then(function (flag) {
            expect(flag).to.eql(true);
            mainPage.getHoverText(text).getText().then(function (text) {
                console.log(text)
            })
            done();
        })
    });

    Then(/^the total number of repos for (.*) should display is (.*)$/, function (repoName, expectedCount, done) {
        mainPage.getAllReposPerProgrammingLanguage().then(function (elements) {
            expect(elements.length).to.equal(Number(expectedCount));
            done();
        });
    });

    Then(/^I should be navigated to (.*) page$/, function (headText, done) {
        mainPage.getPageHeader().getText().then(function (text) {
            expect(text).to.equal(headText);
            done();
        });
    });

    Then(/^the filter should display (.*)$/, function (text, done) {
        mainPage.isSearchTextPresent(text).isDisplayed().then(function (value) {
            expect(value).to.eql(true);
            done();
        });
    });

    Then(/^the filter should not display (.*)$/, function (text, done) {
        mainPage.isSearchTextPresent(text).isDisplayed().then(function (value) {
            expect(value).to.eql(false);
            done();
        });
    });

    Then(/^the total number of search data should display is (.*)$/, function (expectedCount, done) {
        mainPage.getSearchableData().then(function (elements) {
            console.log(elements)
            expect(elements.length).to.equal(Number(expectedCount));
            done();
        });
    });

    //Currently not used.
    function makeid() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    }

});
