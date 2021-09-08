import { createYield } from "typescript";
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
        cy.wait(4000);
        homePageObject.verifyImage('image', 'items');
    });

    it('verifyproduct', () => {
        homePageObject.verifyText('itemTitle', productFile.product.ProductTitle );
        homePageObject.verifyText('itemCost',productFile.product.productCost);
        homePageObject.verifyText('description',productFile.product.ProductDescription);
        homePageObject.clickButton('addToCart');
        homePageObject.verifyText('ShoppingCartBadge', 1);
        homePageObject.verifyText('remove','Remove');
    });
    
    it('verifySort',() => {
        homePageObject.dropdownselect('SortFilter', 'Name (Z to A)');
        homePageObject.verifyText('itemTitle', productFile.ProductNameZtoA.productTitle);
        homePageObject.dropdownselect('SortFilter', 'Price (low to high)');
        homePageObject.verifyText('itemTitle', productFile.ProductLowtoHigh.productTitle);
        homePageObject.dropdownselect('SortFilter', 'Price (high to low)');
        homePageObject.verifyText('itemTitle', productFile.ProductHightoLow.productTitle);
    })
    it('vefify Humber', () => {
        homePageObject.clickButton('Hamburger');
        homePageObject.verifyText('AllItems','All Items');
        homePageObject.verifyText('About', 'About');
        homePageObject.verifyText('logout', 'Logout');
        homePageObject.verifyText('resetAppState', 'Reset App State');
    })
})