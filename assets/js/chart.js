document.addEventListener("DOMContentLoaded", function () {
  var Meeting_Invitation_Response = {
    series: [
      { name: 'مرفوضة', data: [7600, 8500, 1010, 980] },
      { name: 'معلقه', data: [7600, 8500, 1010, 980] },
      { name: 'مقبول', data: [4400, 5500, 5700, 5600] }
    ],
    chart: {
      type: 'bar',
      height: 350,
      toolbar: { show: false }
    },
    colors: ["#FF727C", "#FFC261", "#65ACFF"],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '40%',
        borderRadius: 4,
        borderRadiusApplication: 'end'
      },
    },
    dataLabels: { enabled: false },
    stroke: { show: false },
    xaxis: {
      categories: ['2025/34 2025/7/17', '2025/34 2025/7/17', '2025/34 2025/7/17', '2025/34 2025/7/17'],
      fontFamily: 'tajawal',
      axisBorder: { show: false },
      labels: {
        style: {
          colors: "#8F92A1",
          fontSize: '14px',
          fontFamily: 'Tajawal',
          fontWeight: 400,
        },
        rotate: 0,
      },
      crosshairs: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      opposite: true,
      labels: {
        style: {
          colors: ["#8F92A1"],
          fontSize: '14px',
          fontFamily: 'Tajawal',
          fontWeight: 400,
        },
      },
      axisBorder: { show: false },
    },
    fill: { opacity: 1 },
    grid: {
      show: true,
      borderColor: "#E0E0E0",
      strokeDashArray: 5,
    },
    legend: {
      show: true, // نخليها تظهر علشان نقدر ناخد DOM الخاص بيها
      position: 'top',
      horizontalAlign: 'left',
      fontSize: '14px',
      fontFamily: 'tajawal',
      fontWeight: 500,
      markers: {
        size: 6,
        shape: 'circle',
        itemMargin: {
          horizontal: 0,
          vertical: 0,
        },
      },
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands"
        }
      }
    }
  };

   var missions = {
    series: [75, 25],
    labels: ['الطلبات المقبولة', 'الطلبات المرفوضة'],
    chart: {
      type: 'donut',
      height: 300,
    },
    colors: ["#28B6BE", "#FF5757"],
    dataLabels: {
      enabled: false
    },
    plotOptions: {
      pie: {
        expandOnClick: false,
        donut: {
          size: '70%',
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: '14px',
            },
            value: {
              show: true,
              fontSize: '40px',
              color: '#28B6BE',
              fontWeight: 800,
              fontFamily: 'Tajawal',
            },
            total: {
              show: true,
              label: 'العدد الكلي',
              fontSize: '16px',
              fontWeight: 500,
              fontFamily: 'Tajawal',
              color: '#8F92A1',
              formatter: function (w) {
                const total = w.globals.seriesTotals.reduce((a, b) => a + b, 0);
                return total;
              }
            }
          }
        }
      }
    },
  stroke: {
    show: false
  },
  legend: {
    show: true, 
    position: 'bottom',
    horizontalAlign: 'center',
    fontSize: '14px',
    fontFamily: 'Tajawal',
    fontWeight: 500,
    markers: {
        size: 6,
        shape: 'circle',
    },
    itemMargin: {
      horizontal: 0,
      vertical: 0,
    },
    onItemHover: {
       highlightDataSeries: false
    },
    formatter: function (seriesName, opts) {
      // نحصل على قيمة السلسلة حسب الـ index
      const index = opts.seriesIndex;
      const value = opts.w.globals.series[opts.seriesIndex];
      return `${seriesName} (${value})`;
    }
  }
   };


  let chart1 = new ApexCharts(document.querySelector("#Meeting_Invitation_Response"), Meeting_Invitation_Response);
  chart1.render().then(() => {
    const legend = document.querySelector("#Meeting_Invitation_Response .apexcharts-legend");
    const legendSection = document.getElementById("legend-section");
    console.log(legendSection);
    
    if (legend && legendSection) {
      legendSection.appendChild(legend);
    }
  });

    var missions = new ApexCharts(document.querySelector("#missions"), missions);
    missions.render();
});