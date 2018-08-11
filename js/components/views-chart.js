/* global Chart */

// create chart displaying percentages for use on results page

import html from '/js/html.js';

let template = function() {
    return html`
        <h2>Number of Views & Selections Chart</h2>
        <div class="chart-container">
            <canvas></canvas>
        </div>
    `;
};

export default class ViewsChart {
    constructor(props) {
        this.products = props.products;
    }

    render() {
        let dom = template();

        const canvas = dom.querySelector('canvas');
        const ctx = canvas.getContext('2d');

        // create data to be displayed in chart
        let data = { labels: [], numViews: [], numSelected: [] };

        for(let i = 0; i < this.products.length; i++){
            let product = this.products[i];
            data.labels.push(product.name);
            data.numViews.push(product.numViews);
            data.numSelected.push(product.numSelected);
        }

        // create chart using chart.js
        this.chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: data.labels,
                datasets: [
                    {
                        label: 'Times Viewed',
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        data: data.numViews
                    },
                    {
                        label: 'Times Chosen',
                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
                        data: data.numSelected
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
        });

        return dom;
    }
}
