const functions = require('../test-setup/helperFunctions')
const data = require('../test-setup/data')
const selectors = require('../test-setup/selectors')
module.exports = {
    beforeEach: function (browser) {
        browser.url('http://192.168.11.79:8080/#/login')
        browser.resizeWindow(600, 1200)
    },
    afterEach: function (browser, done) {
        browser.end()
        setTimeout(function () {
            // finished async duties
            done();
        }, 200);
    },
    // all the functions in my tests are commmented fully in the commonFunctions folder
    "I can create an account using an email, and sign in with that account": function (browser) {
        functions.createAccountWithEmail({
            workEmail: data.createAnAccount.workEmail.goodData.transaction1,
            firstName: data.createAnAccount.firstName.goodData.transaction1,
            lastName: data.createAnAccount.lastName.goodData.transaction1,
            password: data.createAnAccount.password.goodData.transaction1,
            zipcode: data.createAnAccount.zipcode.goodData.transaction1
        }, browser)
    },
    "I can create an account using a code, and sign in with that account": function (browser) {
        functions.createAccountWithCode({
            code1: data.createAnAccount.code1.goodData.transaction1,
            code2: data.createAnAccount.code2.goodData.transaction1,
            code3: data.createAnAccount.code3.goodData.transaction1,
            code4: data.createAnAccount.code4.goodData.transaction1,
            personalEmail: data.createAnAccount.workEmail.goodData.transaction3,
            firstName: data.createAnAccount.firstName.goodData.transaction1,
            lastName: data.createAnAccount.lastName.goodData.transaction1,
            password: data.createAnAccount.password.goodData.transaction1,
            zipcode: data.createAnAccount.zipcode.goodData.transaction1
        }, browser)
    },
    "Food deals can be viewed, redeemed, and all vendor information is correct": function (browser) {
        functions.signInAsAdmin(browser)
        functions.selectADeal({
            category: selectors.userHome.deals.foodDeals,
            vendor: data.vendorsTested.Food1,
            deal: data.vendorsTested.Food1.deals.deal1Name,
            dealDescription: data.vendorsTested.Food1.deals.deal1Description
        }, browser)
    },
    "Concierge deals can be viewed, redeemed, and all vendor information is correct": function (browser) {
        functions.signInAsAdmin(browser)
        functions.selectADeal({
            category: selectors.userHome.deals.conciergeDeals,
            vendor: data.vendorsTested.Concierge1,
            deal: data.vendorsTested.Concierge1.deals.deal1Name,
            dealDescription: data.vendorsTested.Concierge1.deals.deal1Description
        }, browser)
    },
    "Fun deals can be viewed, redeemed, and all vendor information is correct": function (browser) {
        functions.signInAsAdmin(browser)
        functions.selectADeal({
            category: selectors.userHome.deals.funDeals,
            vendor: data.vendorsTested.Fun1,
            deal: data.vendorsTested.Fun1.deals.deal1Name,
            dealDescription: data.vendorsTested.Fun1.deals.deal1Description
        }, browser)
    },
    "Service deals can be viewed, redeemed, and all vendor information is correct": function (browser) {
        functions.signInAsAdmin(browser)
        functions.selectADeal({
            category: selectors.userHome.deals.serviceDeals,
            vendor: data.vendorsTested.Services1,
            deal: data.vendorsTested.Services1.deals.deal1Name,
            dealDescription: data.vendorsTested.Services1.deals.deal1Description
        }, browser)
    },
    "information must be present on sign up page to login": browser => {
        functions.noLoginInfo(browser)
    },
    "An incorrect email address does not allow you to sign in": browser => {
        functions.incorrectLoginInfo(browser)
        functions.noLoginInfo(browser)
    },
    "An email address cannot be used to create an account without a valid domain is not accepted": browser => {
        functions.incorrectCreateAnAccountInfo({
            workEmail: data.login.email.badData1,
            firstName: data.createAnAccount.firstName.goodData.transaction1,
            lastName: data.createAnAccount.lastName.goodData.transaction1,
            password: data.createAnAccount.password.goodData.transaction1,
            zipcode: data.createAnAccount.zipcode.goodData.transaction1
        }, browser)
    },
    "An invalid code does not allow you to create an account": browser => {
        functions.invalidCode({
            code1: data.createAnAccount.code1.badData.transaction1,
            code2: data.createAnAccount.code2.badData.transaction1,
            code3: data.createAnAccount.code3.badData.transaction1,
            code4: data.createAnAccount.code4.badData.transaction1,
            personalEmail: data.createAnAccount.workEmail.goodData.transaction3,
            firstName: data.createAnAccount.firstName.goodData.transaction1,
            lastName: data.createAnAccount.lastName.goodData.transaction1,
            password: data.createAnAccount.password.goodData.transaction1,
            zipcode: data.createAnAccount.zipcode.goodData.transaction1
        }, browser)
    }
}