const mongoose = require("mongoose");
const ContactSchema = require("../model/crmModel");

const Contact = mongoose.model("Contact", ContactSchema);

const addNewContact = (req, res) => {
  let newContact = new Contact(req.body);
  newContact.save((err, contact) => {
    if (err) {
      res.send(err);
    }
    res.json(contact);
  });
};

const getContacts = (req, res) => {
  Contact.find({}, (err, contact) => {
    if (err) {
      res.send(err);
    }
    res.json(contact);
  });
};

const getContactwithId = (req, res) => {
  Contact.findById(req.params.contactId, (err, contact) => {
    if (err) {
      res.send(err);
    }
    res.json(contact);
  });
};

const updateContact = (req, res) => {
  Contact.findOneAndUpdate(
    { _id: req.params.contctId },
    req.body,
    { new: true },
    (err, contact) => {
      if (err) {
        res.send(err);
      }
      res.json(contact);
    }
  );
};

const deleteContact = (req, res) => {
  Contact.deleteOne({ _id: req.params.contactId }, (err, contact) => {
    if (err) {
      res.send(err);
    }
    res.send({ message: "Successfully deleted contact" });
  });
};

module.exports = getContacts;
module.exports = addNewContact;
module.exports = getContactwithId;
module.exports = updateContact;
module.exports = deleteContact;
