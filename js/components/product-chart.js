/* global Chart */

import html from '/js/html.js';

let template = function() {
    return html`
        <h2>Summary Chart</h2>
        <div class="chart-container">
            <canvas width="400"></canvas>
        </div>
    `;
};

export default class ProductChart {
    constructor(props) {
        this.products = props.products;
    }

    render() {
        let dom = template();

        const canvas = dom.querySelector('canvas');
        const ctx = canvas.getContext('2d');

        let labels = [];
        let data = [];

        for(let i = 0; i < this.products.length; i++){
            let product = this.products[i];
            if(product.numViews !== 0){
                labels.push(product.name);
                data.push(product.numSelected / product.numViews);
            }
        }

        this.chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: '# of Views',
                    data: data,
                    backgroundColor: 'rgba(255, 86, 86, 0.2)'
                }]
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
