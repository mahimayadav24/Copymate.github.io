
        var options = {
            series: [{
                name: "AI based ",
                data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32]
            },
            {
                name: "Template based",
                data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15]
            },
            {
                name: 'Designed based',
                data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45]
            }
            ],
            chart: {
                height: 450,
                type: 'line',
                foreColor: '#fff',
                zoom: {
                    enabled: false
                },
            },
            dataLabels: {
                enabled: false
            },
            colors: ["#ECF9FF", "#FF7070", "#FEF98C"],
            stroke: {
                width: [3, 3, 3],
                curve: 'straight',

            },
            title: {
                // text: 'Page Statistics',
                align: 'left'
            
            },
            legend: {
                tooltipHoverFormatter: function (val, opts) {
                    return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''

                }
            },
            markers: {
                size: 0,
                hover: {
                    sizeOffset: 6
                }
            },
            xaxis: {
                categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan',
                    '10 Jan', '11 Jan'
                ],
            },
            tooltip: {
                y: [
                    {
                        title: {
                            formatter: function (val) {
                                return val + " (mins)"
                            }
                        }
                    },
                    {
                        title: {
                            formatter: function (val) {
                                return val + " per session"
                            }
                        }
                    },
                    {
                        title: {
                            formatter: function (val) {
                                return val;
                            }
                        }
                    }
                ]
            },
            grid: {
                borderColor: '#f1f1f1',
                strokeDashArray: 1,
                padding: {
                    bottom: 20,
                    top: 100
                }
            }
        };


        var chart = new ApexCharts(document.querySelector("#line"), options);
        chart.render();