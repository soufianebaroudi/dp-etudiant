var Contact = Contact || {};

Contact = (function (self) {
    'use strict';

    self.FromNameSearchStrategy = function (_nom, _prenom) {

        var nom, prenom;

        this.search = function(contacts){

            var list = [];

            for (var i = 0; i< contacts.ListContact().length; i++) {

                    var contact = contacts.ListContact()[i];
                    if(contact.firstName() == _nom && contact.lastName() == _prenom){

                        list.push(contact);
                    }
            }

            if(list.length === 0) {return null;}
            else if (list.length === 1) {return list[0];}
            else {return list;}
        };

        var init = function (_nom, _prenom) {
            nom = _nom;
            prenom = _prenom;
        };

        init(_nom, _prenom);
    };

    return self;

}(Contact || {}));