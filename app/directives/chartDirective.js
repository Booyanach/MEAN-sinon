define([
    'directivesModule',
    'd3'
], function(directives, d3) {

    function chartDirective($parse) {

        var chartCtrl = function ($scope, $element, $attrs, $transclude) {

            var chart = this;

            chart.create = function(config) {
                var data = config.data,
                    width = config.width,
                    barHeight = config.height,

                    x = d3.scale.linear().range([0, width]),
                    chart = d3.select(config.class).attr('width', width);

                x.domain([0, d3.max(data, function(d) { return d.value; })]);

                chart.attr('height', barHeight * data.length);

                return chart;
            };

            chart.color = function (d) {
                var retVal = d;
                if (d >= 100) {
                    var newD = String(d),
                        lastChar = newD.charAt(newD.length - 1),
                        firstChar = String.fromCharCode(97 + ( newD.charAt(0) -1 ));
                    retVal = firstChar + lastChar;
                }
                return retVal;
            };

            chart.directive = function() {
                return {
                    restrict: 'E',
                    template: ''
                };
            };
        };

        return {
            restrict: 'E',
            scope: {data: '=chartData'},
            template: '<sv></sv>',
            controller: chartCtrl,
            controllerAs: 'chart'
        };
    }

    directives.register
        .directive('chart', chartDirective);
});