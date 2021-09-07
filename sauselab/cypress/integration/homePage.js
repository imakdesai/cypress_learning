import { HomePageObject } from "../support/page-object/homePageObject";
import { LoginPageObject } from "../support/page-object/loginPageObject";
const homePageObject = new HomePageObject();
const loginPageObject = new LoginPageObject();


describe('Verify Product block', () => {
    it.only('verify image',()=> {
        loginPageObject.loginFunction();
        loginPageObject.verifyText('ProductLogo','Products');
        homePageObject.verifyImage('image','items');
    })
})