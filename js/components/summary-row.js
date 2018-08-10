'use strict';

// creates each row in the results table
import html from '../html.js';

let template = function(product) {
    let percent = product.numSelected / product.numViews;
    return html`
    <tr>
        <td> ${product.name} </td>
        <td> ${product.numSelected} </td>
        <td> ${product.numViews} </td>
        <td> ${percent.toFixed(2)} </td> 
    </tr>`;
};

export default class ProductRow {
    constructor(props) {
        this.product = props.product;
    }
    render() {
        let dom = template(this.product);
        return dom;
    }
}