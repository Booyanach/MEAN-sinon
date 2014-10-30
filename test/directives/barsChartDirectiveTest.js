define ('barsChartDirectiveTest', [
    'directivesModuleMock',
    'barsChartDirective'
], function() {
    var scope, elm;
    describe ('Unit: Chart', function() {
        initDirective();
        var svg;
        beforeEach(function() {
            svg = d3.select(elm.find('svg')[0]);
        });
        it ('Check if the chart container is created', function() {
            expect(svg).toBeDefined();
            expect(svg.length).toBe(1);
        });
        it ('Check if the chart is being drawn', function() {
            console.log(elm.find('rect'));
            var svg = d3.select(elm.find('svg')[0]);

            console.log('svg', svg);
        });
    });
    describe ('Unit: Creation of textarea', function() {
        initDirective();
        it ('Check if textarea exists and is populated', function() {
            var textarea = elm.find('textarea.directive-text');
            expect(textarea.length).not.toEqual(0);
            expect(textarea[0]).toEqual(elm.find('textarea.directive-text')[0]);
            // Make sure the textarea is populated
            expect(textarea.val()).not.toBe('');
        });
    });
    function initDirective() {
        beforeEach(module('app.directives'));
        beforeEach(function() {
            elm = compileTemplate('<bars-chart chart-data="test.salesData"></bars-chart>');
        });
        beforeEach(inject(function($httpBackend) {
            var d3Resp = [10, 20, 30, 40, 50, 60, 70, 80, 90, 90, 80, 70, 60, 50, 40, 30, 20, 10];
            $httpBackend.whenGET('/d3req').respond(d3Resp);
        }));
        afterEach(function() {
            $(elm[0]).remove();
            scope.$destroy();
        });
    }
    function compileTemplate(body) {
        var element = $('<div class="test-container"></div>');
        element.html(body);
        inject(function($rootScope, $compile) {
            scope = $rootScope.$new();
            $compile(element)(scope);
            $rootScope.$digest();
        });
        return element;
    }
});