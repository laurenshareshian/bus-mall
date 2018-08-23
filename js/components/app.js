'use strict';

import html from '../html.js';
import productsApi from '../services/product-api.js';
import ProductSelector from './product-selector.js';
import Header from './header.js';
import Footer from './footer.js';

let template = function() {
    return html`
    <main>
        <div class="grid">
        </div>
    </main>
    `;
};

export default class App {
    constructor() {
        this.products = productsApi.load();
        this.totalClicks = 0;
    }

    render() {
        let dom = template();

        // appends header
        this.main = dom.querySelector('div.grid');
        let header = new Header({});
        this.main.appendChild(header.render());

        // randomly choose three products not immediately previously shown
        let productSelector = new ProductSelector ({
            products: this.products,
            onSelect: (product) => {

                // keep track of total clicks
                this.totalClicks += 1;

                // update product chosen info
                this.products = updateProductInfo(product, this.products);
                // display new products
                productSelector.update(this.products);

                // if 25 votes clear survey and display results
                if(this.totalClicks === 5){
                    productSelector.clear();
                    productSelector.makeTable();
                }
            }
        });

        // display initial survey
        this.main.appendChild(productSelector.render());

        // append footer
        let footer = new Footer({});
        this.main.appendChild(footer.render());

        return dom;
    }
}

function updateProductInfo(product, products){
    for(let i = 0; i < products.length; i++){
        if(products[i]['name'] === product.name) {
            products[i]['numSelected'] += 1;
        }
    }
    return products;
}
