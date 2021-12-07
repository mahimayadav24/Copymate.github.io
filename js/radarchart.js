var options = {
  series: [44, 55, 67, 83],
  chart: {
    height: 300,
    type: 'radialBar',
  },
  fill: {
    colors: ['rgba(153, 105, 252)', 'rgba(246, 103, 119)', 'rgba(59,204,198)', 'rgba(82,167,254)']
},
  plotOptions: {
    radialBar: {
      dataLabels: {
        name: {
          fontSize: '22px',
        },
        value: {
          fontSize: '16px',
        },
        total: {
          show: true,
          label: 'Total',
          formatter: function (w) {
            // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
          }
        }
      }
    }

  },
  labels: ['mon', 'tus', '', 'wed'],
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();