const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  isCoordi: Number,
});

module.exports = mongoose.model('User', userSchema);
