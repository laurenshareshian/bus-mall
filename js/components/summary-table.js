/* global updateD3 */

'use strict';

(function(module) {
    let html = module.html;

    let StoreRow = module.StoreRow;
    let Footer = module.Footer;

    // table template
    let template = function() {
        return html`
        <div>
            <table id="table">
                <thead>
                    <tr>
                        <th>Locations</th>
                        <th>6am</th> 
                        <th>7am</th> 
                        <th>8am</th> 
                        <th>9am</th> 
                        <th>10am</th> 
                        <th>11am</th> 
                        <th>12pm</th> 
                        <th>1pm</th> 
                        <th>2pm</th> 
                        <th>3pm</th> 
                        <th>4pm</th> 
                        <th>5pm</th> 
                        <th>6pm</th> 
                        <th>7pm</th> 
                        <th>Location Totals</th> 
                    </tr>
                </thead>
                <tbody id="tbody">
                </tbody>
                <tfoot id ="tfoot">
                </tfoot>
            </table>
        </div>
        `;
    };

    class StoreList {

        constructor(props) {
            this.stores = props.stores;

            // shallow copy to keep track of whether there is a new store added
            this.lastStores = this.stores.slice();

            this.onRemove = props.onRemove;
        }

        update(props) {
            let stores = props.stores;
            let lastStores = this.lastStores;

            // remove all rows
            for(let i = 0; i < lastStores.length; i++) {
                let index = stores.indexOf(lastStores[i]);
                if(index > -1) continue;
                this.tbody.children[i].remove();
            }

            // update table and footer if new store added
            for(let i = 0; i < stores.length; i++) {
                let store = stores[i];

                if(lastStores.includes(store)) continue;

                this.updateStore(store);
                console.log('finished update');
            }
            this.replaceFooter(stores);

            // update footer if store deleted
            if(lastStores.length < this.stores.length){
                this.replaceFooter(stores);
            }

            // update d3 chart
            var element = document.getElementById('chart');
            element.innerHTML = '';
            updateD3(stores);

            // update the "last" know Stores we saw
            this.lastStores = stores.slice();
        }

        // add store row
        updateStore(store) {
            let storeRow = new StoreRow({
                store: store,
                onRemove: this.onRemove
            });
            this.tbody.appendChild(storeRow.render());
        }

        // remove previous footer if needing to update
        replaceFooter() {
            // remove old footer
            this.tfoot.children[0].remove();

            // add new footer
            let stores = this.stores;
            this.tfoot.appendChild(this.updateFooter(stores));
        }

        // update footer
        updateFooter(props) {
            let stores = props;
            let footer = new Footer({
                stores: stores
            });
            return footer.render();
        }

        // render both table body and footer
        render() {
            let dom = template();
            let stores = this.stores;
            this.tbody = dom.querySelector('tbody');
            for(let i = 0; i < stores.length; i++) {
                this.updateStore(stores[i]);
            }

            this.tfoot = dom.querySelector('tfoot');
            this.tfoot.appendChild(this.updateFooter(stores));

            //display d3 chart
            updateD3(stores);
            return dom;
        }

    }

    module.StoreList = StoreList;

})(window.module = window.module || {});