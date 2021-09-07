import { HomePageObject , LoginPageObject , ShoppingCartPageObject } from "../support/page-object/";
const productFile = require('./../fixtures/product.json');
const  [homePageObject, loginPageObject , shoppingCartPageObject] = [new HomePageObject(), new LoginPageObject() , new ShoppingCartPageObject()];

describe('Verify Shopping cart', () => {
    beforeEach(function(){
        loginPageObject.loginFunction();
        loginPageObject.verifyText('ProductLogo', productFile.product.ProductLogo);
        homePageObject.clickButton('addToCart');
    });

    it.only('VerifyInventoryDetail', () => {
        homePageObject.verifyText('ShoppingCartBadge', productFile.product.quantity);
        homePageObject.clickButton('shoppingCart');
        shoppingCartPageObject.verifyText('inventoryName', productFile.product.ProductTitle );
        shoppingCartPageObject.verifyText('inventoryPrice',productFile.product.productCost);
        shoppingCartPageObject.verifyText('inventoryDesc',productFile.product.ProductDescription);
        shoppingCartPageObject.verifyText('inventoryquntity',productFile.product.quantity);
        shoppingCartPageObject.verifyText('removeQuantity','Remove');
        shoppingCartPageObject.verifyText('ContinueShopping','Continue Shopping');
        shoppingCartPageObject.verifyText('checkout','Checkout');
    });
})
