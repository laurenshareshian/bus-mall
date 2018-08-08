'use strict';

import html from '../html.js';
import IndividualImage from './individual-image.js';
// header of html file with main tag to add things to
let template = function() {
    return html`
    <header>
        <h1> Market Research </h1>
    </header>   
    <section id='content-area'>
    <a href="../index.html"> Survey </a>
    <a href="../products.html"> Products </a>
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