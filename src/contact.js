var Contact = Contact || {};

Contact = (function (self) {
    'use strict';

    self.Gender = {MR : 1, MME : 2};

    self.Contact = function (_gender, _firstname, _secondname) {

        var gender, firstName, secondName, mails = [], phones = [];

        this.gender = function () {

            return gender;

        };

        this.firstName = function () {

            return firstName;
        };

        this.lastName = function () {

            return secondName;
        };

        this.mails = function () {
            return mails;
        };

        this.phones = function () {
            return phones;
        };

        this.addMail = function (adress) {

            mails.push(new Contact.Mail(adress, Contact.MailCategory.PRO));

        };

        this.addPhone = function (number) {

            phones.push(new Contact.Phone(number, Contact.PhoneCategory.PRO, Contact.PhoneType.MOBILE));
        };


        var init = function(_gender, _firstname, _secondname){

            gender = _gender;
            firstName = _firstname;
            secondName = _secondname;
        };

        init(_gender, _firstname, _secondname);


    };

    return self;

}(Contact || {}))