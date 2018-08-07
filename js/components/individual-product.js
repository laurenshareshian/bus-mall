'use strict';
(function(module) {
    let html = module.html;

    // create the html to display one product image
    let template = function(product) {
        let label = product.name;
        let filename = product.filename;
        return html`<div>
        <label> <input type='radio' name = 'image' value='${label}'> <img src = '${filename}' alt = 'bag' width = '200'> </label>  
        </div>`;
    };

    class IndividualProduct {
        constructor(props) {
            this.product = props.product;
        }

        render() {
            let dom = template(this.product);
            return dom;
        }
    }

    module.IndividualProduct = IndividualProduct;

})(window.module = window.module || {});