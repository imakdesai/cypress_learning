const queryHashField = {
  itemCost: {
    fieldName: 'itemCost',
    fieldLocator: `[data-test="inventory-item-price"]`,
  },
  description: {
    fieldName: 'description',
    fieldLocator: `[data-test="inventory-item-description"]`,
  },
  addToCart: {
    fieldName: 'addToCart',
    fieldLocator: `[data-test="shopping-cart-badge"]`,
  },
  remove: {
    fieldName: 'removeFromCard',
    fieldLocator: '[data-test=remove-sauce-labs-backpack]',
  },
  SortFilter: {
    fieldName: 'SortFilter',
    fieldLocator: '[data-test="product-sort-container"]',
  },
  Hamburger: {
    fieldName: 'Hamburger',
    fieldLocator: `[id="react-burger-menu-btn"]`,
  },
  AllItems: {
    fieldName: 'AllItems',
    fieldLocator: `[data-test="inventory-sidebar-link"]`,
  },
  About: {
    fieldName: 'About',
    fieldLocator: `[id="about_sidebar_link"]`,
  },
  logout: {
    fieldName: 'logout',
    fieldLocator: `[data-test="logout-sidebar-link"]`,
  },
  resetAppState: {
    fieldName: 'resetAppState',
    fieldLocator: `[data-test="reset-sidebar-link"]`,
  },
  addToCartFleeceJacket: {
    fieldName: 'Feelce_jacket',
    fieldLocator: `[data-test="add-to-cart-sauce-labs-fleece-jacket"]`,
  },
  addToCartBikeLight: {
    fieldName: 'addToCartBikeLight',
    fieldLocator: `[data-test="add-to-cart-sauce-labs-bike-light"]`,
  },

  addToCartBoltTshirt: {
    fieldName: 'addToCartBoltTshirt',
    fieldLocator: `[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]`,
  },

  addToCartBackPack: {
    fieldName: 'addToCartBackPack',
    fieldLocator: `[data-test="add-to-cart-sauce-labs-backpack"]`,
  },
  addToCartSauceLabOneSie: {
    fieldName: 'One_sie',
    fieldLocator: `[data-test="add-to-cart-sauce-labs-onesie"]`,
  },
  removeSuceLabOneSie: {
    fieldName: 'removeOne_sie',
    fieldLocator: `[data-test="remove-sauce-labs-onesie"]`,
  },
  removeFleeceJacket: {
    fieldName: 'FleeceJacket',
    fieldLocator: `[data-test="remove-sauce-labs-fleece-jacket"]`,
  },
  removeSouceBoltTshirt: {
    fieldName: 'ouceBoltTshirt',
    fieldLocator: `[data-test="remove-sauce-labs-bolt-t-shirt"]`,
  },
  removeSouceBackPack: {
    fieldName: 'removeBackPack',
    fieldLocator: `[data-test="remove-sauce-labs-backpack"]`,
  },
  twitter: {
    fieldName: 'twitter',
    fieldLocator: `[data-test="social-twitter"]`,
  },
  facebook: {
    fieldName: 'facebook',
    fieldLocator: `[data-test="social-facebook"]`,
  },
  linkedin: {
    fieldName: 'linkedin',
    fieldLocator: `[data-test="social-linkedin"]`,
  },
};

export class HomePageObject {
  addText(fieldName, fieldValue) {
    let property = queryHashField[fieldName].fieldLocator;
    cy.get(property).type(fieldValue);
  }

  clickButton(fieldName) {
    cy.wait(500);
    let property = queryHashField[fieldName].fieldLocator;
    cy.get(property).click();

    return this;
  }

  clickLinks(fieldName) {
    cy.wait(500);
    let property = queryHashField[fieldName].fieldLocator;
    cy.get(property)
      .click()
      .then(() => {
        // Focus back on the original window
        cy.window().then((win) => {
          win.focus();
        });
      });
  }

  verifyText(fieldName, fieldValue) {
    cy.wait(200);
    let property = queryHashField[fieldName].fieldLocator;
    cy.get(property).invoke('text').should('contain', fieldValue);
  }

  scrollIntoView(fieldName) {
    let property = queryHashField[fieldName].fieldLocator;
    cy.get(property).scrollIntoView();
  }

  dropdownselect(fieldName, fieldValue) {
    let property = queryHashField[fieldName].fieldLocator;
    cy.get(property).select(fieldValue);
  }

  verifyImage(fieldName, fieldValue) {
    let property = queryHashField[fieldName].fieldLocator;
    cy.get(property).matchImageSnapshot(fieldValue);
  }

  getPriceForAll(fieldName) {
    const prices = [];
    let property = queryHashField[fieldName].fieldLocator;
    cy.get(property).each(($priceElement) => {
      prices.push($priceElement.text().trim());
      return;
    });
    return prices;
  }

  getPriceForOneSie(fieldName) {
    let property = queryHashField[fieldName].fieldLocator;
    cy.get(property)
      .contains('Sauce Labs Onesie')
      .parents('.inventory_item')
      .find(`[data-test="inventory-item-price"]`)
      .first()
      .wait(400)
      .invoke('text')

      .as('sauceLabspriceText');
  }

  getPriceForFliceeJacket(fieldName) {
    let property = queryHashField[fieldName].fieldLocator;
    return cy
      .get(property)
      .contains('Sauce Labs Fleece Jacket')
      .get(`[data-test="inventory-item-price"]`)
      .last()
      .wait(400)
      .invoke('text')
      .as('FleecePrice');
  }

  convertPricesToNumbers (priceArray) {
    return priceArray.map(price => parseFloat(price.replace('$', '')));
  };

  isAscending (arr) {
    return arr.every((value, index, array) => {
      return index === 0 || array[index - 1] <= value;
    });
  };

  checkAscending(arr) {
    const numericPrices = this.convertPricesToNumbers(arr);

    cy.wrap(numericPrices).should(prices => {
      expect(this.isAscending(prices)).to.be.true;
    });
  }

  elementShouldNotExisit(fieldName) {
    let property = queryHashField[fieldName].fieldLocator;
    cy.get(property).should('not.exist');

    return this;
  }

  elementShouldExist(fieldName) {
    let property = queryHashField[fieldName].fieldLocator;
    cy.get(property).should('exist');

    return this;
  }

  assertFleeceJacket(fieldName, fieldValue) {
    cy.wait(400);
    let property = queryHashField[fieldName].fieldLocator;
    cy.get(property).last().invoke('text').should('eq', fieldValue);

    return this;
  }

  assertOneSie(fieldName, fieldValue) {
    cy.wait(400);
    let property = queryHashField[fieldName].fieldLocator;
    cy.get(property).first().invoke('text').should('eq', fieldValue);
    return this;
  }

  refreshBrowser() {
    cy.reload();
    return this;
  }

  scrollToBotton() {}
}
