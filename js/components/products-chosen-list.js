'use strict';
(function(module) {
    let html = module.html;
    let IndividualProduct = module.IndividualProduct;

    // create all the rows in table
    let template = function() {
        let rowstring = '<div class = \'flex-choice-box\'> ';
        rowstring += '</div> <br>';

        return html `${rowstring}`;
    };

    class ProductsChosenList {
        constructor(props) {
            this.products = props.products;
        }

        update(props) {
            let products = props.products;
            let individualProduct = new IndividualProduct({
                individualProduct: individualProduct,
            });

            // remove all data from view
            for(let i = 0; i < 3; i++) {
                this.form.children[i].remove();
            }

            //view three new products
            for(let i = 0; i < products.length; i++) {
                this.updateProduct(products[i]);
            }
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

            for(let i = 0; i < products.length; i++) {
                this.updateProduct(products[i]);
            }
            return dom;
        }
    }

    module.ProductsChosenList = ProductsChosenList;

})(window.module = window.module || {});
