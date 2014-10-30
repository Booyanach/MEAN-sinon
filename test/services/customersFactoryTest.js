define('customersFactoryTest',[
    'customersFactory',
], function(factory) {
    describe('Unit: test', function() {
        var srvc, custFactory;
        // Module dependencies
        beforeEach(function() {
            module('app.services');
            var idMock = {
                id: 1,
                joined: '2000-12-02',
                name:'John',
                city:'Chandler',
                orderTotal: 9.9956,
                orders: [{
                    id: 1,
                    product: 'Shoes',
                    total: 9.9956
            }]},
            ordersMock = [{
                id: 1,
                product: 'Shoes',
                total: 9.9956
            }];
            inject(function($httpBackend) {
                var responseArr = [];
                responseArr.push(idMock);
                $httpBackend.whenGET('/customers').respond(responseArr);
                $httpBackend.whenGET('/customers/1').respond(idMock);
                $httpBackend.whenGET('/orders').respond(ordersMock);
            });
        });
        it('test this', function() {
            expect(true).toBe(true);
        });
    });
});