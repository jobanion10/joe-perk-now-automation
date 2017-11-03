
module.exports = {
    loginScreen: {
        emailField: 'input[id=email]',
        passwordField: 'input[id=pass]',
        signIn: 'button[type=button]',
        createAccount: 'a[id=signButton]',
    },
    createAnAccount: {
        createAccount: 'a[id=signButton]',
        yes: 'button[ng-click="goToSignupEmail()"]',
        workEmailField: 'input[type=email]',
        nextButtonEmail: 'div[ng-click="nextSignupEmail()"]',
        firstName: 'input[ng-model="user.first_name"]',
        lastName: 'input[ng-model="user.last_name"]',
        password: 'input[ng-model="user.password"]',
        nextButtonCreateYourAccount: 'div[ng-click="nextSignupInfo()"',
        homeZipcode: 'input[type=number]',
        getPerks: 'button[ng-click="signup()"]',
        codeButton:{
            tag:'button',
            text:'No, but I have a code'
        },
        code1: 'input[ng-model="user.company_code1"]',
        code2:'input[ng-model="user.company_code2"]',
        code3:'input[ng-model="user.company_code3"]',
        code4:'input[ng-model="user.company_code4"]',
        personalEmailField: 'input[type=email]',
        nextButtonPersonalEmailField: 'div[ng-click="submitCompanyCode()"]'
    },
    userHome: {
        menu: {
            menuButton: 'button[menu-toggle="right"]',
            menuItems: 'a[class=item-content]',
            requestAPerk: 'Request a Perk',
            referAVendor: 'Refer a Vendor',
            contactSupport: 'Contact Support',
            privacyPolicy: 'Privacy Policy',
            termsAndConditions: 'Terms and Conditions of Use',
            logout: 'Logout'
        },
        deals: {
            feauturedDeals: 'div[class=featured-deal]',
            serviceDeals: 'div[class="category-icon service"]',
            foodDeals: 'div[class="category-icon food"]',
            conciergeDeals: 'div[class="category-icon concierge"]',
            funDeals: 'div[class="category-icon fun"]',
            dealTags: 'h4',
            selectDealToRedeemTags: 'div[class="deal-header shadow-spaced ng-binding"]',
            redeem:{
                tag:"button",
                text:"REDEEM"
            },
            check:'div[id=check]',
            redeemed:{
                tag:"button",
                text:"REDEEMED"
            },
            back:{
                tag:'button',
                text: 'Back'
            },
            cancel:{
                tag:'button',
                text:'Cancel'
            },
            dealDescription:'h4[id="modal-description"]',
            location:'a[class="center qa__address ng-binding"]',
            hours:'p[class="ng-binding"]',
            website:'a[class="center qa__url"]',
            callUs:'a[class="center qa__phone"]'
        }
    }
}