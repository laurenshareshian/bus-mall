'use strict';

// creates page that displays products

import html from '../html.js';
import IndividualImage from './individual-image.js';
import Header from './header.js';
import Footer from './footer.js';

// header of html file with grid2 to create a flex grid
let template = function() {
    return html`
    <main>
        <div class="grid2">
            <div class="products"></div>
        </div>
    </main>
    `;
};

// prints product data to screen upon page load
export default class App {
    render() {
        let dom = template();

        // append header
        this.main = dom.querySelector('div.grid2');
        let header = new Header({});
        this.main.appendChild(header.render());

        // append footer
        this.main = dom.querySelector('div.grid2');
        let footer = new Footer({});
        this.main.appendChild(footer.render());

        // finds where to place product images inside html
        this.main = dom.querySelector('div.products');

        // take in product data stored in local storage
        let data;
        let json = window.localStorage.getItem('data');

        if(json && json !== 'undefined') {
            data = JSON.parse(json);
        }
        let products = data.products;

        // display images on screen
        for(let i = 0; i < products.length; i++) {
            let individualImage = new IndividualImage({
                product: products[i]
            });
            this.main.appendChild(individualImage.render());
        }

        return dom;
    }
}