var Contact = Contact || {};

Contact = (function (self) {
    'use strict';

    self.Gender = {MR : 1, MME : 2};

    self.Contact = function (_gender, _firstname, _secondname) {

        var gender, firstName, secondName;

        this.gender = function () {

            return gender;

        };

        this.firstName = function () {

            return firstName;
        };

        this.lastName = function () {

            return secondName;
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