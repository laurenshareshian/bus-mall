'use strict';
(function(module) {
    let html = module.html;

    // create all the rows in table
    let template = function(store) {

    // create store label (column 0)
        let rowString = ' <tr> <td> <button>ⓧ</button>' + store.location + '</td>';

        // create column entries for store cookie hourly data
        let cookies = 0;
        for(let i = 0; i < 14; i++){
            cookies = store.hours[i];
            rowString += '<td>' + cookies + '</td>';
        }
        // create store total entry
        rowString += '<td>' + rowTotals(store) + '</td> </tr>';

        return html`${rowString}`;
    };

    // create all the rows in table
    let rowTotals = function(store) {

        // create a counter variable for the total cookies for that store
        let store_total = 0;

        // create column entries for store cookie hourly data
        let cookies = 0;
        for(let i = 0; i < 14; i++){
            cookies = store.hours[i];
            store_total += cookies;
        }
        return store_total;
    };

    class StoreRow {
        constructor(props) {
            this.store = props.store;
            this.onRemove = props.onRemove;
        }

        render() {
            // create store row
            let dom = template(this.store);
            let removeButton = dom.querySelector('button');

            removeButton.addEventListener('click', () => {
                this.onRemove(this.store);
            });

            return dom;
        }

        rowTotaling() {
            return rowTotals(this.store);
        }
    }

    module.StoreRow = StoreRow;

})(window.module = window.module || {});