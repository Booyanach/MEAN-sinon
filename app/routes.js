define([
    './app',
    'routeResolver'
    ], function(app, resolver) {
    'use strict';

    app.config(['$routeProvider', '$controllerProvider', '$provide', '$httpProvider', 'routeResolverProvider',
        function($routeProvider, $controllerProvider, $provide, $httpProvider, routeResolverProvider) {
        app.register = {
            controller: $controllerProvider.register,
            service: $provide.service,
            factory: $provide.factory
        };

        var route = routeResolverProvider.route;

        $routeProvider
            .when('/', route.resolve('helloWorld'))
            .when('/chart', route.resolve('chart'))
            .otherwise({ redirectTo: '/' });
    }]);

});