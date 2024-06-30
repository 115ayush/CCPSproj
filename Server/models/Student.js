const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: String,
  post: String,
  Discipline: String,
  email: String
});

module.exports = mongoose.model('Student', studentSchema);
