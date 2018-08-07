'use strict';

(function(module) {
    let html = module.html;
    let productApi = module.productApi; //loads, adds, removes products
    let ProductsChosenList = module.ProductsChosenList; //renders three products
    // let ProductForm = module.ProductForm; //keeps track of form submissions
    // let ProductForm = module.ProductForm; //form functionality

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

            let main = dom.querySelector('main');

            //load all products
            let products = productApi.load();

            // create list of not most recently viewed items
            let notLastViewed = [];
            for(let i = 0; i < products.length; i++){
                if(products[i].lastViewed === false){
                    notLastViewed.push(products[i]);
                }
            }
            //choose three items that were not last viewed
            let subset = getRandomSubarray(notLastViewed, 3);
            console.log(subset);
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

            let productsChosenList = new ProductsChosenList({
                products: subset,
            });

            // let productForm = new ProductForm({
            //     onSubmit: function(product) {
            //         productApi.add(product);
            //         productList.update({
            //             products: products
            //         });
            //     }
            // });
            // adds form and table data to screen
            main.appendChild(productsChosenList.render());
            // main.appendChild(productForm.render());
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