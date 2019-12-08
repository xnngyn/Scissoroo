var mongoose = require("mongoose");

var mongoDB = 'mongodb+srv://scissoroo_admin:scissoroo_admin@scissoroodb-vjd2z.mongodb.net/scissoroo?retryWrites=true&w=majority';

mongoose.connect(mongoDB, { useNewUrlParser: true });

var db = mongoose.connection;

// User Schema
var ProviderSchema = new mongoose.Schema({
    Bezeichnung:{
        type    : String
    },    
    Preis:{
        type    : String
    }
});

//fetch data


var Provider = mongoose.model('Service', ProviderSchema);
module.exports = Provider;