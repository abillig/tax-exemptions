
var shifting_bar_overal = function(){
      var canvasHeight = 300;
      var dataSet = [1.9];
      // var heightRatio = d3.max(dataSet) / canvasHeight;

      var canvas = d3.select("#ramapo_bar")
          .append("svg").attr("width", "100%")
          .attr("height", canvasHeight + "px")

      // var rectWidth = canvas.style("width").replace("px", "") / dataSet.length / 2;
      // var barPadding = rectWidth / 5;

      var yScale = d3.scale.linear()
          .domain([0, 3])
          .range([canvasHeight, 0]);

      var yAxis = d3.svg.axis()
        .scale(yScale)
        .orient("left")
        .ticks(10)
        // .tickFormat(formatYear);

      canvas.append("g")
        .attr("class", "axis")
        .attr("transform", "translate(80, 10)")
        .call(yAxis)


      //Chart
      canvas.selectAll('rect')
          .data(dataSet)
          .enter()
          .append('rect');

      canvas.selectAll('rect')
      .attr('x', function(d,i){return 100;})
      .attr('y',  function(d){return yScale(2.8);})
      .attr("height", function(d){return canvasHeight - yScale(2.8);})
      .attr("width", 60)
      .attr("fill", function(d){ return "rgb(" + (yScale(1.8) + 90) + ", 0, 0)"; });

      //Animate the chart
      canvas.selectAll('rect')
      .transition().duration(1000)
      .attr('y',  function(d){return yScale(1.8);})
      .attr("height", function(d){return canvasHeight - yScale(1.8);})
      .attr("fill", function(d){ return "rgb(0, 100," + (yScale(1.8) + 90) + ")"; });
}

var shifting_bar = function(){
      var canvasHeight = 300;
      var dataSet = [523];
      // var heightRatio = d3.max(dataSet) / canvasHeight;

      var canvas = d3.select("#ramapo_bar")
          .append("svg").attr("width", "100%")
          .attr("height", canvasHeight + "px")

      // var rectWidth = canvas.style("width").replace("px", "") / dataSet.length / 2;
      // var barPadding = rectWidth / 5;

      var yScale = d3.scale.linear()
          .domain([0, 700])
          .range([canvasHeight, 0]);

      var yAxis = d3.svg.axis()
        .scale(yScale)
        .orient("left")
        .ticks(10)
        // .tickFormat(formatYear);

      canvas.append("g")
        .attr("class", "axis")
        .attr("transform", "translate(80, 10)")
        .call(yAxis)


      //Chart
      canvas.selectAll('rect')
          .data(dataSet)
          .enter()
          .append('rect');

      canvas.selectAll('rect')
      .attr('x', function(d,i){return 100;})
      .attr('y',  function(d){return yScale(130);})
      .attr("height", function(d){return yScale(130);})
      .attr("width", 60)
      .attr("fill", function(d){ return '#4aa1cc'; });

      //Animate the chart
      canvas.selectAll('rect')
      .transition().duration(3000)
      .attr('y',  function(d){return yScale(505);})
      .attr("height", function(d){return canvasHeight - yScale(505);});
}
