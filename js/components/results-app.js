'use strict';

import html from '../html.js';
import ViewsChart from './views-chart.js';
import PercentChart from './percent-chart.js';
import ProductTable from './summary-table.js';
import Methodology from './methodology.js';

// header of html file with ul tag to add things to
let template = function() {
    return html`
    <ul></ul>
    `;
};

// prints product data to screen upon page load and form submission
export default class App {
    render() {
        let dom = template();

        // finds where to place info inside html
        this.ul = dom.querySelector('ul');
        //load all products
        // let products = data.products;

        let data;
        let json = window.localStorage.getItem('data');

        if(json && json !== 'undefined') {
            data = JSON.parse(json);
        }
        console.log(data.products);

        let percentChart = new PercentChart({
            products: data.products
        });
        let viewsChart = new ViewsChart({
            products: data.products
        });

        let productTable = new ProductTable({
            products: data.products
        });
        let methodology = new Methodology({
        });

        this.ul.appendChild(productTable.render());
        this.ul.appendChild(percentChart.render());
        this.ul.appendChild(viewsChart.render());
        this.ul.appendChild(methodology.render());
        return dom;
    }
}