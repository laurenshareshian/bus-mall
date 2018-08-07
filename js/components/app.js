'use strict';

(function(module) {
    let html = module.html;
    let productApi = module.productApi; //loads, adds, removes products
    let ProductsChosenList = module.ProductsChosenList; //keeps track of products & new additions, in addition to rendering everything
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

            let products = productApi.load();

            let subset = getRandomSubarray(products, 3);

            let productsChosenList = new ProductsChosenList({
                products: subset,
            });

            // let productForm = new ProductForm({
            //     onAdd: function(product) {
            //         productApi.add(product);
            //         productList.update({
            //             products: products
            //         });
            //     }
            // });
            // adds form and table data to screen
            // main.appendChild(productForm.render());
            main.appendChild(productsChosenList.render());

            return dom;
        }
    }

    module.App = App;

})(window.module = window.module || {});

//get random sample of array using fisher-yates shuffle method
function getRandomSubarray(arr, size) {
    var shuffled = arr.slice(0), i = arr.length, temp, index;
    while (i--) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(0, size);
}