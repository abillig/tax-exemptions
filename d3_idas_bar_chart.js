var idas_chart = function(){

var data = [[2000, 11985077731],
[2001, 13766009963],
[2002, 16486313410],
[2003, 18095055960],
[2004, 18279655311],
[2005, 19557362643],
[2006, 21527137458],[2007, 25382696018],
[2008, 26202678258],[2009, 28011139725],
[2010, 30841638243],[2011, 31222930036],
[2012, 31840881902],[2013, 32576694333],
[2014, 32329198846],
[2015, 33791219220]]

    var h = 400;
    var w = 325;
    var barPadding = 2;
    var datasetLength = Object.keys(data).length
    var padding = 30;
    var barWidth = (w / datasetLength) - barPadding;
    var formatYear = d3.format("Y")
    var formatExemptionCount = d3.format(".2s")

    // console.log(barWidth)
    //
    // var yScale = d3.scale.linear()
    // 	.domain([d3.min(data[1]), d3.max(data[1])])
    // 	.range([0, height]);
    //
    // var xScale = d3.scale.linear()
    // 	.domain([d3.min(data[0]), d3.max(data[0])])
    // 	.range([0, width]);

    // var xScale = d3.scale.ordinal()
    // 	.domain(data[0])
    // 	.rangeBands([0, width], 0.1, 0.3);

    var xScale = d3.scale.linear()
        .domain([2000, d3.max(data, function(d){ return d[0]; })])
        //in order to get the x axis to align to the bars, i had to
        //redefine the range that it was mapped to
        .range([30, w - padding]);

    var yScale = d3.scale.linear()
        .domain([0, d3.max(data, function(d){ return d[1]; })])
        .range([0, h - padding * 2]);

    var svg = d3.select("#idas_chart")
      .append("svg")
      .attr('width', w)
      .attr('height', h);


      svg.selectAll('rect')
        .data(data)
        .enter()
        .append('rect')
        .attr('class', 'bar')
        .attr("x", function(d, i) {
              return i * (w / datasetLength - barPadding) + padding;  //Bar width of 20 plus 1 for padding
          })
        .attr("y", function (d, i) {
            return h;
          })
        .attr("height", 0)
        .attr("width", 20)
        .transition()
        .duration(200)
        .delay(function(d, i){
          return i * 50;
        })
        .attr("y", function(d, i){
            return h - padding - yScale(d[1])
        })
        .attr("height", function(d, i){
            return yScale(d[1])
        })
        .attr("fill", function(d) {
            return "rgb(" + (yScale(d[1]) / 2 + 90) + ", 0, 0)";
        });

    //LABELS :

    svg.selectAll("text")
       .data(data)
       .enter()
       .append("text")
       .style("fill", "white")
       .text(function(d) {
               return formatExemptionCount(d[1]).replace("G", "");
          })
        .attr("x", function(d, i) {
          console.log(i * (w / datasetLength));
              return i * (w / datasetLength - barPadding) + padding + 3;
          })
         .attr("y", function(d) {
              return h + 12 - padding - yScale(d[1]);
         });



    //AXES:

        var xAxis = d3.svg.axis()
          .scale(xScale)
          .orient("bottom")
          .ticks(20)
          .tickFormat(formatYear);

        svg.append("g")
          .attr("class", "axis")
          .attr("transform", "translate(11," + (h - padding) +")")
          .call(xAxis)
          .selectAll("text")
              .style("text-anchor", "end")
              // .attr("dx", "-.8em")
              .attr("dy", ".15em")
              .attr("transform", "rotate(-65)" );

}


var religion_chart = function(){


  var data = [[1999, 14254846118],
  [2000, 14755332253],
  [2001, 15686947099],
  [2002, 16917835680],
  [2003, 17766219133],
  [2004, 18680595427],
  [2005, 21394422422],[2006, 21697425252],
  [2007, 24272653881],[2008, 24338422544],
  [2009, 25391298356],[2010, 24845959354],
  [2011, 25314775346],[2012, 25549131681],
  [2013, 25492028967],
  [2014, 25353232852],
  [2015, 25858583381]]



      var h = 400;
      var w = 325;
      var barPadding = 2;
      var datasetLength = Object.keys(data).length
      var padding = 30;
      var barWidth = (w / datasetLength) - barPadding;
      var formatYear = d3.format("Y")
      var formatExemptionCount = d3.format(".2s")

      // console.log(barWidth)
      //
      // var yScale = d3.scale.linear()
      // 	.domain([d3.min(data[1]), d3.max(data[1])])
      // 	.range([0, height]);
      //
      // var xScale = d3.scale.linear()
      // 	.domain([d3.min(data[0]), d3.max(data[0])])
      // 	.range([0, width]);

      // var xScale = d3.scale.ordinal()
      // 	.domain(data[0])
      // 	.rangeBands([0, width], 0.1, 0.3);

      var xScale = d3.scale.linear()
          .domain([1999, d3.max(data, function(d){ return d[0]; })])
          //in order to get the x axis to align to the bars, i had to
          //redefine the range that it was mapped to
          .range([30, w - padding]);

      var yScale = d3.scale.linear()
          .domain([0, d3.max(data, function(d){ return d[1]; })])
          .range([0, h - padding * 2]);

      var svg = d3.select("#religion_chart")
        .append("svg")
        .attr('width', w)
        .attr('height', h);


        svg.selectAll('rect')
          .data(data)
          .enter()
          .append('rect')
          .attr('class', 'bar')
          .attr("x", function(d, i) {
                return i * (w / datasetLength - barPadding) + padding;  //Bar width of 20 plus 1 for padding
            })
          .attr("y", function (d, i) {
              return h;
            })
          .attr("height", 0)
          .attr("width", 20)
          .transition()
          .duration(200)
          .delay(function(d, i){
            return i * 50;
          })
          .attr("y", function(d, i){
              return h - padding - yScale(d[1])
          })
          .attr("height", function(d, i){
              return yScale(d[1])
          })
          .attr("fill", function(d) {
              return "rgb(" + (yScale(d[1]) / 2 + 90) + ", 0, 0)";
          });

      //LABELS :

      svg.selectAll("text")
         .data(data)
         .enter()
         .append("text")
         .style("fill", "white")
         .text(function(d) {
                 return formatExemptionCount(d[1]).replace("G", "");
            })
          .attr("x", function(d, i) {
            console.log(i * (w / datasetLength));
                return i * (w / datasetLength - barPadding) + padding + 3;
            })
           .attr("y", function(d) {
                return h + 12 - padding - yScale(d[1]);
           });



      //AXES:

          var xAxis = d3.svg.axis()
            .scale(xScale)
            .orient("bottom")
            .ticks(20)
            .tickFormat(formatYear);

          svg.append("g")
            .attr("class", "axis")
            .attr("transform", "translate(11," + (h - padding) +")")
            .call(xAxis)
            .selectAll("text")
                .style("text-anchor", "end")
                // .attr("dx", "-.8em")
                .attr("dy", ".15em")
                .attr("transform", "rotate(-65)" );

  }
