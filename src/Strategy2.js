var Contact = Contact || {};

Contact = (function (self) {
    'use strict';

    self.FromMailSearchStrategy = function (_mail) {

        var mail;

        this.search = function(contacts){

            var list = [];

            for (var i = 0; i< contacts.ListContact().length; i++) {

                var mails = contacts.ListContact()[i].mails();

                for(var j = 0; j < mails.length; j++ ){
                    if(mails[j].address() == _mail){

                        list.push(contacts.ListContact()[i]);
                    }
                }
            }
            if(list.length === 0) {return null;}
            else if (list.length === 1) {return list[0];}
            else {return list;}
        };

        var init = function (_mail) {
            mail = _mail;
        };

        init(_mail);
    };

    return self;

}(Contact || {}));