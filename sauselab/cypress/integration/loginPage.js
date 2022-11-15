import { LoginPageObject } from "../support/page-object/loginPageObject";
const loginPageObhject = new LoginPageObject();
import { faker } from '@faker-js/faker';
var expect = chai.expect;



describe('User logins to the application',() => {
    it('user logs in to the application', () => {
        cy.visit('/');
        loginPageObhject.addText('Username', Cypress.env('userName'));
        loginPageObhject.addText('Password', Cypress.env('password'));
        loginPageObhject.clickButton('Login');
        loginPageObhject.verifyText('ProductLogo','Products')
    });

    it('user enters incorrect credentials', () => {
        var randomName = faker.name.firstName();
        var randomPassword = faker.name.lastName();
        cy.visit('/');
        loginPageObhject.addText('Username', randomName);
        loginPageObhject.addText('Password',randomPassword);
        loginPageObhject.clickButton('Login');
        loginPageObhject.verifyText('validation','Epic sadface: Username and password do not match any user in this service');
    });

    it('user clicks on login without entering the credentials', () => {
        cy.visit('/');
        loginPageObhject.clickButton('Login');
        loginPageObhject.verifyText('validation','Epic sadface: Username is required');
    });
});
