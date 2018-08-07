/* global createHourlyInfo */
'use strict';

(function(module) {
    let html = module.html;

    // form structure
    let template = function() {
        return html`        
        <section id='survey'>
        <h2>Choose a product! </h2></div>
        <form id='add-store'>
            <div class = 'flex-choices'>
            </div>
        </form><br>
        <div class = 'button'>
            <button id='submit'> Vote </button>
        </div>
    </section>
        `;
    };

    class StoreForm {
        constructor(props) {
            this.onAdd = props.onAdd;
        }

        render() {
            let dom = template();

            let form = dom.querySelector('form');
            let error = dom.querySelector('p.error');

            // listen for form submission
            form.addEventListener('submit', (event) => {
                // #1 Prevent default posting of the form
                event.preventDefault();

                // #2 Gather up data
                let elements = form.elements;

                let store = {
                    location: elements.location.value,
                    max_cust: elements.max.value,
                    min_cust: elements.min.value,
                    avg_cookies: elements.avg.value,
                    key: elements.location.value
                };
                // give the store hourly cookie values
                store = createHourlyInfo(store);

                // #3 Call action
                try {
                    this.onAdd(store);
                    // #4 Process success or failure
                    form.reset();
                    document.activeElement.blur();
                }
                catch (err) {
                    // #4 Process success or failure
                    console.log(err);
                    error.textContent = err.message;
                }

            });

            return dom;
        }
    }

    module.StoreForm = StoreForm;

})(window.module = window.module || {});