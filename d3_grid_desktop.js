// //http://bl.ocks.org/eesur/3fc83ddc4c060e6bd43e
//
// var adjustableGrid = function(num){
//
//   $('#squares').hide()
//   $('#squares').show()
//
//
// var tensPlace = num / 10
// var onesPlace = num % 10
//
//
// var square = 18,
//   w = 220,
//   h = 360;
//
// // create the svg
// var svg = d3.select('#squares').append('svg')
//   .attr({
//     width: w,
//     height: h
//     // viewBox:"0 0" + w + h
//   });
//
// // calculate number of rows and columns
// var squaresRow = Math.round(w / square);
// var squaresColumn = Math.round(h / square);
//
// // loop over number of columns
//
// for (var n = 0; n < squaresColumn; n++) {
//   //n = column (tens place)
//   //i = row (ones place)
//   // create each set of rows
//   var rows = svg.selectAll('rect' + ' .row-' + (n + 1))
//     .data(d3.range(squaresRow))
//     .enter().append('rect')
//     .attr({
//       width: square - 1,
//       height: square - 1,
//       x: function(d, i) {
//         return i * square;
//       },
//       y: n * square,
//       fill: function(d, i){
//         //this is 46: if(n < 4 || n===4 && i < 6)
//         //this is 12: if(n < 1 || n===1 && i < 2){
//         if(num===100){
//           return 'red'
//         } else if(n < onesPlace || n===onesPlace && i < tensPlace - 1){
//           return 'green'
//         } else {
//           return 'red'
//         }
//       },
//       stroke: '#fff',
//       'stroke-width': '.6'
//     });
// };
//
// };
//
//
//
//
// var adjustableGridSecond = function(num){
//
//   $('#squares2').hide()
//   $('#squares2').show()
//
//
// var tensPlace = num / 10
// var onesPlace = num % 10
//
//
// var square = 18,
//   w = 220,
//   h = 360;
//
// // create the svg
// var svg = d3.select('#squares2').append('svg')
//   .attr({
//     width: w,
//     height: h
//     // viewBox:"0 0" + w + h
//   });
//
// // calculate number of rows and columns
// var squaresRow = Math.round(w / square);
// var squaresColumn = Math.round(h / square);
//
// // loop over number of columns
//
// for (var n = 0; n < squaresColumn; n++) {
//   //n = column (tens place)
//   //i = row (ones place)
//   // create each set of rows
//   var rows = svg.selectAll('rect' + ' .row-' + (n + 1))
//     .data(d3.range(squaresRow))
//     .enter().append('rect')
//     .attr({
//       width: square - 1,
//       height: square - 1,
//       x: function(d, i) {
//         return i * square;
//       },
//       y: n * square,
//       fill: function(d, i){
//         //this is 46: if(n < 4 || n===4 && i < 6)
//         //this is 12: if(n < 1 || n===1 && i < 2)
//         if(num===100){
//           return 'red'
//         } else if(n < onesPlace || n===onesPlace && i < tensPlace - 1){
//           return 'green'
//         } else {
//           return 'red'
//         }
//       },
//       stroke: '#fff',
//       'stroke-width': '.6'
//     });
//
//     setTimeout(function(){
//       odometer.innerHTML = 8300;
//     }, 1000);
//
// };
//
// };
