"use strict";

var ContactTestCase = TestCase("ContactTestCase");

// task 1
ContactTestCase.prototype.testInitContact = function () {
    var contact = new Contact.Contact(Contact.Gender.MR, 'Eric', 'RAMAT');

    assertEquals(contact.gender(), Contact.Gender.MR);
    assertEquals(contact.firstName(), 'Eric');
    assertEquals(contact.lastName(), 'RAMAT');
};

ContactTestCase.prototype.testInitMail = function () {
    var mail = new Contact.Mail('eric.ramat@gmail.com',
        Contact.MailCategory.PERSO);

    assertEquals(mail.address(), 'eric.ramat@gmail.com');
    assertEquals(mail.category(), Contact.MailCategory.PERSO);
};

ContactTestCase.prototype.testInitPhone = function () {
    var phone = new Contact.Phone('0616642258', Contact.PhoneCategory.PERSO,
        Contact.PhoneType.MOBILE);

    assertEquals(phone.number(), '0616642258');
    assertEquals(phone.category(), Contact.PhoneCategory.PERSO);
    assertEquals(phone.type(), Contact.PhoneType.MOBILE);
};

// task 2
ContactTestCase.prototype.testBuilder = function () {
    var contact = new Contact.Builder().createMinimalContact(Contact.Gender.MR,
        'Eric', 'RAMAT');

    assertEquals(contact.gender(), Contact.Gender.MR);
    assertEquals(contact.firstName(), 'Eric');
    assertEquals(contact.lastName(), 'RAMAT');
};

ContactTestCase.prototype.testBuilderWithProfessionalMail = function () {
    var contact = new Contact.Builder().createContactWithProfessionalMail(
        Contact.Gender.MR, 'Eric', 'RAMAT', 'ramat@lisic.univ-littoral.fr');

    assertEquals(contact.gender(), Contact.Gender.MR);
    assertEquals(contact.firstName(), 'Eric');
    assertEquals(contact.lastName(), 'RAMAT');
    assertEquals(contact.mails().length, 1);
    assertEquals(contact.mails()[0].address(), 'ramat@lisic.univ-littoral.fr');
    assertEquals(contact.mails()[0].category(), Contact.MailCategory.PRO);
};

ContactTestCase.prototype.testBuilderWithProfessionalMobile = function () {
    var contact = new Contact.Builder().createContactWithProfessionalMobile(
        Contact.Gender.MR, 'Eric', 'RAMAT', '0616642258');

    assertEquals(contact.gender(), Contact.Gender.MR);
    assertEquals(contact.firstName(), 'Eric');
    assertEquals(contact.lastName(), 'RAMAT');
    assertEquals(contact.phones().length, 1);
    assertEquals(contact.phones()[0].number(), '0616642258');
    assertEquals(contact.phones()[0].category(), Contact.PhoneCategory.PRO);
    assertEquals(contact.phones()[0].type(), Contact.PhoneType.MOBILE);
};

// task 3
ContactTestCase.prototype.testContactsEmpty = function () {
    Contact.Contacts.instance().clear();

    assertEquals(Contact.Contacts.instance().size(), 0);
};

ContactTestCase.prototype.testContactsAdd = function () {
    var contact = new Contact.Builder().createMinimalContact(Contact.Gender.MR,
        'Eric', 'RAMAT');

    Contact.Contacts.instance().add(contact);
    assertEquals(Contact.Contacts.instance().size(), 1);
    assertEquals(Contact.Contacts.instance().get(contact.id()).gender(),
        Contact.Gender.MR);
    assertEquals(Contact.Contacts.instance().get(contact.id()).firstName(),
        'Eric');
    assertEquals(Contact.Contacts.instance().get(contact.id()).lastName(),
        'RAMAT');
};

ContactTestCase.prototype.testSingleton = function () {
    var contacts = Contact.Contacts.instance();
    var sameContacts = Contact.Contacts.instance();

    assertEquals(contacts, sameContacts);

    var contact = new Contact.Builder().createContactWithProfessionalMail(
        Contact.Gender.MR, 'Eric', 'RAMAT', 'ramat@lisic.univ-littoral.fr');

    contact.addPhone(new Contact.Phone('0616642258', Contact.PhoneCategory.PERSO,
        Contact.PhoneType.MOBILE));
    contacts.add(contact);
    assertEquals(Contact.Contacts.instance().size(), 2);
};

ContactTestCase.prototype.testContactsRemove = function () {
    var contacts = Contact.Contacts.instance().getFromName('Eric', 'RAMAT');

    assertEquals(contacts.length, 2);
    Contact.Contacts.instance().remove(contacts[0].id());
    assertEquals(Contact.Contacts.instance().size(), 1);

    var contact = Contact.Contacts.instance().getFromName('Eric', 'RAMAT');

    assertTrue(typeof contact === 'object');
};

ContactTestCase.prototype.testContactsGet = function () {
    var contacts = Contact.Contacts.instance().getFromName('Toto', 'RAMAT');

    assertEquals(contacts, null);
};

ContactTestCase.prototype.testContactsGet = function () {
    var contact = Contact.Contacts.instance().get('xxx');

    assertEquals(contact, null);
};

// task 4
ContactTestCase.prototype.testContactsSearchWithStrategy = function () {
    var contact = Contact.Contacts.instance().search(
        new Contact.FromNameSearchStrategy('Eric', 'RAMAT'));

    assertTrue(typeof contact === 'object');
    assertEquals(contact.firstName(), 'Eric');
    assertEquals(contact.lastName(), 'RAMAT');
};

