const queryHashField = {

    // 'itemTitle' : {
    //     fieldName : 'itemTitle',
    //     fieldLocator : '#item_4_title_link > .inventory_item_name'
    // },
    'itemTitle' : {
        fieldName : 'itemTitle',
        fieldLocator : '#inventory_container > div > div:nth-child(1) > div.inventory_item_description > div.inventory_item_label'
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
    'remove': {
        fieldName : 'removeFromCard',
        fieldLocator : '[data-test=remove-sauce-labs-backpack]'
    },
    'image' : {
        fieldName : 'image',
        fieldLocator : '#item_4_img_link > .inventory_item_img'
    },
    'shoppingCart' : {
        fieldName : 'shoppingCart',
        fieldLocator : '.shopping_cart_link'
    },
    'ShoppingCartBadge' : {
        fieldName : 'shoppingCartBadge',
        fieldLocator : '.shopping_cart_badge'
    },
    'SortFilter' : {
        fieldName : 'SortFilter',
        fieldLocator : '[data-test="product_sort_container"]',    
    },
    'Hamburger' : {
        fieldName : 'Hamburger',
        fieldLocator : '#menu_button_container > div > div > div.bm-burger-button',    
    },
    'AllItems' : {
        fieldName : 'AllItems',
        fieldLocator : `[id="inventory_sidebar_link"]`,    
    },
    'About' : {
        fieldName : 'About',
        fieldLocator : `[id="about_sidebar_link"]`,    
    },
    'logout' : {
        fieldName : 'logout',
        fieldLocator : `[id="logout_sidebar_link"]`,    
    },
    'resetAppState' : {
        fieldName : 'resetAppState',
        fieldLocator : `[id="reset_sidebar_link"]`,    
    },
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
        cy.get(property).invoke('text').should('contain', fieldValue);
    }

    dropdownselect(fieldName,fieldValue) {
        let property = queryHashField[fieldName].fieldLocator;
        cy.get(property).select(fieldValue);
    }

    verifyImage(fieldName,fieldValue) {
        let property = queryHashField[fieldName].fieldLocator;
        cy.get(property).matchImageSnapshot(fieldValue);
    }
}