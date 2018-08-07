'use strict';

(function(module) {
    let html = module.html;

    // form structure
    let template = function() {
        let rowstring = '<section id=\'survey\'> <h2>Choose a product! </h2>';
        rowstring += '<form id=\'guess-form\' >';
        rowstring += '<br> <div class = \'button-container\'><button id = \'submit\' type=\'submit\'>';
        rowstring += 'Vote </button></div></form></section>';
        rowstring += '<p id = \'form-error\' class=\'error\'></p>';
        rowstring += '<p id = \'total-clicks\' class=\'total-clicks\'></p';
        return html `${rowstring}`;
    };

    class ProductForm {
        constructor(props) {
            this.onSubmit = props.onSubmit;
            this.totalClicks = props.totalClicks;
            this.productsChosenList = props.productsChosenList;
            this.products = props.products;
        }

        render() {
            let dom = template();
            this.form = dom.querySelector('form');
            let error = dom.querySelector('p.error');
            let clicks = dom.querySelector('p.total-clicks');
            this.form.appendChild(this.productsChosenList.render());

            // listen for form submission
            this.form.addEventListener('submit', (event) => {
                // #1 Prevent default posting of the form
                event.preventDefault();

                // #2 Gather up data
                let elements = this.form.elements;

                let productChosen = elements.image.value;
                console.log(productChosen);

                this.totalClicks += 1;

                // #3 Call action
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

                if(this.totalClicks === 3){
                    alert('3 clicks!');
                }
                console.log('total clicks', this.totalClicks);
            });
            return dom;
        }
    }

    module.ProductForm = ProductForm;

})(window.module = window.module || {});