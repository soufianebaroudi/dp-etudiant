var Contact = Contact || {};

Contact = (function (self) {
    'use strict';

    self.MailCategory = {PERSO : 1, PRO : 2};

    self.Mail = function(_adress, _categorie ){

        var adress, categorie;

        this.address = function () {

            return adress;
        };

        this.category = function () {

            return categorie;
        };

       var init = function(_adress, _categorie){

            adress = _adress;
            categorie = _categorie;
        };

        init(_adress, _categorie);

    };

    return self;

}(Contact || {}));