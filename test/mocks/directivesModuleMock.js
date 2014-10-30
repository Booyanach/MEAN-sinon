/**
 * Mock for loading the controllers Module
 * This is necessary since jasmine doesn't really run the .config of a module
 * so we can't exactly append providers to the public object of the module
 * @return {module} - controllers - the controllers module
 */
define('directivesModuleMock', [], function() {
    // Override the controllersModule so we can use it
    define('directivesModule', ['angular'], function(ng) {
        'use strict';
        var module = ng.module('app.directives', []);
        module.register = {
            directive: module.directive,
            decorator: module.directive
        };
        return module;
    });
});