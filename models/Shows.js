const { format } = require('date-fns');
var mongoose = require('mongoose');

//Define a schema 
var Schema = mongoose.Schema;

var ShowsSchema = new Schema({
    date: Date,
    venue: String,
    location: {
        city: String,
        state: String,
        country: String
    },
    url: String,
    admission: String // type of admissiong i.e. "free", "ticketed", "invite only"
});

ShowsSchema.virtual('date_formatted').get(function(){
    return format(this.date, 'MMMM D, YYYY');
});

// Compile model from schema
var ShowsModel = mongoose.model('Shows', ShowsSchema);


module.exports = ShowsModel;