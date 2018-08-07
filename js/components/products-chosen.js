'use strict';
(function(module) {
    let html = module.html;

    // create all the rows in table
    let template = function(products) {
        let rowstring = '<section id=\'survey\'> <h2>Choose a product! </h2>';
        rowstring += '<form id=\'guess-form\' > <div class = \'flex-choice-box\'> ';
        for(let i = 0; i < products.length; i++){
            let label = products[i].name;
            let filename = products[i].filename;
            rowstring += '<div><label> <input type=\'radio\' name = \'image\' value=\' ';
            rowstring += label;
            rowstring += '\'> <img src = \'';
            rowstring += filename;
            rowstring += '\' alt = \''
            rowstring += label;
            rowstring += ' \' width = \'200\'> </label> </div>';
        }
        rowstring += '<br></div>';
        rowstring += '<div class = \'button-container\'><button id = \'submit\' type=\'submit\'>';
        rowstring += 'Vote </button></div></form></section>';
        // let rowstring = '<section id=\'survey\'>'
        // + '<h2>Choose a product! </h2>'
        // + '<form id=\'add-store\'>'
        // + '<div class = \'flex-choice-box\'>';
        // for(let i = 0; i < products.length; i++){
        //     let label = products[i].name;
        //     let filename = products[i].filename;
        //     rowstring += '<div class = \'flex-choice\'> <img src=\'';
        //     rowstring += filename;
        //     rowstring += '\' alt=\'';
        //     rowstring += label;
        //     rowstring += '\' width = \'200\'>  <input type=\'radio\' name=\'';
        //     rowstring += label;
        //     rowstring += '\' /> </div>';
        // }
        // rowstring += '</div> <div class = \'button\'><button id=\'submit\'> Vote </button></div>';
        // rowstring += ' </form><br> </section>';
        console.log(rowstring);
        return html `${rowstring}`;
    }
    class ProductsChosenList {
        constructor(props) {
            this.products = props.products;
        }

        render() {
            // create new product display
            let dom = template(this.products);
            return dom;
        }

    }

    module.ProductsChosenList = ProductsChosenList;

})(window.module = window.module || {});
