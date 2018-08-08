'use strict';

import html from '../html.js';
import IndividualProduct from './individual-product.js';

// create the flex box that puts the three images side by side
let template = function() {
    return html`<div class = 'flex-box-choices'></div>`;
};

// takes in three products to display and renders them
export default class ProductsChosenList {
    constructor(props) {
        this.products = props.products; // three chosen products
    }

    // when user submits form, update display
    update() {
        // create new product display
        let products = this.products;

        // remove all data from view
        try {
            for(let i = 0; i < 3; i++) {
                this.flexBoxChoices.children[i].remove();
            }
        }
        catch (err) {
            console.log('problem deleting:', err.message);
        }

        //display three new products
        for(let i = 0; i < products.length; i++) {
            this.updateProduct(products[i]);
        }
    }

    updateProduct(product) {
        let individualProduct = new IndividualProduct({
            product: product,
        });
        this.flexBoxChoices.appendChild(individualProduct.render());
    }

    // when page first loads display three images
    render() {
        // create new product display
        let dom = template();
        this.flexBoxChoices = dom.querySelector('div.flex-box-choices');
        let products = this.products;

        for(let i = 0; i < products.length; i++) {
            this.updateProduct(products[i]);
        }
        return dom;
    }
}