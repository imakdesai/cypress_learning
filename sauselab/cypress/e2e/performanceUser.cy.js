import { HomePageObject } from '../support/page-object/homePageObject';
import { LoginPageObject } from '../support/page-object/loginPageObject';
const homePageObject = new HomePageObject();
const loginPageObject = new LoginPageObject();

describe('scenario 6', () => {
    beforeEach(function () {
      loginPageObject.loginFunction(
        Cypress.env('performanceGlitch'),
        Cypress.env('password')
      );
    });
    it('verifyproduct', () => {
      homePageObject.clickButton('addToCartBackPack');
      homePageObject.clickButton('addToCart');
      homePageObject.scrollIntoView('Hamburger');
      homePageObject.clickButton('Hamburger');
      homePageObject.clickButton('AllItems');
      homePageObject.clickButton('removeSouceBackPack');
      homePageObject.scrollIntoView('Hamburger');
      homePageObject.clickButton('Hamburger');
      homePageObject.clickButton('logout');
    });
  });
  