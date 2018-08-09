'use strict';
import html from '../html.js';
import IndividualProduct from './individual-product.js';
import ProductTable from './summary-table.js';

// subset[0] structure
let template = function() {
    return html`
        <div class = 'survey'>
        <figure id ='fig1'> <img src = '${filename}' alt = '${label}' width = '200'> </figure>
        <figure id ='fig2> <img src = '${filename}' alt = '${label}' width = '200'> </figure>
        <figure id ='fig3'> <img src = '${filename}' alt = '${label}' width = '200'> </figure>
        </div>
        <div class = 'tablecontainer'></div>
`;
};

export default class ImageOptions {
    constructor(props) {
        this.onClick = props.onClick;
        this.totalClicks = props.totalClicks;
        this.productsChosenList = props.productsChosenList;
        this.products = props.products;
        this.subset = props.subset;
    }

    updateProduct(product) {
        let individualProduct = new IndividualProduct({
            product: product,
        });
        this.survey.appendChild(individualProduct.render());
    }
    render() {
        let dom = template();

        this.fig1 = dom.querySelector('figure#fig1');
        this.fig2 = dom.querySelector('figure#fig2');
        this.fig3 = dom.querySelector('figure#fig3');

        this.fig1.addEventListener('click', tally);
        this.fig2.addEventListener('click', tally);
        this.fig3.addEventListener('click', tally);
    }
        function tally(event) {
            event.preventDefault();
            productSelected = event.target.src;
            // increment by one
        }

//         this.subset[0].addEventListener('click', (event) => {
//             // #1 Prevent default posting of the subset[0]
//             event.preventDefault();

//             // #2 Gather up data
//             let elements = this.subset[0].elements;
//             let productChosen = elements.image.value;

//             // # Update user preferences
//             console.log(productChosen);
//             this.stores = findIndexOfSelection(productChosen, this.products);

//             // #4 Call action
//             try {
//                 this.onClick(this.products);
//                 // #4 Process success or failure
//                 this.subset[0].reset();
//                 document.activeElement.blur();
//             }
//             catch (err) {
//                 // #4 Process success or failure
//                 console.log(err);
//                 error.textContent = err.message;
//             }
//             // keep track of click max
//             this.totalClicks += 1;
                        
//             console.log('total clicks', this.totalClicks);


//         });
//         return dom;
//     }
// }

function findIndexOfSelection(value, products){
    for(let i = 0; i < products.length; i++){
        if(products[i]['name'] === value) {
            products[i]['numSelected'] += 1;
        }
    }
    return products;
}