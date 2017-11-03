const data = require('../test-setup/data')
const selectors = require('../test-setup/selectors')
module.exports = {
    createAccountWithEmail: function (data, browser) {
        browser
            .waitForElementVisible(selectors.loginScreen.createAccount, 1000)
            //clicking Create an Account from the login screen
            .click(selectors.loginScreen.createAccount)
            //clicking yes
            .waitForElementVisible(selectors.createAnAccount.yes, 1000)
            .clickByText(selectors.createAnAccount.yes, "Yes")
            .pause(1000)
            //inputing valid email data
            .setValue(selectors.createAnAccount.workEmailField, data.workEmail)
            //clicking the next arrow
            .click(selectors.createAnAccount.nextButtonEmail)
            .pause(500)
            //filling out the fields
            .setValue(selectors.createAnAccount.firstName, data.firstName)
            .setValue(selectors.createAnAccount.lastName, data.lastName)
            .setValue(selectors.createAnAccount.password, data.password)
            //clicking the next arrow
            .click(selectors.createAnAccount.nextButtonCreateYourAccount)
            .pause(500)
            //filling out the zipcode field
            .setValue(selectors.createAnAccount.homeZipcode, data.zipcode)
            //clicking get perks
            .clickByText(selectors.createAnAccount.getPerks, "Get Perks")
            .pause(500)
            //screen gets stuck on loading so had to introduce work around
            //this navigates back to the login page, and then refreshes
            .url("http://192.168.11.79:8080/#/login")
            .refresh()
            .pause(500)
            //fills out the login field with the information used to create an account
            .setValue(selectors.loginScreen.emailField, data.workEmail)
            .setValue(selectors.loginScreen.passwordField, data.password)
            .click(selectors.loginScreen.signIn)
            .pause(500)
            //makes sure the home page loads
            .waitForElementVisible(selectors.userHome.deals.serviceDeals, 5000)
    },
    createAccountWithCode: function (data, browser) {
        browser
            //these are the same steps as above to click on create an account
            .waitForElementVisible(selectors.loginScreen.createAccount, 1000)
            .click(selectors.loginScreen.createAccount)
            .pause(800)
            .clickByText(selectors.createAnAccount.codeButton.tag, selectors.createAnAccount.codeButton.text)
            .pause(800)
            //filling out the fields with a valid code
            //any email formatted with an @ and . can be used
            .setValue(selectors.createAnAccount.code1, data.code1)
            .setValue(selectors.createAnAccount.code2, data.code2)
            .setValue(selectors.createAnAccount.code3, data.code3)
            .setValue(selectors.createAnAccount.code4, data.code4)
            .setValue(selectors.createAnAccount.personalEmailField, data.personalEmail)
            .pause(800)
            //clicks the next arrow
            .click(selectors.createAnAccount.nextButtonPersonalEmailField)
            .pause(500)
            //fills out fields with required information
            .setValue(selectors.createAnAccount.firstName, data.firstName)
            .setValue(selectors.createAnAccount.lastName, data.lastName)
            .setValue(selectors.createAnAccount.password, data.password)
            //clicks the next arrow
            .click(selectors.createAnAccount.nextButtonCreateYourAccount)
            .pause(500)
            //fills out field for zip code
            //clicks get perks
            .setValue(selectors.createAnAccount.homeZipcode, data.zipcode)
            .clickByText(selectors.createAnAccount.getPerks, "Get Perks")
            .pause(800)
            //screen gets stuck on loading so had to introduce work around
            //this navigates back to the login page, and then refreshes
            .url("http://192.168.10.239:8080/#/login")
            .refresh()
            .pause(800)
            //fills out the login field with the information used to create an account
            .setValue(selectors.loginScreen.emailField, data.personalEmail)
            .setValue(selectors.loginScreen.passwordField, data.password)
            .click(selectors.loginScreen.signIn)
            .pause(500)
            //verifies page has loaded on home screen
            .waitForElementVisible(selectors.userHome.deals.serviceDeals, 2000)
    },
    signInAsAdmin: function (browser) {
        //inputs informations required to login as an Administrator
        //verifies the page loads on the home screen
        browser
            .waitForElementVisible(selectors.loginScreen.createAccount, 4000)
            .setValue(selectors.loginScreen.emailField, "admin@perknow.com")
            .setValue(selectors.loginScreen.passwordField, "whatever")
            .click(selectors.loginScreen.signIn)
            .pause(500)
            .waitForElementVisible(selectors.userHome.deals.serviceDeals, 5000)
    },

    selectADeal: function (data, browser) {
        browser
            //ensures that all the categories for the deals are present
            .waitForElementVisible(selectors.userHome.deals.feauturedDeals, 5000)
            .waitForElementVisible(selectors.userHome.deals.foodDeals, 5000)
            .waitForElementVisible(selectors.userHome.deals.conciergeDeals, 5000)
            .waitForElementVisible(selectors.userHome.deals.funDeals, 5000)
            .waitForElementVisible(selectors.userHome.deals.serviceDeals, 5000)
            //selects a deal category
            .click(data.category)
            .pause(900)
            //selects a deal
            .clickByText(selectors.userHome.deals.dealTags, data.deal)
            .pause(1500)
            //ensures that all information for the vendor is present. This includes:
            //the location information, including a link that navigates you to a google maps page with the correct location
            //the hours of operation
            //verifies that the "call us" button contains a link with the vendors
            //verifies that the link to the website contains the correct information
            .assert.containsText(selectors.userHome.deals.location, data.vendor.locationLine1)
            .assert.containsText(selectors.userHome.deals.location, data.vendor.locationLine2)
            .assert.containsText(selectors.userHome.deals.hours, data.vendor.hoursLine1)
            .assert.containsText(selectors.userHome.deals.hours, data.vendor.hoursLine2)
            .assert.containsText(selectors.userHome.deals.hours, data.vendor.hoursLine3)
            .assert.attributeContains(selectors.userHome.deals.callUs, 'href', data.vendor.phone)
            .assert.attributeContains(selectors.userHome.deals.location, 'href', data.vendor.locationUrl)
            .assert.attributeContains(selectors.userHome.deals.website, 'href', data.vendor.website)
            //selects a deal, verifies that the information included is correct, clicks cancel
            .clickByText(selectors.userHome.deals.selectDealToRedeemTags, data.deal)
            .pause(2000)
            .assert.containsText(selectors.userHome.deals.dealDescription, data.dealDescription)
            .pause(500)
            .clickByText(selectors.userHome.deals.cancel.tag, selectors.userHome.deals.cancel.text)
            .pause(900)
            //selects a deal, clicks redeem, and then redeemed
            .clickByText(selectors.userHome.deals.selectDealToRedeemTags, data.deal)
            .pause(1000)
            .clickByText(selectors.userHome.deals.redeem.tag, selectors.userHome.deals.redeem.text)
            .pause(1000)
            .clickByText(selectors.userHome.deals.redeemed.tag, selectors.userHome.deals.redeemed.text)
            .pause(500)

    },
    goBack: function (browser) {
        browser
            //this navigates back from and vendor page to the home screen
            .clickByText(selectors.userHome.deals.back.tag, selectors.userHome.deals.back.text)
            .pause(200)
            .clickByText(selectors.userHome.deals.back.tag, selectors.userHome.deals.back.text)
            .pause(200)
    },
    noLoginInfo: browser => {
        browser
            //clicks the sign in button without entering any informations
            //accepts given alert, and verifies all the information for the login page is still present
            .click(selectors.loginScreen.signIn)
            .pause(1000)
            .acceptAlert()
            .waitForElementVisible(selectors.loginScreen.createAccount, 1000)
            .waitForElementVisible(selectors.loginScreen.emailField, 1000)
            .waitForElementVisible(selectors.loginScreen.passwordField, 1000)
            .waitForElementVisible(selectors.loginScreen.signIn, 1000)
    },
    incorrectLoginInfo: browser => {
        browser
            //incorrect log in information does not allow you to sign in
            .waitForElementVisible(selectors.loginScreen.createAccount, 4000)
            .setValue(selectors.loginScreen.emailField, data.login.email.badData1)
            .setValue(selectors.loginScreen.passwordField, data.login.password.badData1)
    },
    incorrectCreateAnAccountInfo: (data, browser) => {
        browser
            .waitForElementVisible(selectors.loginScreen.createAccount, 5000)
            //clicking Create an Account from the login screen
            .click(selectors.loginScreen.createAccount)
            //clicking yes
            .waitForElementVisible(selectors.createAnAccount.yes, 1000)
            .clickByText(selectors.createAnAccount.yes, "Yes")
            .pause(1000)
            //inputing invalid email data
            .setValue(selectors.createAnAccount.workEmailField, data.workEmail)
            //clicking the next arrow
            .click(selectors.createAnAccount.nextButtonEmail)
            .pause(500)
            //fill out fields
            .setValue(selectors.createAnAccount.firstName, data.firstName)
            .setValue(selectors.createAnAccount.lastName, data.lastName)
            .setValue(selectors.createAnAccount.password, data.password)
            //clicking the next arrow
            .click(selectors.createAnAccount.nextButtonCreateYourAccount)
            .pause(500)
            //filling out the zipcode field
            .setValue(selectors.createAnAccount.homeZipcode, data.zipcode)
            //clicking get perks
            .clickByText(selectors.createAnAccount.getPerks, "Get Perks")
            .pause(500)
            .acceptAlert()
            //verify that you are still on the same page
            .waitForElementVisible(selectors.createAnAccount.homeZipcode, 2000)

    },
    invalidCode: (data, browser) => {
        browser
        //these are the same steps as above to click on create an account
        .waitForElementVisible(selectors.loginScreen.createAccount, 3000)
        .click(selectors.loginScreen.createAccount)
        .pause(800)
        .clickByText(selectors.createAnAccount.codeButton.tag, selectors.createAnAccount.codeButton.text)
        .pause(800)
        //filling out the fields with an invalid code
        .setValue(selectors.createAnAccount.code1, data.code1)
        .setValue(selectors.createAnAccount.code2, data.code2)
        .setValue(selectors.createAnAccount.code3, data.code3)
        .setValue(selectors.createAnAccount.code4, data.code4)
        .setValue(selectors.createAnAccount.personalEmailField, data.personalEmail)
        .pause(800)
        //clicks the next arrow
        .click(selectors.createAnAccount.nextButtonPersonalEmailField)
        .pause(500)
        //fills out fields with required information
        .setValue(selectors.createAnAccount.firstName, data.firstName)
        .setValue(selectors.createAnAccount.lastName, data.lastName)
        .setValue(selectors.createAnAccount.password, data.password)
        //clicks the next arrow
        .click(selectors.createAnAccount.nextButtonCreateYourAccount)
        .pause(500)
        //fills out field for zip code
        //clicks get perks
        .setValue(selectors.createAnAccount.homeZipcode, data.zipcode)
        .clickByText(selectors.createAnAccount.getPerks, "Get Perks")
        .pause(800)
         //verify that you are still on the same page
        .acceptAlert()
        .waitForElementVisible(selectors.createAnAccount.homeZipcode, 2000)
    }
}
