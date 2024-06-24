const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const companySchema = new Schema({
  name: String,
  hrname: String,
  Description: String,
  hrEmail: String, // Adjusted to match hrEmail from Excel
  memMail: String,
  isContacted: Boolean
});

const Company = mongoose.model('Company', companySchema, 'companies');

module.exports = Company;
