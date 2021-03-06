var top_hospitals = function(){

        Chart.defaults.global.legend.display = false;


      var ctx = document.getElementById("top_hospitals_chart");
      var myChart = new Chart(ctx, {
          type: 'horizontalBar',
          data: {
              labels: ['Memorial Sloan-Kettering Cancer Center ($1.2 billion)',
              'University of Rochester Medical Center ($656.5 million)',
              'North Shore University Hospital ($337 million)',
              'New York-Presbyterian Hospital ($200 million)',
              'Mt. Sinai Hospital ($53.8 million)'] ,
              datasets: [{
                  // label: '# of Votes',
                  data: [1099317790,
                  656785256,
                  336692999,
                  202349925,
                  53840000] ,
                  backgroundColor: [
                    '#d03',
                    '#d03','#d03','#d03','#d03','#d03'
                  ],
                  borderColor: [
                      // 'rgba(255,99,132,1)',
                      // 'rgba(54, 162, 235, 1)',
                      // 'rgba(255, 206, 86, 1)',
                      // 'rgba(75, 192, 192, 1)',
                      // 'rgba(153, 102, 255, 1)',
                      // 'rgba(255, 159, 64, 1)'
                  ],
                  borderWidth: 1
              }]
          },
          options: {
            responsive: true,
              scales: {
                  yAxes: [{
                    gridLines: {
                      display: false,
                      color: "rgba(0, 0, 0, 0)",
                  },
                      ticks: {
                        display: false,
                          beginAtZero:true,
                          fontSize: 14
                      }
                  }],
                  xAxes: [{
                    display: false,
                    gridLines: {
                      display: false,
                      color: "rgba(0, 0, 0, 0)",
                      ticks: {
                        // display: false,
                          beginAtZero:true
                      }
                  }
                  }]
              },
              animation: {
      duration: 500,
      easing: "easeOutQuart",
      onComplete: function () {
          var ctx = this.chart.ctx;
          ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontFamily, 'normal', Chart.defaults.global.defaultFontFamily);
          ctx.textAlign = 'left';
          ctx.textBaseline = 'bottom';

          this.data.datasets.forEach(function (dataset) {
              for (var i = 0; i < dataset.data.length; i++) {
                  var model = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model,
                      scale_max = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._yScale.maxHeight;
                      left = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._xScale.left;
                      offset = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._xScale.longestLabelWidth;
                  ctx.fillStyle = '#fff';
                  var y_pos = model.y - 5;
                  var label = model.label;
                  // Make sure data value does not get overflown and hidden
                  // when the bar's value is too close to max value of scale
                  // Note: The y value is reverse, it counts from top down
                  if ((scale_max - model.y) / scale_max >= 0.93)
                      y_pos = model.y + 20;
                  // ctx.fillText(dataset.data[i], model.x, y_pos);
                  ctx.fillText(label, left + 10, model.y - 24);
              }
          });
      }
  	}
          }
      });
}

var top_hospitals_mobile = function(){
  Chart.defaults.global.legend.display = false;


  var ctx = document.getElementById("top_hospitals_mobile_chart");
  var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ['Memorial Sloan-Kettering Cancer Center ($1.2 billion)',
        'University of Rochester Medical Center ($656.5 million)',
        'North Shore University Hospital ($337 million)',
        'New York-Presbyterian Hospital ($200 million)',
        'Mt. Sinai Hospital ($53.8 million)'] ,
        datasets: [{
            // label: '# of Votes',
            data: [1099317790,
            656785256,
            336692999,
            202349925,
            53840000] ,
            backgroundColor: [
              '#d03',
              '#d03','#d03','#d03','#d03','#d03'
            ],
            borderColor: [
                // 'rgba(255,99,132,1)',
                // 'rgba(54, 162, 235, 1)',
                // 'rgba(255, 206, 86, 1)',
                // 'rgba(75, 192, 192, 1)',
                // 'rgba(153, 102, 255, 1)',
                // 'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
      responsive: true,
        scales: {
            yAxes: [{
              gridLines: {
                display: false,
                color: "rgba(0, 0, 0, 0)",
            },
                ticks: {
                  display: false,
                    beginAtZero:true,
                    fontSize: 12
                }
            }],
            xAxes: [{
              display: false,
              gridLines: {
                display: false,
                color: "rgba(0, 0, 0, 0)",
                ticks: {
                  // display: false,
                    beginAtZero:true
                }
            }
            }]
        },
        animation: {
  duration: 500,
  easing: "easeOutQuart",
  onComplete: function () {
    var ctx = this.chart.ctx;
    ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontFamily, 'normal', Chart.defaults.global.defaultFontFamily);
    ctx.textAlign = 'left';
    ctx.textBaseline = 'bottom';

    this.data.datasets.forEach(function (dataset) {
        for (var i = 0; i < dataset.data.length; i++) {
            var model = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model,
                scale_max = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._yScale.maxHeight;
                left = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._xScale.left;
                offset = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._xScale.longestLabelWidth;
            ctx.fillStyle = '#fff';
            var y_pos = model.y - 5;
            var label = model.label;
            // Make sure data value does not get overflown and hidden
            // when the bar's value is too close to max value of scale
            // Note: The y value is reverse, it counts from top down
            if ((scale_max - model.y) / scale_max >= 0.93)
                y_pos = model.y + 23;
            // ctx.fillText(dataset.data[i], model.x, y_pos);
            ctx.fillText(label, left, model.y - 24);
        }
    });
  }
  }
    }
  });
  }
