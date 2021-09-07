import { createYield } from 'typescript';

const credentials = require('./../../fixtures/cred.json');

const queryHashField = {
    'Username': {
        fieldName: 'Username',
        fieldLocator: `[name="user-name"]`
    },
    'Password': {
        fieldName: 'Password',
        fieldLocator: `[name="password"]`
    },
    'Login': {
        fieldName: 'Login',
        fieldLocator: `[name="login-button"]`
    },
    'validation' : {
        fieldName : 'validation',
        fieldLocator : `[data-test=error]`
    }

}

export class LoginPageObject {

    addText(fieldName, fieldValue) {
        let property = queryHashField[fieldName].fieldLocator;
        cy.get(property).type(fieldValue);
    }

    clickButton(fieldName) {
        let property = queryHashField[fieldName].fieldLocator;
        cy.get(property).click();
    }

    verifyText(fieldName, fieldValue) {
        let property = queryHashField[fieldName].fieldLocator;
        cy.get(property).invoke('text').should('contain', fieldValue )
    }
}