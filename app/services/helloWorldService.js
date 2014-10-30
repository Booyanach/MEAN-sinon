define(['servicesModule'], function(services) {

    var helloWorldService = function($http) {

        var service = {};

        service.$get = function() {};

        service.getData = function() {
            return $http.get('/data');
        };

        return service;

    };

    helloWorldService.$inject = ['$http'];

    services.register.service('helloWorldService', helloWorldService);

});