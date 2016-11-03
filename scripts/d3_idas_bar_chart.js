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

    var h = 300;
    var w = 290;
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



      var h = 300;
      var w = 290;
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




var hospitals_bar = function(){
  var data = [[1999,	13106737400],
  [2000,	13682573927],
  [2001,	14474852650],
  [2002,	15398234824],
  [2003,	16084819019],
  [2004,	16898068099],
  [2005,	17961450208],
  [2006,	18511427855],
  [2007,	20029382802],
  [2008,	20182458558],
  [2009,	20462830371],
  [2010,	19926067179],
  [2011,	20705917639],
  [2012,	21216128371],
  [2013,	21503992283],
  [2014,	21997426041],
  [2015,	22689645187]]

      var h = 300;
      var w = 290;
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

      var svg = d3.select("#hospitals_chart")
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

  var religion_chart_ramapo = function(){


    var data = [[2015,	265401481],
    [2014,	247198264],
    [2013,	286713652],
    [2012,	304464896],
    [2011,	316291536],
    [2010,	327722064],
    [2009,	315278709],
    [2008,	349090806],
    [2007,	335558627],
    [2006,	291199375],
    [2005,	216436279],
    [2004,	216436279],
    [2003,	197458034],
    [2002,	166781965],
    [2001,	137785496],
    [2000,	120830198],
    [1999,	100909401]]

        var h = 300;
        var w = 290;
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
