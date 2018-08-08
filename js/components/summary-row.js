'use strict';
import html from '../html.js';

// create all the rows in table
let template = function(product) {
    return html`
    <tr>
        <td> ${product.name} </td>
        <td> ${product.numSelected} </td>
        <td> ${product.numViews} </td>
        <td> ${product.numSelected / product.numViews} </td> 
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