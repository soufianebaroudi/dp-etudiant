
var Contact = Contact || {};

Contact = (function (self) {
    'use strict';

    self.FromPhoneSearchStrategy = function (_phone) {

        var phone;

        this.search = function(contacts){

            var list = [];

            for (var i = 0; i < contacts.ListContact().length; i++ ) {

                var phones = contacts.ListContact()[i].phones();
                for (var j = 0; j< phones.length; j++) {

                    if (phones[j].number() == _phone) {

                        list.push(contacts.ListContact()[i]);
                    }
                }

            }

            if(list.length == 0) {return null;}
            else if(list.length == 1) {return list[0];}
            else {return list;}



        };

        var init = function (_phone) {
            phone = _phone;
        };

        init(_phone);
    };

    return self;

}(Contact || {}));