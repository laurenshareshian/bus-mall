/* global d3 */
/*eslint no-unused-vars: ['error', { 'varsIgnorePattern': 'updateD3' }]*/

export default function updateD3(products) {
    //load in product data to plot
    let data = [];

    for(let i = 0; i < products.length; i++){
        let product = products[i];
        if(product.numViews !== 0){
            data.push({ product: product.name,
                percentage: product.numSelected / product.numViews });
        }
    }
    // plot data using d3
    var margin = { top: 40, right: 10, bottom: 50, left: 100 },
        width = 1000 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

    var x = d3.scale.ordinal()
        .rangeRoundBands([0, width], .1);

    var y = d3.scale.linear()
        .range([height, 0]);

    var xAxis = d3.svg.axis()
        .scale(x)
        .orient('bottom');

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient('left');

    // var tip = d3.tip()
    //     .attr('class', 'd3-tip')
    //     .offset([-10, 0])
    //     .html(function(d) {
    //         return '<strong>Percentage:</strong> <span style=\'color\': red>' + d.percentage + '</span>';
    //     });

    var svg = d3.select('article').append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    // svg.call(tip);

    // turn the data into a form that d3 can use
    x.domain(data.map(function(d) { return d.product; }));
    y.domain([0, d3.max(data, function(d) { return d.percentage; })]);

    // Add the X Axis
    svg.append('g')
        .attr('class', 'x axis')
        .attr('transform', 'translate(0,' + height + ')')
        .call(xAxis);

    // Add the text label for the x axis
    svg.append('text')
        .attr('transform', 'translate(' + (width / 2) + ' ,' + (height + margin.bottom * 0.9) + ')')
        .style('text-anchor', 'middle')
        .text('Products Displayed To User');

    // Add the Y Axis
    svg.append('g')
        .attr('class', 'y axis')
        .call(yAxis);

    // Add the text label for the Y axis
    svg.append('text')
        .attr('transform', 'rotate(-90)')
        .attr('y', 0 - margin.left / 2)
        .attr('x', 0 - (height / 2))
        .attr('dy', '1em')
        .style('text-anchor', 'middle')
        .text('Percentage Chosen');

    svg.selectAll('.bar')
        .data(data)
        .enter().append('rect')
        .attr('class', 'bar')
        .attr('x', function(d) { return x(d.product); })
        .attr('width', x.rangeBand())
        .attr('y', function(d) { return y(d.percentage); })
        .attr('height', function(d) { return height - y(d.percentage); });
    // .on('mouseover', tip.show)
    // .on('mouseout', tip.hide);

}