
const queryHashField = {
    'inventoryName': {
        fieldName: 'inventoryName',
        fieldLocator: '.inventory_item_name'
    },
    'inventoryDesc': {
        fieldName: 'inventoryDesc',
        fieldLocator: '.inventory_item_desc'
    },
    'inventoryPrice': {
        fieldName: 'inventoryPrice',
        fieldLocator: '.inventory_item_price'
    },
    'inventoryquntity': {
        fieldName: 'inventoryQuntity',
        fieldLocator: '.cart_quantity'
    },
    'removeQuantity': {
        fieldName: 'removeQuantity',
        fieldLocator: '[data-test=remove-sauce-labs-backpack]'
    },
    'ContinueShopping': {
        fieldName: 'continueShopping',
        fieldLocator: '[data-test=continue-shopping]'
    },
    'checkout': {
        fieldName: 'checkout',
        fieldLocator: '[data-test=checkout]'
    }
}


export class ShoppingCartPageObject {
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
        cy.get(property).invoke('text').should('contain', fieldValue);
    }
}