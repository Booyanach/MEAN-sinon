 require.config({
 // alias libraries paths
    baseUrl: 'app',
    paths: {
        'd3': '../scripts/d3',
        'jquery': '../scripts/jquery',
        'angular': '../scripts/angular',
        'domReady': '../scripts/domReady',
        'stacktrace': '../scripts/stacktrace',
        'angularRoute': '../scripts/angular-route',
        'angularAnimate': '../scripts/angular-animate',

        // Modules
        'servicesModule': './services/module',
        'directivesModule': './directives/module',
        'controllersModule': './controllers/module',

        // Controllers - Add all controllers bellow this line

        // Directives - Add all directives bellow this line
        'helloWorldDirective': './directives/helloWorldDirective',
        'customTableDirective': './directives/customTableDirective',

        // Services - Add all services bellow this line
        'routeResolver': './services/routeResolver',
        'helloWorldService': './services/helloWorldService'
    },
    // angular does not support AMD out of the box, put it in a shim
    shim: {
        'angular': {
            deps: ['jquery'],
            exports: 'angular'
        },
        'angularRoute': ['angular'],
        'angularAnimate': ['angular']
    },
    // Attach the application
    deps: ['./bootstrap']
});