var Contact = Contact || {};

Contact = (function (self) {
    'use strict';

    self.Builder = function () {

        this.createMinimalContact = function (gender, nom, prenom) {

            return new Contact.Contact(gender, nom, prenom);

        };

        this.createContactWithProfessionalMail = function (gender, nom, prenom, adress) {

            var contact = new Contact.Contact(gender, nom, prenom);
            contact.addMail(adress);
            return contact;

        };

        this.createContactWithProfessionalMobile = function (gender, nom, prenom, number) {

            var contact = new Contact.Contact(gender, nom, prenom);
            contact.addPhone(number);
            return contact;
        };

    };

    return self;

}(Contact || {}));