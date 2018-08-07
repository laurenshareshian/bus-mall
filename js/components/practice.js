(function(module) {
    let products = [
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
        { name: 'sweep', filename: './img/sweep.jpg', numViews: 0, numSelected: 0, lastViewed: false },
        { name: 'tauntaun', filename: './img/tauntaun.jpg', numViews: 0, numSelected: 0, lastViewed: false },
        { name: 'unicorn', filename: './img/unicorn.jpg', numViews: 0, numSelected: 0, lastViewed: false },
        { name: 'usb', filename: './img/usb.jpg', numViews: 0, numSelected: 0, lastViewed: false },
        { name: 'water-can', filename: './img/water-can.jpg', numViews: 0, numSelected: 0, lastViewed: false },
        { name: 'wine-glass', filename: './img/wine-glass.jpg', numViews: 0, numSelected: 0, lastViewed: false }
    ];

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
            rowstring += `<div class = '${label}'> <img src='img/${label}.jpg' alt='${label}' width = '200'>`
            rowstring += `<input type='radio' name='${label}'></div>`
        }
        rowstring += `<div class = 'button'><button id='submit'> Vote </button></div></section>`;
        console.log(rowstring);
        return html `${rowstring}`;
    };

    template
})(window.module = window.module || {});