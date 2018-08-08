'use strict';

import html from '../html.js';
import ViewsChart from './views-chart.js';
import PercentChart from './percent-chart.js';
import data from '../services/data.js';
// header of html file with main tag to add things to
let template = function() {
    return html`
    <header>
        <h1> Market Research </h1>
    </header>   
    <section id='content-area'>
    <a href="../index.html"> Survey </a>
    <main></main>
    </section>
    `;
};

// prints product data to screen upon page load and form submission
export default class App {
    render() {
        let dom = template();

        // finds where to place info inside html
        this.main = dom.querySelector('main');
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
        this.main.appendChild(percentChart.render());
        this.main.appendChild(viewsChart.render());

        return dom;
    }
}