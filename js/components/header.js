/* exported Header */
'use strict';

import html from '../html.js';

// header of html file with main tag to add things to
let template = function() {
    return html`
        <div class ="header">
            <header>
                    <h1> Market Research </h1>
            </header>
        </div>
        <div class ="nav"> 
            <nav>  
                <span class="menu-toggle">Menu</span>
                <div class="menu-content">
                    <a href="../index.html"> Survey </a>
                    <a href="../results.html"> Results </a>
                    <a href="../products.html"> Products </a>
                </div>
            </nav>
        </div>
    `;
};

export default class Header {

    render() {
        let dom = template();
        return dom;
    }
}
