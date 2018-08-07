'use strict';

(function(module) {
    let html = module.html;
    let IndividualProduct = module.IndividualProduct;

    // form structure
    let template = function() {
        return html`
        <form id='guess-form' >
        <div class = 'flex-box-choices'></div>
        <div class = 'button-container'>
            <button id = 'submit' type='submit'> Vote </button>
        </div>
        </form>`;
    };

    class ProductForm {
        constructor(props) {
            this.onSubmit = props.onSubmit;
            this.totalClicks = props.totalClicks;
            this.productsChosenList = props.productsChosenList;
            this.products = props.products;
            this.subset = props.subset;
        }

        update(props) {
            // create new product display
            this.products = props.products;
            this.subset = props.subset;

            // remove all data from view
            console.log('flex box children', this.flexBoxChoices.children);
            try {
                while(this.flexBoxChoices.lastElementChild){
                    this.flexBoxChoices.lastElementChild.remove();
                }
                // for(let i = 0; i < 3; i++) {
                //     this.flexBoxChoices.children[i].remove();
                // }
            }
            catch (err) {
                console.log('children', this.flexBoxChoices.children);
                console.log('problem deleting:', err.message);
            }

            //display three new products
            for(let i = 0; i < this.subset.length; i++) {
                this.updateProduct(this.subset[i]);
            }
        }

        updateProduct(product) {
            let individualProduct = new IndividualProduct({
                product: product,
            });
            this.flexBoxChoices.appendChild(individualProduct.render());
        }
        render() {
            let dom = template();
            this.form = dom.querySelector('form');
            let error = dom.querySelector('p.error');
            // this.form.appendChild(this.productsChosenList.render());

            this.flexBoxChoices = dom.querySelector('div.flex-box-choices');
            let subset = this.subset;
            console.log('inside render in product-form', subset);
            for(let i = 0; i < subset.length; i++) {
                this.updateProduct(subset[i]);
            }


            // listen for form submission
            this.form.addEventListener('submit', (event) => {
                // #1 Prevent default posting of the form
                event.preventDefault();

                // #2 Gather up data
                let elements = this.form.elements;
                let productChosen = elements.image.value;

                // # Update user preferences
                console.log(productChosen);
                this.stores = findIndexOfSelection(productChosen, this.products);

                // #4 Call action
                try {
                    this.onSubmit(this.products);
                    // #4 Process success or failure
                    this.form.reset();
                    document.activeElement.blur();
                }
                catch (err) {
                    // #4 Process success or failure
                    console.log(err);
                    error.textContent = err.message;
                }

                // #5 keep track of click max
                this.totalClicks += 1;
                if(this.totalClicks === 3){
                    console.log(this.products);
                    alert('3 clicks!');
                }
                console.log('total clicks', this.totalClicks);
            });
            return dom;
        }
    }

    module.ProductForm = ProductForm;

})(window.module = window.module || {});

function findIndexOfSelection(value, products){
    for(let i = 0; i < products.length; i++){
        if(products[i]['name'] === value) {
            products[i]['numSelected'] += 1;
        }
    }
    return products;
}