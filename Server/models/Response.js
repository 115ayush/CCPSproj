const mongoose = require('mongoose');

const ResponseSchema = new mongoose.Schema({
    name: String,
    hrname: String,
    hrNumber: String,
    hremail: String,
    response: String,
    date: Date,
    message: String,
    userId: mongoose.Schema.Types.ObjectId
});

module.exports = mongoose.model('Response', ResponseSchema);