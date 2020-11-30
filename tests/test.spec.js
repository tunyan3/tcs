module.exports = {
   'Onsen Button List  Toolbar must be used':function(browser){
        browser
        .url(browser.launch_url)
        .waitForElementVisible('body')
        .verify.elementPresent('ons-list')
        .verify.elementPresent('ons-button')
        .verify.elementPresent('ons-toolbar')
        .end();
    },
    'Increment Button should have 0 as its initial value': function (browser) {
        browser
            .url(browser.launch_url)
            .verify.containsText('#btn-increment',"0")
            .end()
    },
    'List Header should have value "NUMBERS"': function (browser) {
        browser
            .url(browser.launch_url)
            .waitForElementVisible('body')
            .verify.containsText('ons-list-header',"NUMBERS")
            .end()
    },
   'Increment Button value should increment on each click': function (browser) {
        browser
            .url(browser.launch_url)
            .waitForElementVisible('body')
            .verify.containsText('#btn-increment',"0")
            .click('#btn-increment')
            .verify.containsText('#btn-increment',"1")
            .click('#btn-increment')
            .verify.containsText('#btn-increment',"2")
            .click('#btn-increment')
            .click('#btn-increment')
            .click('#btn-increment')
            .verify.containsText('#btn-increment',"5")
            .end()
    },
    'Increment Button  click should add a List Item with value of their position': function (browser) {
        browser
            .url(browser.launch_url)
            .click('#btn-increment')
            .verify.containsText('ons-list > ons-list-item:nth-of-type(1)',"1")
            .click('#btn-increment')
            .verify.containsText('ons-list > ons-list-item:nth-of-type(2)',"2")
            .click('#btn-increment')
            .click('#btn-increment')
            .click('#btn-increment')
            .click('#btn-increment')
            .verify.containsText('ons-list > ons-list-item:nth-of-type(6)',"6")
            .end();
    },
    'Toolbar heading should be List Generator':function(browser){
        browser
        .url(browser.launch_url)
        .verify.containsText('ons-toolbar:nth-child(1)',"List Generator")
    }
};