/**
 * Mocks the behavior of a call to customersFactory
 * @return {Object} - helloWorldServiceMock - A mock of the object that
 * would be returned by customersFactory
 */
define('helloWorldServiceMock', [], function() {
    return {
        // The getCustomers function returns an object that imitates a promise

        getData: function(){
            return {
                // Success function, receives a callback and returns an array with
                // Objects that represent a customer
                success: function(cb) {
                    cb('success');
                    return this;
                },
                // Error function, receives a callback that returns data, status, headers, config
                // We're just returning strings
                error: function(cb) {
                    cb('a', 'b', 'c', 'd');
                    return this;
                }
            };
        }
    };
});