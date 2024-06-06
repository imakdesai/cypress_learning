
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
    },
}

export class LoginPageObject {

    addText(fieldName, fieldValue) {
        let property = queryHashField[fieldName].fieldLocator;
        cy.get(property).type(fieldValue, {delay : 200});
    }

    clickButton(fieldName) {
        cy.wait(500);
        let property = queryHashField[fieldName].fieldLocator;
        cy.get(property).click();
    }

    verifyText(fieldName, fieldValue) {
        let property = queryHashField[fieldName].fieldLocator;
        cy.get(property).invoke('text').should('contain', fieldValue )
    }

    loginFunction(username, password) {
        cy.visit('/');
        this.addText('Username',username);
        this.addText('Password',password);
        this.clickButton('Login');
    }
}

