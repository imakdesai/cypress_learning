import { HomePageObject } from '../support/page-object/homePageObject';
import { LoginPageObject } from '../support/page-object/loginPageObject';
import { ShoppingCartPageObject } from '../support/page-object/shoppingCartPageObject';
const homePageObject = new HomePageObject();
const loginPageObject = new LoginPageObject();
const shoppingCartPageObject = new ShoppingCartPageObject();

describe('Scenario 3 Multiple scenarios Workflow', () => {
  beforeEach(function () {
    loginPageObject.loginFunction(
      Cypress.env('userName'),
      Cypress.env('password')
    );
  });

  it('Scenario 3 Multiple scenarios Workflow', async () => {
    homePageObject.dropdownselect('SortFilter', 'Price (low to high)');
    //assert sort order
    homePageObject.verifyText('SortFilter', 'Price (low to high)');
    //This would fetch the array of all price and store it
    let sortedPrices = homePageObject.getPriceForAll('itemCost');
    //assert if the array is asending or not
    homePageObject.checkAscending(sortedPrices);
    homePageObject.scrollIntoView('addToCartFleeceJacket');
    homePageObject.clickButton('addToCartFleeceJacket');
    //assert add to cart is not exist
    homePageObject.elementShouldNotExisit('addToCartFleeceJacket');
    //assert remove button to exist
    homePageObject.elementShouldExist('removeFleeceJacket');
    homePageObject.getPriceForFliceeJacket('description');
    homePageObject.scrollIntoView('addToCartSauceLabOneSie');
    homePageObject.clickButton('addToCartSauceLabOneSie');
    //assert add to cart is not exist
    homePageObject.elementShouldNotExisit('addToCartSauceLabOneSie');
    //assert remove button to exist
    homePageObject.elementShouldExist('removeSuceLabOneSie');
    homePageObject.getPriceForOneSie('description');
    homePageObject.scrollIntoView('addToCart');
    //assert cart value
    homePageObject.verifyText(`addToCart`, 2);
    homePageObject.clickButton('addToCart');
    //compare price with price on the cart page
    cy.wait(400)
      .get('@sauceLabspriceText')
      .then((sauceLabspriceText) => {
        shoppingCartPageObject.assertOneSie(
          'inventoryPrice',
          sauceLabspriceText
        );
      });
    //compare price with price on the cart page
    cy.wait(400)
      .get('@FleecePrice')
      .then((FleecePrice) => {
        shoppingCartPageObject.assertFleeceJacket(
          'inventoryPrice',
          FleecePrice
        );
      });
    //assert cart page
    shoppingCartPageObject.verifyText('titlePage', 'Your Cart');
    shoppingCartPageObject.clickButton('removeSuceLabOneSie');
    //assert quantity after removing one
    shoppingCartPageObject.verifyText('quantity', 1);
    shoppingCartPageObject.clickButton('checkout');
    shoppingCartPageObject.verifyText(
      'titlePage',
      'Checkout: Your Information'
    );
    shoppingCartPageObject.addText('firstName', 'randomtEXT');
    shoppingCartPageObject.addText('lastName', 'randomtEXT');
    shoppingCartPageObject.addText('postalCode', 3434234);
    shoppingCartPageObject.clickButton('continueButton');
    //assert price of the produce is price of the total
    cy.wait(400)
      .get('@FleecePrice')
      .then((FleecePrice) => {
        shoppingCartPageObject.assertFleeceJacket('itemSubTotal', FleecePrice);
      });
    shoppingCartPageObject.clickButton('finishButton');
    //assert thank you text
    shoppingCartPageObject.verifyText(
      'thankYouOrder',
      'Thank you for your order'
    );
    homePageObject.scrollIntoView('Hamburger');
    homePageObject.clickButton('Hamburger');
    homePageObject.clickButton('logout');
  });
});
