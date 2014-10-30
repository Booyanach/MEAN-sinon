define([
    'controllersModule',
    'helloWorldService',
    'customTableDirective'
], function(controllers) {

    var helloWorldController = function(helloWorldService) {

        var helloWorld = this;

        helloWorld.name = 'SciVisum';
        helloWorld.hello = 'Hello';

        helloWorldService.getData().success(function(response) {
            helloWorld.ajaxResponse = response;
        });
    };

    controllers.register.controller('helloWorldController', helloWorldController);

});