define([
    'controllersModule',
    'blueBarsChartDirective'
], function(controller, chart) {

    function chartController($scope, $http) {
        var chart = this;

        $http.get('/d3req')
            .success(function(salesData) {
                chart.salesData = salesData;
            })
            .error(function(data, status, headers, config) {
                $log.log(data.error + ' ' + status);
            });
    }

    controller.register
      .controller('chartController', chartController);

});