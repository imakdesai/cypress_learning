
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
    'checkout': {
        fieldName: 'checkout',
        fieldLocator: '[data-test=checkout]'
    },
    'quantity' : {
        fieldName: 'quantity',
        fieldLocator: `[data-test="item-quantity"]`
    },
    'itemCost' : {
        fieldName : 'itemCost',
        fieldLocator : `[data-test="inventory-item-price"]`
    },
    'removeSuceLabOneSie' : {
        fieldName : 'removeOne_sie',
        fieldLocator : `[data-test="remove-sauce-labs-onesie"]`,  
    },
    'removeFleeceJacket' : {
        fieldName : 'FleeceJacket',
        fieldLocator : `[data-test="remove-sauce-labs-fleece-jacket"]`,  
    },
    'firstName': {
        fieldName : 'firstName',
        fieldLocator : `[data-test="firstName"]`,  
    },
    'lastName': {
        fieldName : 'lastName',
        fieldLocator : `[data-test="lastName"]`,  
    },
    'postalCode': {
        fieldName : 'postalCode',
        fieldLocator : `[data-test="postalCode"]`,  
    },
    'continueButton': {
        fieldName : 'continueButton',
        fieldLocator : `[data-test="continue"]`,  
    },
    'addToCart' : {
        fieldName : 'addToCart',
        fieldLocator : `[data-test="shopping-cart-badge"]`
    },
    'titlePage' : {
        fieldName: 'titlePage',
        fieldLocator : `[data-test="title"]`
    },
    'itemSubTotal': {
        fieldName : 'itemSubTotal',
        fieldLocator : `[data-test="subtotal-label"]`,  
    },
    'finishButton': {
        fieldName : 'finishButton',
        fieldLocator : `[data-test="finish"]`,  
    },
    'thankYouOrder' : {
        fieldName : 'thankYouOrder',
        fieldLocator : `[data-test="complete-header"]`,  
    }
}


export class ShoppingCartPageObject {

    addText(fieldName, fieldValue) {
        cy.wait(200);
        let property = queryHashField[fieldName].fieldLocator;
        cy.get(property).type(fieldValue , { delay: 100 });
        return this;
    }

    clickButton(fieldName) {
        cy.wait(500);
        let property = queryHashField[fieldName].fieldLocator;
        cy.get(property).click({force:true});

        return this;
    }

    verifyText(fieldName, fieldValue) {
        let property = queryHashField[fieldName].fieldLocator;
        cy.get(property).invoke('text').should('contain', fieldValue);

        return this;
    }
    assertFleeceJacket(fieldName, fieldValue) {
        let property = queryHashField[fieldName].fieldLocator;
        cy.get(property).first().invoke('text').should('contain', fieldValue);  
        return this;
      }
    
      assertOneSie(fieldName, fieldValue) {
        let property = queryHashField[fieldName].fieldLocator;
        cy.get(property).last().invoke('text').should('eq', fieldValue);  

        return this;
      }
  scrollIntoView(fieldName) {
    let property = queryHashField[fieldName].fieldLocator;
    cy.get(property).scrollIntoView();
  }
}
