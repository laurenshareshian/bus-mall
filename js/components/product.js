'use strict';
(function(module) {
    let html = module.html;

    // create all the rows in table
    let template = function(products) {
        let rowstring = `<section id='survey'>`
        + `<h2>Choose a product! </h2></div>`
        + `<form id='add-store'>`
        + `<div class = 'flex-choices'>`
        + `</div>`
        + `</form><br>`;
        for(let i = 0; i < products.length; i++){
            let label = products[i].name;
            let filename = products[i].filename;
            rowstring += `<div class = '${label}'> <img src='${filename}' alt='${label}' width = '200'>`;
            rowstring += `<input type='radio' name='${label}'></div>`;
        }
        rowstring += `<div class = 'button'><button id='submit'> Vote </button></div></section>`;
        console.log(rowstring);
        return html `${rowstring}`;
    };

    class ProductList {
        constructor(props) {
            this.products = props.products;
        }

        chooseThree(){
            
        }
        render() {
            // create new product display
            let dom = template(this.products);
            return dom;
        }

    }

    module.ProductList = ProductList;

})(window.module = window.module || {});

//get a random number (inclusive)
function getRandInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
