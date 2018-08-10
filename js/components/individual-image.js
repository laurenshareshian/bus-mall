'use strict';
import html from '../html.js';

// create the html to display one product image for use on products page

let template = function(product) {
    let label = product.name;
    let filename = product.filename;
    return html`<figure> <img src="${filename}" alt="${label}" width="200"> </figure>`;
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