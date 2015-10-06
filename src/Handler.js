var Contact = Contact || {};

Contact = (function (self) {
    'use strict';

    self.Handler = function (_contacts,_handler) {

        var contacts;
        var handler;

        this.handle = function (requet) {

             var req = requet.showContact();

            if(contacts.size() == 0) {

               contacts.add(req);
            }

            else if (contacts.search(new Contact.FromTagSearchStrategy(req.tag())) !== null) {

                   contacts.add(req);
            }

            else if (handler !== null ) {

                handler.handle(requet);
              }

        };

        var init = function(_contacts,_handler){

            contacts = _contacts;
            handler = _handler;

        };

        init(_contacts, _handler);

    };


    return self;

}(Contact || {}));