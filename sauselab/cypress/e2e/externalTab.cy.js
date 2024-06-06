import { HomePageObject } from '../support/page-object/homePageObject';
import { LoginPageObject } from '../support/page-object/loginPageObject';
const homePageObject = new HomePageObject();
const loginPageObject = new LoginPageObject();


describe('scenario 7', () => {
    beforeEach(function () {
      loginPageObject.loginFunction(
        Cypress.env('userName'),
        Cypress.env('password')
      );
    });
    it('verifyproduct', () => {
      homePageObject.clickLinks('twitter');
      homePageObject.clickLinks('facebook');
      homePageObject.clickLinks('linkedin');
      homePageObject.scrollIntoView('Hamburger');
      homePageObject.clickButton('Hamburger');
      homePageObject.clickButton('logout');
    });
});  
