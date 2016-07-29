
$(document).ready(function(){   //must wait till DOM is loaded before manipulating it
(function (global) {
    

    var margins = {
        top: 10,
        bottom: 10,
        left: 10,
        right: 10
    };

    var dimensions = {
        width: 800 -margins.left - margins.right,
        height: 600 - margins.top - margins.bottom
    };

    var format = d3.format(".1%");  //indicates that data is to be formatted as a percentage to the tenths decimal place
    
    var x = d3.scaleLinear()    //to order numeric values
        .range([0, dimensions.width]);

    var y = d3.scaleBand()   //to order the text?
        .rangeRound([0, dimensions.height]);

    var xAxis = d3.axisTop()
        .scale(x)
        .tickSize(-dimensions.height - margins.bottom)
        .tickFormat(format);

    var chart = d3.select('#chart-container')
        .append('svg')
            .attr('width', dimensions.width + margins.left + margins.right)
            .attr('height', dimensions.height + margins.top + margins.bottom)
                .append('g')
                    .attr('transform', 'translate('+margins.left+', '+margins.top+')')
        ;
        
    
    chart.append('g')
        .classed('x axis', true)


})(this);
});