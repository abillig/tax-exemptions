var exemption_pie = function(){

var width = 960,
    height = 500,
    radius = Math.min(width, height) / 2;

var color = d3.scale.ordinal()
    .range(["#D64946", "#1775AE", "#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

var arc = d3.svg.arc()
    .outerRadius(radius - 10)
    .innerRadius(radius - 70);

var pie = d3.layout.pie()
    .sort(null)
    .value(function(d) { return d.count; });

var svg = d3.select("#exemption_pie").append("svg")
    .classed("exemption_pie_svg", true)
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");


var data = [
          { label: 'Taxed', count: 2 },
          { label: 'Untaxed', count: 98 }
        ];


  var g = svg.selectAll(".arc")
      .data(pie(data))
    .enter().append("g")
      .attr("class", "arc");

  g.append("path")
      .attr("d", arc)
      .style("fill", function(d) { return color(d.data.count); });

  // g.append("text")
  //     .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
  //     .attr("dy", ".35em")
  //     .text(function(d) { return d.data.label; });


function type(d) {
  d.Exemptions = +d.Exemptions;
  return d;
}

}
