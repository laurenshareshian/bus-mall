'use strict';

import html from '../html.js';
import IndividualImage from './individual-image.js';
// header of html file with main tag to add things to
let template = function() {
    return html`
    <main>
        <div class='productgrid'>
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
            <div class = 'products'>
            </div>
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

        // finds where to place info inside html
        this.main = dom.querySelector('div.products');
        //load all products
        // let products = data.products;

        let data;
        let json = window.localStorage.getItem('data');

        if(json && json !== 'undefined') {
            data = JSON.parse(json);
        }
        let products = data.products;

        for(let i = 0; i < products.length; i++) {
            let individualImage = new IndividualImage({
                product: products[i]
            });
            this.main.appendChild(individualImage.render());
        }

        return dom;
    }
}