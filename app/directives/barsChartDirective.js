define([
    'directivesModule',
    'chartDirective'
], function (directives) {

    function barsChart ($parse) {

        var barLink = function (scope, elem, attrs) {
            var config = angular.fromJson(scope.config),
            // Load up the Controller of the directive we want to extend
                chartCtrl = elem.find('chart').isolateScope().chart;

            // sv.checkDebug(elem);        // Check if we're in the debug page (showing the code)

            /**
             * Checks what fill to use
             * @param  {int}    - val   - the value
             * @return {string} -       - the hex color string
             */
            var checkFill = function(val) {
                return config && config.hover ? config.hover : chartCtrl.color(val) + chartCtrl.color(val) + chartCtrl.color(val);
            };
            /**
             * callBack for scope.$watch
             * @param  {Array}  - value - value with the data
             */
            var dataWatch = function (value) {
                if (value) {
                    var width = config && config.width ? config.width : '100%',
                        barHeight = config && config.height ? config.height : 15,
                        chart = chartCtrl.create({
                        data: value,
                        class: '.barChart',
                        width: width,
                        height: barHeight
                    }),
                        bar = chart.selectAll('g')
                        .data(value)
                        .enter().append('g')
                        .attr('transform', function(d, i) {
                            return 'translate(0,' + i * barHeight + ')';
                        });

                    bar.append('rect')
                    .on('mouseover', function(d) {
                            d3.select(this).style('fill', checkFill(d));
                        })
                    .on('mouseout', function(d) {
                            d3.select(this).style('fill', config.color);
                        })
                        .attr('width', function(d) { return d + '%'; })
                        .transition().ease('elastic')
                        .attr('height', barHeight - 1)
                        .attr('style', function(d) {
                            if (config && config.color) {
                                return 'fill:' + config.color;
                            } else {
                                return 'fill:#' + chartCtrl.color(d) + chartCtrl.color(d) + chartCtrl.color(d);
                            }
                        });

                    bar.append('text')
                        .attr('x', '0.2%')
                        .attr('y', barHeight / 2)
                        .attr('dy', '.35em')
                        .attr('style', function(d) {
                            return 'fill:white';
                        })
                        .text(function(d) {
                            return d;
                        });
                }

                angular.element('loader').remove();
            };

            // Since scope.data is only returned after the ajax call is successful, we need to watch
            // it's value and only draw the chart when this data has been retrieved
            scope.$watch('data', dataWatch);
        };

        return {
            restrict: 'E',
            require: [
            // '?chart'
            ],
            templateUrl: 'app/directives/templates/barChart.html',
            scope: {data: '=chartData'},
            link: barLink
        };
    }

    directives.register.directive('barsChart', barsChart);
});