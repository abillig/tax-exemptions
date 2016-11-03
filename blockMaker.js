var blockMaker = function(totalSquares, previousSquares, newSquaresTotal){
  // $('svg').hide()
  $('svg').show()
  // $('.odometer').hide()
  // $('odometer').show()

var formatNumber = d3.format(",d");

var svg = d3.select("svg");

var width = +svg.attr("width"),
    height = +svg.attr("height");

var groupSpacing = 2,
    cellSpacing = 1,
    cellSize = Math.floor((width - 11 * groupSpacing) / 100) - cellSpacing,
    offset = Math.floor((width - 100 * cellSize - 90 * cellSpacing - 11 * groupSpacing) / 2);

var updateDuration = 125,
    updateDelay = updateDuration / 500;

var cell = svg.append("g")
    .attr("class", "cells")
    .attr("transform", "translate(" + offset + "," + (offset + 30) + ")")
  .selectAll("rect")


// var label = svg.append("text")
//     .attr("class", "label");

function update(n1) {
  var n0 = cell.size();

  cell = cell
      .data(d3.range(n1))
        .attr("fill", function(d, i){if(i < newSquaresTotal)return 'green'});


  cell.exit().transition()
      .delay(function(d, i) { return (n0 - i) * updateDelay; })
      .duration(updateDuration)
      .attr("width", 0)
      .remove();

  cell.enter().append("rect")
      .attr("width", 0)
      .attr("height", cellSize)
      .attr("x", function(i) {
        var x0 = Math.floor(i / 100) % 10, x1 = Math.floor(i % 10);
        return groupSpacing * x0 + (cellSpacing + cellSize) * (x1 + x0 * 10);
      })
      .attr("y", function(i) {
        var y0 = Math.floor(i / 1000), y1 = Math.floor(i % 100 / 10);
        return groupSpacing * y0 + (cellSpacing + cellSize) * (y1 + y0 * 10);
      })
    .transition()
      .delay(function(d, i) { return (i - n0) * updateDelay; })
      .duration(updateDuration)
      .attr("width", cellSize)
      .attr("fill", function(d, i){if(i < previousSquares)return 'green'});
}

(function interval() {
  update(Math.floor(totalSquares));
  setTimeout(interval, updateDelay * 1 + updateDuration + 1000);
})();

d3.select(self.frameElement).style("height", height + "px");

setTimeout(function(){
  odometer.innerHTML = 8300;
}, 1000);

}
