var Contact = Contact || {};

Contact = (function (self) {
    'use strict';

    self.Contacts2 = function () {

        var ListContacts = [];

        this.clear = function () {

            for(var i = 0; i< ListContacts.length; i++) {


                ListContacts.splice(i,1);

            }
        };

        this.size = function() {

            return ListContacts.length;
        };

        this.add = function (contact) {

            ListContacts.push(contact);
        };

        this.get = function (id) {

            for(var i = 0; i< ListContacts.length; i++) {

                if (ListContacts[i].id() == id)  {

                    return ListContacts[i];

                } return null;
            }
        };

        this.remove = function (id) {

            for(var i = 0; i< ListContacts.length; i++) {

                if (ListContacts[i].id() == id)  {

                    ListContacts.splice(i,1);

                }
            }

        };

        this.ListContact = function () {

            return ListContacts;
        };

        this.getFromName = function (nom, prenom) {

            var list = [];

            for (var i = 0; i< ListContacts.length; i++) {

                if(ListContacts[i].firstName() == nom && ListContacts[i].lastName() == prenom){

                    list.push(ListContacts[i]);
                }
            }

            if(list.length === 0) {return null;}
            else if (list.length === 1) {return list[0];}
            else {return list;}
        };

        this.search = function (strategy) {

            return strategy.search(this);
        };

        this.change = function(strategy) {

        };

        var init = function () {

        };

        init();
    };

    return self;

}(Contact || {}));