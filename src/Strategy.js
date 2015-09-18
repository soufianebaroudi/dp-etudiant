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

    self.ChangePhoneStrategy = function (_nom, _prenom, _tel1, _tel2) {

        var nom, prenom,tel1, tel2;



        var init = function (_nom, _prenom, _tel1, _tel2) {

            nom = _nom;
            prenom = _prenom;
            tel1 = _tel1;
            tel2 = _tel2;

        };

        init(_nom, _prenom, _tel1, _tel2);

    };

    return self;

}(Contact || {}));