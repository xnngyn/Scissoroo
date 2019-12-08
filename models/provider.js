var mongoose = require("mongoose");

var mongoDB = 'mongodb+srv://scissoroo_admin:scissoroo_admin@scissoroodb-vjd2z.mongodb.net/scissoroo?retryWrites=true&w=majority';

mongoose.connect(mongoDB, { useNewUrlParser: true });

var db = mongoose.connection;

// User Schema
var ProviderSchema = new mongoose.Schema({
    Name:{
        type    : String
    },    
    Adresse:{
        type    : String
    },
    Email:{
        type    : String
    },
    Telefon:{
        type    : Number
    },
    Webseite:{
        type    : String
    },
    Mitarbeiter:{
        type    : Number
    },
    Parkplaetze:{
        type    : Number
    },
    Montag:{
        type    : String
    },
    Dienstag:{
        type    : String
    },
    Mittwoch:{
        type    : String
    },
    Donnerstag:{
        type    : String
    },
    Freitag:{
        type    : String
    },
    Samstag:{
        type    : String
    },
    Sonntag:{
        type    : String
    },
}, { collection: 'friseure'});

//fetch data

var Provider = mongoose.model('Provider', ProviderSchema);
module.exports = Provider;