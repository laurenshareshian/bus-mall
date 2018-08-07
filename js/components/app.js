'use strict';

(function(module) {
    let html = module.html;
    let productApi = module.productApi; //loads, adds, removes products
    let ProductList = module.ProductList; //keeps track of products & new additions, in addition to rendering everything
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

            let productList = new ProductList({
                products: products,
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
            main.appendChild(productList.render());

            return dom;
        }
    }

    module.App = App;

})(window.module = window.module || {});