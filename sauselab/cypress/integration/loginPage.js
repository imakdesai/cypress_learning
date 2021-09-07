import { createYield } from "typescript";
import { LoginPageObject } from "../support/page-object/loginPageObject";
const cred = require('./../fixtures/cred.json')
const loginPageObhject = new LoginPageObject();
const faker = require('faker');
var expect = chai.expect;



describe('User logins to the application',() => {
    it('user logs in to the application', () => {
        cy.visit('/');
        loginPageObhject.addText('Username', cred.Login.userName);
        loginPageObhject.addText('Password', cred.Login.password);
        loginPageObhject.clickButton('Login')
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

    it.only('user enters incorrect credentials', () => {
        var randomName = '';
        var randomPassword = '';
        cy.visit('/');
        loginPageObhject.addText('Username', randomName);
        loginPageObhject.addText('Password',randomPassword);
        loginPageObhject.clickButton('Login');
        loginPageObhject.verifyText('validation','Epic sadface: Username and password do not match any user in this service');
    });
})