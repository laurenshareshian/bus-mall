'use strict';
(function(module) {
    let html = module.html;

    // create the html to display one product image
    let template = function(product) {
        let label = product.name;
        let filename = product.filename;
        let rowstring = '<div><label> <input type=\'radio\' name = \'image\' value=\'';
        rowstring += label;
        rowstring += '\'> <img src = \'';
        rowstring += filename;
        rowstring += '\' alt = \'';
        rowstring += label;
        rowstring += ' \' width = \'200\'> </label> </div>';
        return html `${rowstring}`;
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