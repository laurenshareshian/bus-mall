'use strict';

import html from '../html.js';
import ProductForm from './product-form.js';
import productApi from '../services/product-api.js';
import Header from './header.js';
import Footer from './footer.js';

// grid class will be used for a flex grid
let template = function() {
    return html`
    <main>
        <div class="grid"></div>
    </main>
    `;
};

// prints product data to screen upon page load and form submission
export default class App {
    render() {
        let dom = template();

        // appends header
        this.main = dom.querySelector('div.grid');
        let header = new Header({});
        this.main.appendChild(header.render());

        //load all products
        this.products = productApi.load();

        // keep track of votes submitted
        let totalClicks = 0;

        // randomly choose three products not immediately previously shown
        let subset = [];
        [subset, this.products] = chooseThreeProducts(this.products);

        // create submission form
        let productForm = new ProductForm({
            products: this.products,
            totalClicks: totalClicks,
            subset: subset,

            // if form is submitted
            onSubmit: function(products) {
                //randomly choose another three products
                [subset, products] = chooseThreeProducts(products);

                // display the new products on the page
                productForm.update({
                    products: products,
                    subset: subset
                });

            }
        });
        // add products to screen upon page load
        this.main.appendChild(productForm.render());

        // append footer
        let footer = new Footer({});
        this.main.appendChild(footer.render());
        return dom;
    }
}

//get random sample of array using fisher-yates shuffle method
function getRandomSubarray(arr, size) {
    var shuffled = arr.slice(0), i = arr.length, temp, index;
    while(i--) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(0, size);
}

function chooseThreeProducts(products) {
    // create list of not most recently viewed items
    let notLastViewed = [];
    for(let i = 0; i < products.length; i++){
        if(products[i].lastViewed === false){
            notLastViewed.push(products[i]);
        }
    }
    //choose three items that were not last viewed
    let subset = getRandomSubarray(notLastViewed, 3);

    let indices = [];
    for(let i = 0; i < subset.length; i++){
        indices.push(products.indexOf(subset[i]));
    }

    // reset lastViewed key to clear out previously stored values
    for(let i = 0; i < products.length; i++){
        products[i].lastViewed = false;
    }

    // update lastViewed key to store most recently viewed products
    for(let i = 0; i < indices.length; i++){
        products[indices[i]].numViews += 1;
        products[indices[i]].lastViewed = true;
    }
    return [subset, products];
}