'use strict';

// creates the results table

import html from '../html.js';
import ProductRow from './summary-row.js';

let template = function() {
    return html`
        <div class="tableheader"> <h2> Summary Table </h2></div>
        <div class="tablebody">
            <table id="table">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Selections</th> 
                        <th>Views</th> 
                        <th>Percentage Chosen</th> 
                    </tr>
                </thead>
                <tbody id="tbody">
                </tbody>
            </table>
        </div>
    `;
};

export default class ProductTable {
    constructor(props) {
        this.products = props.products;
    }
    render() {
        let dom = template();
        this.tbody = dom.querySelector('tbody');
        for(let i = 0; i < this.products.length; i++) {
            let productRow = new ProductRow({
                product: this.products[i]
            });
            this.tbody.appendChild(productRow.render());
        }

        return dom;
    }
}
