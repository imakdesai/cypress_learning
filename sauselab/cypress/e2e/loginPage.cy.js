import { HomePageObject } from "../support/page-object/homePageObject";
import { LoginPageObject } from "../support/page-object/loginPageObject";
const loginPageObject = new LoginPageObject();
const homePageObject = new HomePageObject();

describe('Test case 1 (Successful Login and Logout)',() => {

    it('user logs in to the application', () => {
        cy.visit('/');
        loginPageObject.addText('Username', Cypress.env('userName'));
        loginPageObject.addText('Password', Cypress.env('password'));
        loginPageObject.clickButton('Login');
        homePageObject.scrollIntoView('Hamburger')
        homePageObject.clickButton('Hamburger');
        homePageObject.clickButton('logout'); 
    });

    it('Test case 2', () => {
        cy.visit('/');
        loginPageObject.addText('Username', 'locked_out_user');
        loginPageObject.addText('Password', 'secret_sauce');
        loginPageObject.clickButton('Login');
        //assert the failure text
        loginPageObject.verifyText('validation','Epic sadface: Sorry, this user has been locked out');
    });
});
