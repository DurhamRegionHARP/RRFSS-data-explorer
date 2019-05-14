/**
* Chartist.js plugin to display an error bar at each data point or bar.
*
*/
/* global Chartist */
(function (window, document, Chartist) {
  'use strict';
  
	var defaultOptions = {
    horizontal: false,
		confidenceLimit: {
			upper: [],
			lower: []
		}
	};

  Chartist.plugins = Chartist.plugins || {};
  Chartist.plugins.errorBars = function (options) { 
    options = Chartist.extend({}, defaultOptions, options);
    
    function addErrorBar(data, error){
      var errorLine = new Chartist.Svg('line', error, 'ct-error');
      data.element.parent().append(errorLine);
    }	
    return function errorBars(chart){
      if(chart instanceof Chartist.Line){
        chart.on('draw', function(data) {
          // When the bar event is triggered from drawing a bar on the chart
          if (data.type === 'point'){
            // TODO
            // Add a cap to each error bar
            data.ucl = data.axisY.chartRect.y1 - Chartist.projectLength( data.axisY.axisLength, options.confidenceLimit.upper[data.seriesIndex][data.index], data.axisY.bounds ); 
            data.lcl = data.axisY.chartRect.y1 - Chartist.projectLength( data.axisY.axisLength, options.confidenceLimit.lower[data.seriesIndex][data.index], data.axisY.bounds );
            var errData = {
              x1: data.hasOwnProperty('x1') ? [data.x1] : [data.x],
              y1: [data.lcl],
              x2: data.hasOwnProperty('x2') ? [data.x2] : [data.x],
              y2: [data.ucl]
            };
            addErrorBar(data, errData);
          }
        });	
      }
      else if(chart instanceof Chartist.Bar){
        chart.on('draw', function(data) {
          // When the bar event is triggered from drawing a bar on the chart
          if (data.type === 'bar'){
            // Toggle vertical or horizontal
            if (!options.horizontal){
              data.ucl = data.axisY.chartRect.y1 - Chartist.projectLength( data.axisY.axisLength, options.confidenceLimit.upper[data.seriesIndex][data.index], data.axisY.bounds ); 
              data.lcl = data.axisY.chartRect.y1 - Chartist.projectLength( data.axisY.axisLength, options.confidenceLimit.lower[data.seriesIndex][data.index], data.axisY.bounds );
              var errData = {
                x1: data.hasOwnProperty('x1') ? [data.x1] : [data.x],
                y1: [data.lcl],
                x2: data.hasOwnProperty('x2') ? [data.x2] : [data.x],
                y2: [data.ucl]
              };
              addErrorBar(data, errData);
            }
            else{
              data.ucl = data.axisX.chartRect.x1 + Chartist.projectLength( data.axisX.axisLength, options.confidenceLimit.upper[data.seriesIndex][data.index], data.axisX.bounds );
              data.lcl = data.axisX.chartRect.x1 + Chartist.projectLength( data.axisX.axisLength, options.confidenceLimit.lower[data.seriesIndex][data.index], data.axisX.bounds );
              // Do not allow the error bar to drop below the axis
              var errData = {
                x1: [data.lcl],
                y1: data.hasOwnProperty('y1') ? [data.y1] : [data.y],
                x2: [data.ucl],
                y2: data.hasOwnProperty('y2') ? [data.y2] : [data.y]
              };          
              addErrorBar(data, errData);
            }
          }
        });	
      }
    }
  };
} (window, document, Chartist));