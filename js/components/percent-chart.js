/* global Chart */

import html from '/js/html.js';

let template = function() {
    return html`
        <h2>Percentage Chosen Chart</h2>
            <div class="chart-container">
                <canvas></canvas>
            </div>
    `;
};

export default class PercentChart {
    constructor(props) {
        this.products = props.products;
    }

    render() {
        let dom = template();

        const canvas = dom.querySelector('canvas');
        const ctx = canvas.getContext('2d');

        // create data to be displayed in chart
        let data = { labels: [], numViews: [], percentChosen: [], numSelected: [] };

        for(let i = 0; i < this.products.length; i++){
            let product = this.products[i];
            if(product.numViews !== 0){ //take care of division by zero
                data.labels.push(product.name);
                data.percentChosen.push(product.numSelected / product.numViews);
            }
            else {
                data.labels.push(product.name);
                data.percentChosen.push(0);
            }
        }

        this.chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: data.labels,
                datasets: [
                    {
                        label: 'Percent Chosen',
                        backgroundColor: 'rgba(255, 206, 86, 0.2)',
                        data: data.percentChosen
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
