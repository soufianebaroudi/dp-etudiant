var Contact = Contact || {};

Contact = (function (self) {
    'use strict';

    self.Builder = function () {

        this.createMinimalContact = function (gender, nom, prenom) {

            return new Contact.Contact(gender, nom, prenom);

        };

        this.createContactWithProfessionalMail = function (gender, nom, prenom, adress) {

            var contact = new Contact.Contact(gender, nom, prenom);
            contact.addMail(new Contact.Mail(adress, Contact.MailCategory.PRO));
            return contact;

        };

        this.createContactWithProfessionalMobile = function (gender, nom, prenom, number) {

            var contact = new Contact.Contact(gender, nom, prenom);
            contact.addPhone(new Contact.Phone(number, Contact.PhoneCategory.PRO,
                Contact.PhoneType.MOBILE));
            return contact;
        };

        this.createContactWithTag = function (gender, nom, prenom, tag) {

            var contact = new Contact.Contact(gender, nom, prenom);
            contact.addTag(tag);
            return contact;
        };
    };

    return self;

}(Contact || {}));