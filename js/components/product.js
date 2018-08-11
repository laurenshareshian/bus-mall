'use strict';
import html from '../html.js';

// create the html to display one product image for use on products page

let template = function(product) {
    return html`
        <div class="image">
        <figure> <img src="${product.filename}" alt="${product.name}" width="200"> </figure>
        </div>
    `;
};

export default class Product {
    constructor(props) {
        this.product = props.product;
        this.onSelect = props.onSelect;
    }

    render() {
        let dom = template(this.product);

        this.div = dom.querySelector('div.image');
        this.div.addEventListener('click', () => {
            this.onSelect(this.product);
        });

        return dom;
    }
}