import { HomePageObject } from '../support/page-object/homePageObject';
import { LoginPageObject } from '../support/page-object/loginPageObject';
import { ShoppingCartPageObject } from '../support/page-object/shoppingCartPageObject';
const homePageObject = new HomePageObject();
const loginPageObject = new LoginPageObject();
const shoppingCartPageObject = new ShoppingCartPageObject();


describe('scenario 4', () => {
    beforeEach(function () {
      loginPageObject.loginFunction(
        Cypress.env('errorUser'),
        Cypress.env('password')
      );
    });
    it('verifyproduct', () => {
      homePageObject.clickButton('addToCartBikeLight');
      homePageObject.clickButton('addToCart');
      shoppingCartPageObject.clickButton('checkout');
      shoppingCartPageObject.verifyText(
        'titlePage',
        'Checkout: Your Information'
      );
      shoppingCartPageObject.addText('firstName', 'randomtEXT');
      //lastName input is disabled for this user
      shoppingCartPageObject.addText('postalCode', 3434234);
      shoppingCartPageObject.clickButton('continueButton');
      //finish button is not working for this user
    });
  });
 