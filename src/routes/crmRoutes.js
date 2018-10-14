const getContacts = require("../controllers/crmController");
const addNewContact = require("../controllers/crmController");
const getContactwithId = require("../controllers/crmController");
const updateContact = require("../controllers/crmController");
const deleteContact = require("../controllers/crmController");
const routes = app => {
  app
    .route("/contact")
    .get((req, res, next) => {
      // middleware
      console.log(`Request from: ${req.originalUrl}`);
      console.log(`Request type: ${req.method}`);
      next();
    }, getContacts)

    // POST endpoint
    .post(addNewContact);

  app
    .route("/contact/:contactId")
    // get specific contact
    .get(getContactwithId)

    // put request
    .put(updateContact)

    // delete request
    .delete(deleteContact);
};
module.exports = routes;
