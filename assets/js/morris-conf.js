var Script = function () {



    $(function () {
      var tax_data = [
      ];
      Morris.Bar({
        element: 'hero-graph',
        data: [
          {year: '2014', w_done: 6240},
          {year: '2015', w_done: 6542},
          {year: '2016', w_done: 8056},
          {year: '2017', w_done: 10325},
        ],
        xkey: 'year',
        ykeys: ['w_done'],
        labels: ['USD'],
        barRatio: 0.4,
        xLabelAngle: 35,
        hideHover: 'auto',
        barColors: ['#2c3e50']
      });

      Morris.Donut({
        element: 'hero-donut',
        data: [
          {label: 'Food', value: 25 },
          {label: 'Dev Software', value: 40 },
          {label: 'Fuel', value: 25 },
          {label: 'Coffee', value: 10 }
        ],
          colors: ['#2ecc71', '#2c3e50', '#c0392b'],
        formatter: function (y) { return y + "%" }
      });

      Morris.Area({
        element: 'hero-area',
        data: [
          {period: '2013', y_inc: 1881, w_inc: 5670},
          {period: '2014', w_inc: 4820, y_inc: 1588},
          {period: '2015', w_inc: 15073, y_inc: 5175},
          {period: '2016', w_inc: 10687, y_inc: 2028},
          {period: '2017', w_inc: 8432, y_inc: 1791}
        ],

          xkey: 'period',
          ykeys: ['w_inc', 'y_inc'],
          labels: ['Average Income Worldwide', 'Your Average Income'],
          hideHover: 'auto',
          lineWidth: 1,
          pointSize: 5,
          lineColors: ['#2ecc71', '#2c3e50'],
          fillOpacity: 0.9,
          smooth: true
      });

      Morris.Bar({
        element: 'hero-bar',
        data: [
          {week: 'Monday', w_done: 25},
          {week: 'Tuesday', w_done: 10},
          {week: 'Wednesday', w_done: 15},
          {week: 'Thursday', w_done: 13},
          {week: 'Friday', w_done: 17},
          {week: 'Saturday', w_done: 20}
        ],
        xkey: 'week',
        ykeys: ['w_done'],
        labels: ['Percent'],
        barRatio: 0.4,
        xLabelAngle: 35,
        hideHover: 'auto',
        barColors: ['#2ecc71'],
      });

      new Morris.Line({
        element: 'examplefirst',
        xkey: 'year',
        ykeys: ['value'],
        labels: ['Value'],
        data: [
          {year: '2008', value: 20},
          {year: '2009', value: 10},
          {year: '2010', value: 5},
          {year: '2011', value: 5},
          {year: '2012', value: 20}
        ]
      });

      $('.code-example').each(function (index, el) {
        eval($(el).text());
      });
    });

}();
