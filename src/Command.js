var Contact = Contact || {};

Contact = ( function (self) {
    "use strict";

    self.AddCommand = function () {

        var list = [];
        this.execute = function (contact) {

            var sing = Contact.Contacts.instance();
            sing.add(contact);
            list.push(contact);

        };

        this.undo = function () {

            var sing = Contact.Contacts.instance();
            var contact = list.pop();
            sing.remove(contact.id());
        };
    };

    self.RemoveCommand = function () {

        var list = [];

        this.execute = function(id) {

            var sing = Contact.Contacts.instance();
            var contact = sing.get(id);
            sing.remove(id);
            list.push(contact);


        };

        this.undo = function () {

            var contact = list.pop();
            var sing = Contact.Contacts.instance();
            sing.add(contact);

        };

    };
    return self;
}(Contact || {}) );