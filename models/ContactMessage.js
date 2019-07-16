var mongoose = require('mongoose');

//Define a schema 
var Schema = mongoose.Schema;

var ContactMessageSchema = new Schema({
    name: String,
    email: String,
    comment: String,
    submitted_on: Date
});

// Compile model from schema
var ContactMessageModel = mongoose.model('ContactMessage', ContactMessageSchema);


module.exports = ContactMessageModel;