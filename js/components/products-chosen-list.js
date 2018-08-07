'use strict';
(function(module) {
    let html = module.html;
    let IndividualProduct = module.IndividualProduct;

    // create all the rows in table
    let template = function() {
        let rowstring = '<section id=\'survey\'> <h2>Choose a product! </h2>';
        rowstring += '<form id=\'guess-form\' > <div class = \'flex-choice-box\'> ';
        rowstring += '<br></div>';
        rowstring += '<div class = \'button-container\'><button id = \'submit\' type=\'submit\'>';
        rowstring += 'Vote </button></div></form></section>';
        rowstring += '<p id = "form-error" class="error"></p>';
        console.log(rowstring);
        return html `${rowstring}`;
    };

    class ProductsChosenList {
        constructor(props) {
            this.products = props.products;
        }

        update(props) {
            // let products = props.products;
            // let individualProduct = new IndividualProduct({
            //     individualProduct: individualProduct,
            // });

            // // remove all rows
            // for(let i = 0; i < products.length; i++) {
            //     let index = stores.indexOf(stores[i]);
            //     if(index > -1) continue;
            //     dom.querySelector('section').children[i].remove();
            // }
        }

        updateProduct(product) {
            let individualProduct = new IndividualProduct({
                product: product,
            });
            this.form.appendChild(individualProduct.render());
        }

        render() {
            // create new product display
            let dom = template();
            this.form = dom.querySelector('div.flex-choice-box');
            let products = this.products;

            console.log('inside render', dom);
            for(let i = 0; i < products.length; i++) {
                this.updateProduct(products[i]);
            }
            return dom;
        }
    }

    module.ProductsChosenList = ProductsChosenList;

})(window.module = window.module || {});