ContactTestCase.prototype.testContactsSearchWithStrategy2 = function () {
    var contact = Contact.Contacts.instance().search(
        new Contact.FromMailSearchStrategy('ramat@lisic.univ-littoral.fr'));

    assertTrue(typeof contact === 'object');
    assertEquals(contact.firstName(), 'Eric');
    assertEquals(contact.lastName(), 'RAMAT');
};

ContactTestCase.prototype.testContactsSearchWithStrategy3 = function () {
    var contact = Contact.Contacts.instance().search(
        new Contact.FromPhoneSearchStrategy('0616642258'));

    assertTrue(typeof contact === 'object');
    assertEquals(contact.firstName(), 'Eric');
    assertEquals(contact.lastName(), 'RAMAT');
};

ContactTestCase.prototype.testContactsSearchWithStrategy4 = function () {
    var contact = Contact.Contacts.instance().search(
        new Contact.FromPhoneSearchStrategy('0321465676'));

    assertTrue(contact === null);
};

// task 5
ContactTestCase.prototype.testContactsUndo = function () {
    Contact.Contacts.instance().clear();

    var contact = new Contact.Builder().createMinimalContact(Contact.Gender.MR,
        'Eric', 'RAMAT');
    var command = new Contact.AddCommand();

    command.execute(contact);

    assertEquals(Contact.Contacts.instance().size(), 1);

    command.undo();

    assertEquals(Contact.Contacts.instance().size(), 0);
};

ContactTestCase.prototype.testContactsUndo2 = function () {
    var contact = new Contact.Builder().createMinimalContact(Contact.Gender.MR,
        'Eric', 'RAMAT');

    Contact.Contacts.instance().add(contact);

    assertEquals(Contact.Contacts.instance().size(), 1);

    var command = new Contact.RemoveCommand();

    command.execute(contact.id());

    assertEquals(Contact.Contacts.instance().size(), 0);

    command.undo();

    assertEquals(Contact.Contacts.instance().size(), 1);

    var newContact = Contact.Contacts.instance().get(contact.id());

    assertEquals(newContact.firstName(), 'Eric');
    assertEquals(newContact.lastName(), 'RAMAT');
};

// task 6
ContactTestCase.prototype.testContactsProxy = function () {
    var contacts1 = new Contact.Contacts2();
    var contacts2 = new Contact.Contacts2();
    var contacts3 = new Contact.Contacts2();
    var proxyCache = new Contact.ProxyCache([contacts1, contacts2, contacts3]);

    contacts1.add(new Contact.Builder().createContactWithProfessionalMobile(
        Contact.Gender.MR, 'Eric', 'RAMAT', '0616642258'));
    contacts2.add(new Contact.Builder().createContactWithProfessionalMobile(
        Contact.Gender.MR, 'Pierre', 'DUPONT', '0636532535'));
    contacts2.add(new Contact.Builder().createContactWithProfessionalMobile(
        Contact.Gender.MR, 'Jean', 'DUPOND', '0612343000'));
    contacts3.add(new Contact.Builder().createContactWithProfessionalMobile(
        Contact.Gender.MR, 'Jacques', 'DURAND', '0699785487'));

    var strategy = new Contact.FromPhoneSearchStrategy('0612343000');
    var contact = proxyCache.search(strategy);

    assertTrue(typeof contact === 'object');
    assertEquals(contact.firstName(), 'Jean');
    assertEquals(contact.lastName(), 'DUPOND');
    assertTrue(proxyCache.inCache(strategy));

    var contact2 = proxyCache.search(strategy);

    assertTrue(typeof contact2 === 'object');
    assertEquals(contact2.firstName(), 'Jean');
    assertEquals(contact2.lastName(), 'DUPOND');
    assertTrue(proxyCache.inCache(strategy));
};

// task 7
ContactTestCase.prototype.testContactsProxy = function () {
    var contacts1 = new Contact.Contacts2();
    var contacts2 = new Contact.Contacts2();
    var contacts3 = new Contact.Contacts2();
    var proxyCache = new Contact.ProxyCache([contacts1, contacts2, contacts3]);

    contacts1.add(new Contact.Builder().createContactWithProfessionalMobile(
        Contact.Gender.MR, 'Eric', 'RAMAT', '0616642258'));
    contacts2.add(new Contact.Builder().createContactWithProfessionalMobile(
        Contact.Gender.MR, 'Pierre', 'DUPONT', '0636532535'));
    contacts2.add(new Contact.Builder().createContactWithProfessionalMobile(
        Contact.Gender.MR, 'Jean', 'DUPOND', '0612343000'));
    contacts3.add(new Contact.Builder().createContactWithProfessionalMobile(
        Contact.Gender.MR, 'Jacques', 'DURAND', '0699785487'));

    var strategy = new Contact.FromPhoneSearchStrategy('0612343000');
    var contact = proxyCache.search(strategy);

    assertTrue(typeof contact === 'object');
    assertEquals(contact.firstName(), 'Jean');
    assertEquals(contact.lastName(), 'DUPOND');
    assertTrue(proxyCache.inCache(strategy));

    contacts2.change(new Contact.ChangePhoneStrategy('Jean', 'DUPOND',
        '0612343000', '0612343010'));

    var contact2 = proxyCache.search(strategy);

    assertEquals(contact2, null);
};
