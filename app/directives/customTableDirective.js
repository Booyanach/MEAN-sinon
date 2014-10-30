define([
    'directivesModule',
    'helloWorldDirective'
], function(directives, hw) {
    var customTable = function($delegate) {
        var delegate = $delegate[0],
            controller = delegate.controller;

            delegate.compile = function() {
                return function(scope, elem, attrs) {
                    scope.tClass = 'red';
                    controller.apply(delegate, arguments);
                };
            };
            console.log($delegate);
        return $delegate;
    };

    directives.register.decorator('helloWorldDirective', customTable);
});