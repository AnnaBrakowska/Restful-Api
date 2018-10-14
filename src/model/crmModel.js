const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ContactSchema = new Schema({
  first_name: { type: String, required: " Enter a first name" },
  last_name: { type: String, required: "Enter a last name" },
  email: { type: String },
  phone: { type: Number },
  created_date: { type: Date, default: Date.now }
});

module.exports = ContactSchema;
