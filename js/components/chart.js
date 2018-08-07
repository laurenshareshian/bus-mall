/* global d3 */
/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "updateD3" }]*/

'use strict';

function updateD3(stores) {

    let data = [];

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

    for(let i = 0; i < stores.length; i++){
        let store = stores[i];
        data.push({ location: store.location,
            rowTotal: rowTotals(store) });
    }

    // plot data using d3
    var margin = { top: 40, right: 100, bottom: 30, left: 100 },
        width = 900 - margin.left - margin.right,
        height = 450 - margin.top - margin.bottom;

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

    var tip = d3.tip()
        .attr('class', 'd3-tip')
        .offset([-10, 0])
        .html(function(d) {
            return '<strong>Store Total:</strong> <span style="color:red">' + d.rowTotal + '</span>';
        });

    var svg = d3.select('article').append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    svg.call(tip);

    x.domain(data.map(function(d) { return d.location; }));
    y.domain([0, d3.max(data, function(d) { return d.rowTotal; })]);

    svg.append('g')
        .attr('class', 'x axis')
        .attr('transform', 'translate(0,' + height + ')')
        .call(xAxis);

    svg.append('g')
        .attr('class', 'y axis')
        .call(yAxis)
        .append('text')
        .attr('transform', 'rotate(-90)')
        .attr('y', 6)
        .attr('dy', '.4em')
        .style('text-anchor', 'end')
        .text('Store Total');

    svg.selectAll('.bar')
        .data(data)
        .enter().append('rect')
        .attr('class', 'bar')
        .attr('x', function(d) { return x(d.location); })
        .attr('width', x.rangeBand())
        .attr('y', function(d) { return y(d.rowTotal); })
        .attr('height', function(d) { return height - y(d.rowTotal); })
        .on('mouseover', tip.show)
        .on('mouseout', tip.hide);

}


