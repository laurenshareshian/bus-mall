'use strict';

import html from '../html.js';
import ViewsChart from './views-chart.js';
import PercentChart from './percent-chart.js';
import ProductTable from './summary-table.js';
import Methodology from './methodology.js';

// header of html file with main tag to add things to
let template = function() {
    return html`
    <main>
        <div class='grid3'>
            <div class = 'header'>
                <header>
                        <h1> Market Research </h1>
                </header>
            </div>
            <div class = 'nav'> 
                <nav>  
                    <span class="menu-toggle">Menu</span>
                    <div class="menu-content">
                        <a href="../index.html"> Survey </a>
                        <a href="../results.html"> Results </a>
                        <a href="../products.html"> Products </a>
                    </div>
                </nav>
            </div>
            <div class = 'percentchart'>  </div>
            <div class = 'numviewschart'> </div>
            <div class = 'resultstable'> </div>
            <div class = 'methodology'> </div>
            <div class = 'footer'>
                <footer>
                    &copy; Lauren Shareshian
                </footer>
            </div>
        </div>

    </main>
    `;
};

// prints product data to screen upon page load and form submission
export default class App {
    render() {
        let dom = template();

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