import { HomePageObject } from '../support/page-object/homePageObject';
import { LoginPageObject } from '../support/page-object/loginPageObject';
const homePageObject = new HomePageObject();
const loginPageObject = new LoginPageObject();


describe('scenario 5', () => {
    beforeEach(function () {
      loginPageObject.loginFunction(
        Cypress.env('userName'),
        Cypress.env('password')
      );
    });
    it('verifyproduct', () => {
      homePageObject.clickButton('addToCartBoltTshirt');
      homePageObject.scrollIntoView('Hamburger');
      homePageObject.clickButton('Hamburger');
      homePageObject.clickButton('resetAppState');
      homePageObject.refreshBrowser();
      //assert remove button si not displayed after refresh
      homePageObject.elementShouldNotExisit('removeSouceBoltTshirt');
      homePageObject.clickButton('addToCartBoltTshirt');
      //assert cart has only one element
      homePageObject.verifyText(`addToCart`, 1);
      homePageObject.scrollIntoView('Hamburger');
      homePageObject.clickButton('Hamburger');
      homePageObject.clickButton('logout');
    });
  });
  