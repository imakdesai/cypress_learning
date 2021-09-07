import { HomePageObject } from "../support/page-object/homePageObject";
import { LoginPageObject } from "../support/page-object/loginPageObject";
const productFile = require('./../fixtures/product.json');
const homePageObject = new HomePageObject();
const loginPageObject = new LoginPageObject();



describe('Verify Product block', () => {

 beforeEach(function() {
    loginPageObject.loginFunction();
    loginPageObject.verifyText('ProductLogo', productFile.product.ProductLogo);
 }) 
    it('verify image', () => {
        homePageObject.verifyImage('image', 'items');
    });

    it.only('verifyproduct', () => {
        homePageObject.verifyText('itemTitle', productFile.product.ProductTitle );
        homePageObject.verifyText('itemCost',productFile.product.productCost);
        homePageObject.verifyText('description',productFile.product.ProductDescription);
        homePageObject.clickButton('addToCart');
        homePageObject.verifyText('ShoppingCartBadge', 1);
        homePageObject.verifyText('remove','Remove');
    });
})