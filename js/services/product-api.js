'use strict';

import data from './data.js';

let products = data.products;

if(!products) {
    data.products = createProducts();
    products = data.products;
}
function createProducts() {
    return [
        { name: 'bag', filename: './img/bag.jpg', numViews: 0, numSelected: 0, lastViewed: false },
        { name: 'banana', filename: './img/banana.jpg', numViews: 0, numSelected: 0, lastViewed: false },
        { name: 'bathroom', filename: './img/bathroom.jpg', numViews: 0, numSelected: 0, lastViewed: false },
        { name: 'boots', filename: './img/boots.jpg', numViews: 0, numSelected: 0, lastViewed: false },
        { name: 'breakfast', filename: './img/breakfast.jpg', numViews: 0, numSelected: 0, lastViewed: false },
        { name: 'bubblegum', filename: './img/bubblegum.jpg', numViews: 0, numSelected: 0, lastViewed: false },
        { name: 'chair', filename: './img/chair.jpg', numViews: 0, numSelected: 0, lastViewed: false },
        { name: 'cthulhu', filename: './img/cthulhu.jpg', numViews: 0, numSelected: 0, lastViewed: false },
        { name: 'dog-duck', filename: './img/dog-duck.jpg', numViews: 0, numSelected: 0, lastViewed: false },
        { name: 'dragon', filename: './img/dragon.jpg', numViews: 0, numSelected: 0, lastViewed: false },
        { name: 'pen', filename: './img/pen.jpg', numViews: 0, numSelected: 0, lastViewed: false },
        { name: 'pet-sweep', filename: './img/pet-sweep.jpg', numViews: 0, numSelected: 0, lastViewed: false },
        { name: 'scissors', filename: './img/scissors.jpg', numViews: 0, numSelected: 0, lastViewed: false },
        { name: 'shark', filename: './img/shark.jpg', numViews: 0, numSelected: 0, lastViewed: false },
        { name: 'sweep', filename: './img/sweep.png', numViews: 0, numSelected: 0, lastViewed: false },
        { name: 'tauntaun', filename: './img/tauntaun.jpg', numViews: 0, numSelected: 0, lastViewed: false },
        { name: 'unicorn', filename: './img/unicorn.jpg', numViews: 0, numSelected: 0, lastViewed: false },
        { name: 'usb', filename: './img/usb.gif', numViews: 0, numSelected: 0, lastViewed: false },
        { name: 'water-can', filename: './img/water-can.jpg', numViews: 0, numSelected: 0, lastViewed: false },
        { name: 'wine-glass', filename: './img/wine-glass.jpg', numViews: 0, numSelected: 0, lastViewed: false }
    ];

}
export default {
    load: function() {
        return products;
    }
};