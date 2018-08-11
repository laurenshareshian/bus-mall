'use strict';

// creates results page with charts and tables

import html from '../html.js';
import ViewsChart from './views-chart.js';
import PercentChart from './percent-chart.js';
import ProductTable from './summary-table.js';
import Methodology from './methodology.js';
import Header from './header.js';
import Footer from './footer.js';

// html template - grid will be used for flex grid
let template = function() {
    return html`
    <main>
        <div class="grid3">
            <div class="percentchart">  </div>
            <div class="numviewschart"> </div>
            <div class="resultstable"> </div>
            <div class="methodology"> </div>
        </div>
    </main>
    `;
};

// prints results data to screen
export default class App {
    render() {
        let dom = template();

        // append header
        this.main = dom.querySelector('div.grid3');
        let header = new Header({});
        this.main.appendChild(header.render());

        // append footer
        this.main = dom.querySelector('div.grid3');
        let footer = new Footer({});
        this.main.appendChild(footer.render());

        // get product data from local storage
        let json = window.localStorage.getItem('data');
        let data;
        if(json && json !== 'undefined') {
            data = JSON.parse(json);
        }

        // create a percent chart of views
        let percentChart = new PercentChart({
            products: data.products
        });

        // create a number of views and selections chart
        let viewsChart = new ViewsChart({
            products: data.products
        });

        // create a summary table
        let productTable = new ProductTable({
            products: data.products
        });

        // display methodology
        let methodology = new Methodology({
        });

        // append these components
        let percent = dom.querySelector('div.percentchart');
        percent.appendChild(percentChart.render());
        let numViews = dom.querySelector('div.numviewschart');
        numViews.appendChild(viewsChart.render());
        let results = dom.querySelector('div.resultstable');
        results.appendChild(productTable.render());
        let meth = dom.querySelector('div.methodology');
        meth.appendChild(methodology.render());

        return dom;
    }
}