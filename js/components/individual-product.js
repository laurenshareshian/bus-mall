'use strict';
import html from '../html.js';

// create the html to display one product image
let template = function(product) {
    let label = product.name;
    let filename = product.filename;
    return html`<div>
    <label> <input type='radio' name = 'image' value='${label}'> <img src = '${filename}' alt = '${label}' width = '100'> </label>  
    </div>`;
};

export default class IndividualProduct {
    constructor(props) {
        this.product = props.product;
    }

    render() {
        let dom = template(this.product);
        return dom;
    }
}