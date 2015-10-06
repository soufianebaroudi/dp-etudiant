var Contact = Contact || {};

Contact = (function (self) {
    'use strict';

    self.Gender = {MR : 1, MME : 2};

    self.Contact = function (_gender, _firstname, _secondname) {

        var gender, firstName, secondName, tag, mails = [], phones = [];

        this.gender = function () {

            return gender;

        };

        this.firstName = function () {

            return firstName;
        };

        this.lastName = function () {

            return secondName;
        };

        this.tag = function () {

            return tag;
        };

        this.id = function () {

                'xxxx -xxxx -xxxx -xxxx - xxxx'. replace (/x/g, function (c) {
                 var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8) ;
                 return v. toString (16) ;
                }) ;
        };

        this.mails = function () {
            return mails;
        };

        this.phones = function () {
            return phones;
        };

        this.addMail = function (mail) {

            mails.push(mail);

        };

        this.addPhone = function (phone) {

            phones.push(phone);
        };

        this.addTag = function (_tag) {

            tag = _tag;

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