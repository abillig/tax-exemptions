
var single_bar = function single_bar(element, value1, value2){
var exempt = [value1];
var nonexempt = [value2];
var dates = [];

// Chart.defaults.global.elements.rectangle.backgroundColor = '#FF0000';

var bar_ctx = document.getElementById(element);
var bar_chart = new Chart(bar_ctx, {
    type: 'bar',
    responsive: true,
   maintainAspectRatio: false,
    data: {
        labels: dates,
        datasets: [
        {
            label: 'Exempt',
            data: exempt,
						backgroundColor: "rgba(55, 160, 225, 0.7)",
						hoverBackgroundColor: "rgba(55, 160, 225, 0.7)",
						// hoverBorderWidth: 2,
						// hoverBorderColor: 'lightgrey'
        },
        {
            label: 'Non-Exempt',
            data: nonexempt,
						backgroundColor: "rgba(225, 58, 55, 0.7)",
						hoverBackgroundColor: "rgba(225, 58, 55, 0.7)",
						// hoverBorderWidth: 2,
						// hoverBorderColor: 'lightgrey'
        },
        ]
    },
    options: {
     		animation: {
        	duration: 1000,
        },
        // tooltips: {
				// 	mode: 'label',
        //  },
        scales: {
          xAxes: [{
						// barThickness: 100%,
          display: false,
          	stacked: true,
            gridLines: { display: false },
            }],

          yAxes: [{
          display: false,
          	stacked: true,
            }],
        }, // scales
        legend: {display: false}
    } // options,
   }
)
};
