import html from '../html.js';
import Product from './product.js';
import ProductTable from './summary-table.js';

// create a template to add in survey and table results

let template = function() {
    return html`
    <div class="survey">
        <div class="surveyheader" id="surveyheader"><h2> Survey </h2> </div>
        <div class="surveybody">        
            <div class="flex-box-choices"></div> 
        </div>
        <div class="message" id="message"></div>
    </div>
    <div class="tablecontainer" id="tablecontainer"> <h2> Results </h2> </div>

    `;
};

// displays three random products and results table (at 25 clicks)

export default class ProductSelector {
    constructor(props) {
        this.products = props.products;
        this.onSelect = props.onSelect;
    }

    update(products) {
        this.products = products;

        while(this.survey.lastElementChild) {
            this.survey.lastElementChild.remove();
        }

        let subset = [];
        [subset, this.products] = chooseThreeProducts(this.products);
        this.updateProducts(subset);
    }

    updateProducts(subset) {
        for(let i = 0; i < subset.length; i++) {
            let product = new Product({
                product: subset[i],
                onSelect: this.onSelect
            });
            this.survey.appendChild(product.render());
        }
    }

    // clear survey at 25 clicks
    clear() {
        while(this.survey.lastElementChild){
            this.survey.lastElementChild.remove();
        }

        var element = document.getElementById('message');
        element.innerHTML = '25 Clicks! View your results on the results page.';
    }

    // create summary table
    makeTable(){
        let element = document.getElementById('tablecontainer');
        element.innerHTML = '';

        // display results table instead
        let productTable = new ProductTable({
            products: this.products
        });

        this.table.appendChild(productTable.render());
    }

    render() {
        let dom = template();
        this.survey = dom.querySelector('div.flex-box-choices');
        let subset = [];
        [subset, this.products] = chooseThreeProducts(this.products);
        this.updateProducts(subset);

        this.table = dom.querySelector('div.tablecontainer');

        return dom;
    }
}

//get random sample of array using fisher-yates shuffle method
function getRandomSubarray(arr, size) {
    var shuffled = arr.slice(0), i = arr.length, temp, index;
    while(i--) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(0, size);
}

function chooseThreeProducts(products) {
    // create list of not most recently viewed items
    let notLastViewed = [];
    for(let i = 0; i < products.length; i++){
        if(products[i].lastViewed === false){
            notLastViewed.push(products[i]);
        }
    }
    //choose three items that were not last viewed
    let subset = getRandomSubarray(notLastViewed, 3);

    let indices = [];
    for(let i = 0; i < subset.length; i++){
        indices.push(products.indexOf(subset[i]));
    }

    // reset lastViewed key to clear out previously stored values
    for(let i = 0; i < products.length; i++){
        products[i].lastViewed = false;
    }

    // update lastViewed key to store most recently viewed products
    for(let i = 0; i < indices.length; i++){
        products[indices[i]].numViews += 1;
        products[indices[i]].lastViewed = true;
    }
    return [subset, products];
}
