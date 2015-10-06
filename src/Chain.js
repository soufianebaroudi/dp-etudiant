var Contact = Contact || {};

Contact = (function (self) {
    'use strict';

    self.Chain = function (_handler) {

        var handler;

        this.handler = function () {

          return handler;

        };

        this.processRequest = function (request) {

            handler.handle(request);

        };

        var init = function(_handler){

            handler = _handler;
        };

        init(_handler);

    };


    return self;

}(Contact || {}));