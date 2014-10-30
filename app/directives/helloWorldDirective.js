define([
    'directivesModule'
], function(directives) {

    var helloWorld = function() {

        var directiveLink = function($scope, $element) {
            var directiveWatch = function(value) {
                if (value) {
                    $scope.directive = value;
                }
            };
            $scope.$watch('data', directiveWatch);
        };

        return {
            scope: {data: "=helloWorldData"},
            restrict: 'E',
            controller: directiveLink,
            templateUrl: 'app/directives/templates/helloWorldDirective.html',
            controllerAs: 'directive'
        };
    };
    directives.register.directive('helloWorld', helloWorld);
});