'use strict';

import html from '../html.js';
import ProductForm from './product-form.js';
import productApi from '../services/product-api.js';

// header of html file with main tag to add things to
let template = function() {
    return html`
    <header>
        <h1> Market Research </h1>
    </header>   
    <section id='content-area'>
    <main></main>
    </section>
    `;
};

// prints product data to screen upon page load and form submission
export default class App {
    render() {
        let dom = template();

        // finds where to place info inside html
        this.main = dom.querySelector('main');
        console.log('main on render', this.main);
        //load all products
        let products = productApi.load();

        // keep track of votes submitted
        let totalClicks = 0;

        // randomly choose three products not just shown
        let subset = [];
        [subset, products] = chooseThreeProducts(products);

        // create submission form
        let productForm = new ProductForm({
            products: products,
            totalClicks: totalClicks,
            subset: subset,

            // if form is submitted
            onSubmit: function(products) {
                //randomly choose another three products and display them
                [subset, products] = chooseThreeProducts(products);

                // display the new products on the page
                productForm.update({
                    products: products,
                    subset: subset
                });

            }
        });
        // adds products to screen upon page load
        this.main.appendChild(productForm.render());
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

    //update lastViewed key to store most recent ones
    for(let i = 0; i < indices.length; i++){
        products[indices[i]].numViews += 1;
        products[indices[i]].lastViewed = true;
    }
    return [subset, products];
}