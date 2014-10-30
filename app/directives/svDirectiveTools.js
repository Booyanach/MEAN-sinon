define([
    'directivesModule'
], function(directives) {

    var tools = function() {
        this.debug = true;

        this.restrict = 'EAC';
        this.template = '';
    };

    tools.prototype.extend = function() {
        var sv = this;
        angular.forEach(arguments, function(argument) {
            angular.extend(sv, argument);
        });
        return sv;
    };

    tools.prototype.checkDebug = function(elm) {
        if(this.debug) {
            var text = elm.html();
            elm.append('<div class="divider">Template</div><textarea class="directive-text"></textarea>');
            elm.find('.directive-text').val(text);
        }
    };

    tools.prototype.setDebug = function(val) {
        this.debug = val;
    };

    return new tools();
});