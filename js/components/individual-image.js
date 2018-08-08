'use strict';
import html from '../html.js';

// create the html to display one product image
let template = function(product) {
    let label = product.name;
    let filename = product.filename;
    return html`<div> <img src = '${filename}' alt = '${label}' width = '200'> </div>`;
};

export default class IndividualImage {
    constructor(props) {
        this.product = props.product;
    }

    render() {
        let dom = template(this.product);
        return dom;
    }
}