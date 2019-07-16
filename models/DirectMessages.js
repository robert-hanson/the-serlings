var mongoose = require('mongoose');

//Define a schema 
var Schema = mongoose.Schema;

var DirectMessagesSchema = new Schema({
    name: String,
    email: String,
    message: String,
    submitted_on: Date
});

// Compile model from schema
var DirectMessagesModel = mongoose.model('DirectMessages', DirectMessagesSchema);


module.exports = DirectMessagesModel;