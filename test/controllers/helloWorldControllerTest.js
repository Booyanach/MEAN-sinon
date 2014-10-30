define('helloWorldControllerTest', [
    'angularMocks',
    'serviceModuleMock',
    'directivesModuleMock',
    'controllerModuleMock',
    'helloWorldServiceMock',
    'helloWorldController'
], function(mocks, serviceMod, directivesMod, controllerMod, helloWorldServiceMock) {
    var scope, ctrl;

    describe('Unit: controller Test', function() {

        // Initiate the modules
        beforeEach(function() {
            module('app.services');
            module('app.directives');
            module('app.controllers');
        });

        // Inject the Angular dependencies that the controller requires to be invoked
        beforeEach(inject(function($controller, $log, $window) {
            ctrl = $controller('helloWorldController', {
                'helloWorldService': helloWorldServiceMock
            });
        }));

        // Since we're using the controllerAs approach we need to test relativelly
        // to the controller instead of the $scope
        it("should have the name set and the ajaxResponse should be set:", function() {
            expect(ctrl.name).toEqual('SciVisum');
            expect(ctrl.ajaxResponse).toEqual('success');
        });
    });
});