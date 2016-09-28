var idas_chart = function(){

data = {2000: 11985077731,
  2001: 13766009963,
  2002: 16486313410,
  2003: 18095055960,
  2004: 18279655311,
  2005: 19557362643,
  2006: 21527137458,
  2007: 25382696018,
  2008: 26202678258,
  2009: 28011139725,
  2010: 30841638243,
  2011: 31222930036,
  2012: 31840881902,
  2013: 32576694333,
  2014: 32329198846,
  2015: 33791219220}

		var height = 400;
		var width = 600;
		var barPadding = 2;
		var barWidth = (width / Object.keys(data).length) - barPadding;

console.log(barWidth)
		// var yScale = d3.scale.linear()
		// 	.domain([0, d3.max(data[1])])
		// 	.range([0, height]);
    //
		// var xScale = d3.scale.ordinal()
		// 	.domain(data.date)
		// 	.rangeBands([0, width], 0.1, 0.3);

		var svg = d3.select("#idas_chart")
			.style('width', width + 'px')
			.style('height', height + 'px');

		svg.selectAll('rect')
			.data(data)
			.enter()
			.append('rect')
			.attr('class', 'bar')
			.attr("x", function (d, i) {
				return xScale(d[0]);
			})
			.attr("y", function (d, i) {
				return height;
			})
			.attr("width", function (d, i) {
				return xScale.rangeBand()
			})
			.attr("fill", function (d, i) {
				return 'rgb(256, ' + Math.round(i / 2) + ', ' + i + ')'
			})
			.attr("height", 0)
			.transition()
			.duration(200)
			.delay(function (d, i) {
				return i * 50;
			})
			.attr("y", function (d, i) {
				return height - yScale(d);
			})
			.attr("height", function (d, i) {
				return yScale(d);
			});
}
