var shifting_bar_horizontal = function(element, firstVal, secondVal, firstColor, secondColor){
  var canvasWidth = 700;
  var dataSet = [0];
  var padding = 20;
  // var heightRatio = d3.max(dataSet) / canvasHeight;
  $(element).empty()
  var canvas = d3.select(element)
      .append("svg").attr("width", canvasWidth + "px")
      .attr("height", "50%")

  // var rectWidth = canvas.style("width").replace("px", "") / dataSet.length / 2;
  // var barPadding = rectWidth / 5;

  var yScale = d3.scale.linear()
      .domain([0, 3])
      .range([0 - padding, canvasWidth - padding * 2]);

  var yAxis = d3.svg.axis()
    .scale(yScale)
    .orient("bottom")
    .ticks(10)
    // .tickFormat(formatYear);

  canvas.append("g")
    .attr("class", "axis")
    .attr("transform", "translate(30, 130)")
    .call(yAxis)


  //Chart
  canvas.selectAll('rect')
      .data(dataSet)
      .enter()
      .append('rect');

  canvas.selectAll('rect')
  .attr('x', function(d,i){return 10;})
  .attr('y',  function(d){return yScale(.25);})
  .attr("height", function(d){return canvasWidth - yScale(2.8);})
  .attr("width", function(d){return yScale(firstVal);})
  .attr("fill", function(d){ return firstColor; });

  //Animate the chart
  canvas.selectAll('rect')
  .transition().duration(1000)
  .attr('x', function(d,i){return 10;})
  .attr('y',  function(d){return yScale(.25);})
  .attr("height", function(d){return canvasWidth - yScale(2.8);})
  .attr("width", function(d){return yScale(secondVal);})
  .attr("fill", function(d){ return secondColor; });
}

var shifting_bar_vertical = function(element, firstVal, secondVal, firstColor, secondColor){
      var canvasHeight = 300;
      var dataSet = [1.9];
      // var heightRatio = d3.max(dataSet) / canvasHeight;
      $(element).empty()
      var canvas = d3.select(element)
          .append("svg").attr("width", "50%")
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
        .attr("transform", "translate(30, 10)")
        .call(yAxis)


      //Chart
      canvas.selectAll('rect')
          .data(dataSet)
          .enter()
          .append('rect');

      canvas.selectAll('rect')
      .attr('x', function(d,i){return 40;})
      .attr('y',  function(d){return yScale(firstVal);})
      .attr("height", function(d){return canvasHeight - firstVal;})
      .attr("width", 60)
      .attr("fill", function(d){ return firstColor; });

      //Animate the chart
      canvas.selectAll('rect')
      .transition().duration(1000)
      .attr('y',  function(d){return yScale(secondVal);})
      .attr("height", function(d){return canvasHeight - secondVal;})
      .attr("fill", function(d){ return secondColor; });
    }

var shifting_bar = function(){
      var canvasHeight = 300;
      var dataSet = [523];
      $("#ramapo_bar").empty()
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
