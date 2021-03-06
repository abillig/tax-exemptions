var pieChart = function(element, dataArray, labelsArray, colorArray){
var ctx = document.getElementById(element);
    Chart.defaults.global.tooltips = false;
var myChart = new Chart(ctx, {
  type: 'pie',
  tooltips: false,
  data: {
    labels: labelsArray,
    datasets: [{
      backgroundColor: colorArray,
      data: dataArray
    }]
  }
})
};

var pieChartNoLabels = function(element, dataArray){
var ctx = document.getElementById(element);
    Chart.defaults.global.tooltips = false;
var myChart = new Chart(ctx, {
  type: 'pie',
  tooltips: false,
  borderWidth: 0,
  data: {
    datasets: [{
      backgroundColor: [
        "#2ecc71",
        "#3498db",
        "#95a5a6",
        "#9b59b6",
        "#f1c40f",
        "#e74c3c",
        "#34495e"
      ],
      data: dataArray
    }]
  },
options: {
    elements: {
        arc: {
            borderWidth: 0
        }
    }
}
})
};
