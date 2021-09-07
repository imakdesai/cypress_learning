const queryHashField = {

    'itemTitle' : {
        fieldName : 'itemTitle',
        fieldLocator : '#item_4_title_link > .inventory_item_name'
    },
    'itemCost' : {
        fieldName : 'itemCost',
        fieldLocator : ':nth-child(1) > .inventory_item_description > .pricebar > .inventory_item_price'
    },
    'description' : {
        fieldName : 'description',
        fieldLocator : '#inventory_container > div > div:nth-child(1) > div.inventory_item_description > div.inventory_item_label > div'
    },
    'addToCart' : {
        fieldName : 'addToCart',
        fieldLocator : '[data-test=add-to-cart-sauce-labs-backpack]'
    },
    'image' : {
        fieldName : 'image',
        fieldLocator : '#item_4_img_link > .inventory_item_img'
    }

    // 'image' : {
    //     fieldName : 'image',
    //     fieldLocator : ' #item_0_img_link > .inventory_item_img'
    // }
}

export class HomePageObject {

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

    verifyImage(fieldName,fieldValue) {
        let property = queryHashField[fieldName].fieldLocator;
        cy.get(property).matchImageSnapshot(fieldValue);
    }
}