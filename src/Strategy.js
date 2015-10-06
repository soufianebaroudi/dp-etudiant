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

    self.FromTagSearchStrategy = function (_tag) {

        var tag;

        this.search = function(contacts){

            var list = [];

            for (var i = 0; i< contacts.ListContact().length; i++) {

                var contact = contacts.ListContact()[i];
                if(contact.tag() == _tag){

                    list.push(contact);
                }
            }

            if(list.length === 0) {return null;}
            else if (list.length === 1) {return list[0];}
            else {return list;}
        };

        var init = function (_tag) {
            tag = _tag;

        };

        init(_tag);
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


    return self;

}(Contact || {}));