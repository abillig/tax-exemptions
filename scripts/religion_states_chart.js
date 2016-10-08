var states_religion_desktop = function(){
  Chart.defaults.global.legend.display = false;

var ctx = document.getElementById("religion_states_chart");
var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ["VT", "NH", "ME", "MA", "WI", "CT", "DC", "HI", "NY", "OR", "CO", "WA", "AK", "MT", "MD", "CA", "NV", "ND", "MI", "MN", "IL", "DE", "AZ", "PA", "FL", "NJ", "ID", "RI", "IA", "NM", "SD", "MO", "IN", "KS", "OH", "WY", "NC", "NE", "KY", "AR", "TX", "GA", "OK", "VA", "LA", "WV", "SC", "MS", "TN", "AL", "UT"] ,
        datasets: [{
            // label: '# of Votes',
            data: [21, 22, 22, 23, 27, 28, 28, 28, 29, 29, 30, 30, 30, 31, 31, 31, 31, 33, 33, 34, 34, 34, 34, 34, 35, 35, 35, 36, 36, 36, 36, 37, 37, 37, 38, 38, 39, 39, 39, 41, 42, 42, 43, 44, 46, 46, 47, 49, 51, 51, 53] ,
            backgroundColor: [
                'white',"white","white","white","white","white","white","white",'red','white',"white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white"
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
                color: "rgba(0, 0, 0, 0)",
            },
                ticks: {
                    beginAtZero:true,
                    fontSize: 8
                }
            }],
            xAxes: [{
              gridLines: {
                color: "rgba(0, 0, 0, 0)",
                ticks: {
                    beginAtZero:true
                }
            }
            }]
        }
    }
});
}

var states_religion_mobile = function(){
Chart.defaults.global.legend.display = false;
var ctx = document.getElementById("religion_states_chart_mobile");
var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ["VT", "NH", "ME", "MA", "WI", "CT", "DC", "HI", "NY", "OR", "CO", "WA", "AK", "MT", "MD", "CA", "NV", "ND", "MI", "MN", "IL", "DE", "AZ", "PA", "FL", "NJ", "ID", "RI", "IA", "NM", "SD", "MO", "IN", "KS", "OH", "WY", "NC", "NE", "KY", "AR", "TX", "GA", "OK", "VA", "LA", "WV", "SC", "MS", "TN", "AL", "UT"] ,
        datasets: [{
            // label: '# of Votes',
            data: [21, 22, 22, 23, 27, 28, 28, 28, 29, 29, 30, 30, 30, 31, 31, 31, 31, 33, 33, 34, 34, 34, 34, 34, 35, 35, 35, 36, 36, 36, 36, 37, 37, 37, 38, 38, 39, 39, 39, 41, 42, 42, 43, 44, 46, 46, 47, 49, 51, 51, 53] ,
            backgroundColor: [
              'white',"white","white","white","white","white","white","white",'red','white',"white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white"
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
                color: "rgba(0, 0, 0, 0)",
            },
                ticks: {
                    beginAtZero:true,
                    fontSize: 6
                }
            }],
            xAxes: [{
              gridLines: {
                color: "rgba(0, 0, 0, 0)",
            }, ticks: {
                beginAtZero:true,
                // fontSize: 4
            }
            }]
        }
    }
});
}
