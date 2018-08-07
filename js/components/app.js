'use strict';

(function(module) {
    let html = module.html;
    let productApi = module.productApi; //loads, adds, removes products
    let ProductsChosenList = module.ProductsChosenList; //renders three products
    let ProductForm = module.ProductForm; //keeps track of form submissions

    // header of html file
    let template = function() {
        return html`
            <main></main>
        `;
    };

    // prints table data to screen and checks for updates to table
    class App {
        render() {
            let dom = template();

            this.main = dom.querySelector('main');

            //load all products
            let products = productApi.load();

            // keep track of votes submitted
            let totalClicks = 0;

            // choose three products
            let subset = [];
            [subset, products] = chooseThreeProducts(products);

            // display these products
            let productsChosenList = new ProductsChosenList({
                products: subset
            });

            // create submission form
            let productForm = new ProductForm({
                products: products,
                totalClicks: totalClicks,
                productsChosenList: productsChosenList,
                onSubmit: function(products) {

                    [subset, products] = chooseThreeProducts(products);
                    this.productsChosenList = new ProductsChosenList({
                        products: subset
                    });
                    while(this.form.lastElementChild) {
                        console.log(this.form.lastElementChild);
                        this.form.lastElementChild.remove();
                    }

                    this.form.appendChild(this.productsChosenList.render());

                }
            });

            // adds form and table data to screen
            this.main.appendChild(productForm.render());
            // main.appendChild(productsChosenList.render());
            return dom;
        }
    }

    module.App = App;

})(window.module = window.module || {});

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