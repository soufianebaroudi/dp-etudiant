var Contact = Contact || {};

Contact = (function (self) {
    'use strict';

    self.PhoneCategory = {PERSO : 1, PRO : 2};
    self.PhoneType = {PERSO : 1, PRO : 2};

    self.Phone = function (_number, _categorie, _type) {

        var number, categorie, type;

        this.number = function () {
            return number;
        };

        this.category = function () {
            return categorie;
        };

        this.type = function () {
            return type;
        };

        var init = function (_number, _categorie, _type) {
            number = _number;
            categorie = _categorie;
            type = _type;
        };

        init(_number, _categorie, _type);
    };

    return self;

}(Contact || {}));