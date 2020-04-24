//  ----------------------------------------------------------------------------
  // ITALIA    ITALIA     ITALIA     ITALIA     ITALIA    ITALIA     ITALIA     ITALIA    CUBA    CUBA 
  // --------------------------------------------------------------------------------

//  SALERNO_CAMPANIA   Casos NUEVOS
var neg_data = [ 
 
    {"period": "2020-03-11", "a": 0, "a1": 23 },
    {"period": "2020-03-12", "a": 1, "a1": 25 },
    {"period": "2020-03-13", "a": 2, "a1": 39 },
    {"period": "2020-03-14", "a": 11, "a1": 30 },
    {"period": "2020-03-15", "a": 18, "a1": 53 },
    {"period": "2020-03-16", "a": 8, "a1": 67 },
    {"period": "2020-03-17", "a": 8, "a1": 60 },
    {"period": "2020-03-18", "a": 0, "a1": 0 },
    {"period": "2020-03-19", "a": 27, "a1": 182 },
    {"period": "2020-03-20", "a": 23, "a1": 97 },
    {"period": "2020-03-21", "a": 11, "a1": 91 },
    {"period": "2020-03-22", "a": 31, "a1": 73 },
    {"period": "2020-03-23", "a": 22, "a1": 63 },
    {"period": "2020-03-24", "a": 3, "a1": 63 },
    {"period": "2020-03-25", "a": 38, "a1": 80 },
    {"period": "2020-03-26", "a": 24, "a1": 97 },
    {"period": "2020-03-27", "a": 0, "a1": 123},
    {"period": "2020-03-28", "a": 63, "a1": 115 },
    {"period": "2020-03-29", "a": 16, "a1": 149 },
    {"period": "2020-03-30", "a": 15, "a1": 183 },
    {"period": "2020-03-31", "a": 3, "a1": 140},
    {"period": "2020-04-01", "a": 19, "a1": 139 },
    {"period": "2020-04-02", "a": 25, "a1": 225 },
    {"period": "2020-04-03", "a": 15, "a1": 221 },
    {"period": "2020-04-04", "a": 26, "a1": 151 },
    {"period": "2020-04-05", "a": 11, "a1": 132 },
    {"period": "2020-04-06", "a": 25, "a1": 98 },
    {"period": "2020-04-07", "a": 6, "a1": 90 },
    {"period": "2020-04-08", "a": 21, "a1": 120 },
    {"period": "2020-04-09", "a": 10, "a1": 76 },
    {"period": "2020-04-10", "a": 14, "a1": 98 },
    {"period": "2020-04-11", "a": 20, "a1": 75 },
    {"period": "2020-04-12", "a": 3, "a1": 87 },
    {"period": "2020-04-13", "a": 5, "a1": 66 },
    {"period": "2020-04-14", "a": 16, "a1": 99 },
    {"period": "2020-04-15", "a": 7, "a1": 38 },
    {"period": "2020-04-16", "a": 23, "a1": 80 },
    {"period": "2020-04-17", "a": 12, "a1": 64 },
    {"period": "2020-04-18", "a": 3, "a1": 37 },
    {"period": "2020-04-19", "a": 5, "a1": 41 },
    {"period": "2020-04-20", "a": 15, "a1": 45 },
    {"period": "2020-04-21", "a": 11, "a1": 61 },
    {"period": "2020-04-22", "a": 8, "a1": 50 },
    {"period": "2020-04-23", "a": 0, "a1": 53 },
  ];
  Morris.Line({
    element: 'italiaLinea',
    data: neg_data,
    xkey: 'period',
    ykeys: ['a', 'a1' ],
    lineWidth: 1,
    lineColors: ['blue', 'red'],
    resize: true,
    hideHover: true,
    labels: ['Salerno', 'Campania' ],
    units: '_Casos'
  });
  
  
   // CAMPANIA  Pos_actual  Curado  Fallecidos 
  Morris.Area({
    element: 'areaItalia',
    behaveLikeLine: true,
    data: [                   
     
             {"period":"2020-03-11", "a": 149, "a1": 4, "a2": 1},
             {"period":"2020-03-12", "a": 174, "a1": 4, "a2": 1},
             {"period":"2020-03-13", "a": 213, "a1": 5, "a2": 2},
             {"period":"2020-03-14", "a": 243, "a1": 23, "a2": 6},
             {"period":"2020-03-15", "a": 296, "a1": 28, "a2": 9},
             {"period":"2020-03-16", "a": 363, "a1": 28, "a2": 9},
             {"period":"2020-03-17", "a": 423, "a1": 28, "a2": 9},
             {"period":"2020-03-18", "a": 423, "a1": 28, "a2": 9},
             {"period":"2020-03-19", "a": 605, "a1": 30, "a2": 17},
             {"period":"2020-03-20", "a": 702, "a1": 30, "a2": 17},
             {"period":"2020-03-21", "a": 793, "a1": 29, "a2": 22},
             {"period":"2020-03-22", "a": 866, "a1": 41, "a2": 29},
             {"period":"2020-03-23", "a": 929, "a1": 48, "a2": 49},
             {"period":"2020-03-24", "a": 992, "a1": 53, "a2": 56},
             {"period":"2020-03-25", "a": 1072, "a1": 53, "a2": 74},
             {"period":"2020-03-26", "a": 1169, "a1": 58, "a2": 83},
             {"period":"2020-03-27", "a": 1292, "a1": 64, "a2": 98},
             {"period":"2020-03-28", "a": 1407, "a1": 76, "a2": 109},
             {"period":"2020-03-29", "a": 1556, "a1": 86, "a2": 117},
             {"period":"2020-03-30", "a": 1739, "a1": 88, "a2": 125},
             {"period":"2020-03-31", "a": 1871, "a1": 88, "a2": 133},
             {"period":"2020-04-01","a": 1976, "a1": 107, "a2": 148},
             {"period":"2020-04-02","a": 2140, "a1": 149, "a2": 167},
             {"period":"2020-04-03","a": 2352, "a1": 144, "a2": 181},
             {"period":"2020-04-04","a": 2496, "a1": 146, "a2": 186},
             {"period":"2020-04-05","a": 2621, "a1": 150, "a2": 189},
             {"period":"2020-04-06","a": 2698, "a1": 156, "a2": 204},
             {"period":"2020-04-07","a": 2765, "a1": 167, "a2": 216},
             {"period":"2020-04-08","a": 2859, "a1": 188, "a2": 221},
             {"period":"2020-04-09","a": 2873, "a1": 244, "a2": 227},
             {"period":"2020-04-10", "a": 2963,"a1": 248, "a2": 231 },
             {"period":"2020-04-11", "a": 3002,"a1": 277, "a2": 238 },
             {"period":"2020-04-12", "a": 3057,"a1": 305, "a2": 242 },
             {"period":"2020-04-13", "a": 3062,"a1": 360, "a2": 248 },
             {"period":"2020-04-14", "a": 3094,"a1": 415, "a2": 260 },
             {"period":"2020-04-15", "a": 3087,"a1": 442, "a2": 278 },
             {"period":"2020-04-16", "a": 3118,"a1": 483, "a2": 286 },
             {"period":"2020-04-17", "a": 3027,"a1": 631, "a2": 293 },
             {"period":"2020-04-18", "a": 3045,"a1": 643, "a2": 300 },
             {"period":"2020-04-19", "a": 3022,"a1": 703, "a2": 304 },
             {"period":"2020-04-20", "a": 3019,"a1": 746, "a2": 309 },
             {"period":"2020-04-21", "a": 2946,"a1": 872, "a2": 317 },
             {"period":"2020-04-22", "a": 2998,"a1": 860, "a2": 327 },
             {"period":"2020-04-23", "a": 2978,"a1": 928, "a2": 332 },
    ],
    xkey: 'period',
    ykeys: ['a', 'a1', 'a2'],
    labels: ['Pos_act', 'Curados', 'Fallecidos'],
    // lineColors: ['blue', '#CCCC00', '#CC3366'],
    lineColors: ['blue', '#CCCC00', 'red'],
    pointFillColors: ['darkblue', 'darkgreen', 'darkbred'],
    fillOpacity: 0.5,
    lineWidth:2,
    pointSize:1.5,
    hideHover: true,
    smooth: false,
    resize: true
    // xkey: 'x',
    // ykeys: ['y', 'z'],
    // labels: ['Y', 'Z']
  });