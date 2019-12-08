var mongoose = require("mongoose");

var mongoDB = 'mongodb+srv://scissoroo_admin:scissoroo_admin@scissoroodb-vjd2z.mongodb.net/providers?retryWrites=true&w=majority';

mongoose.connect(mongoDB, { useNewUrlParser: true });

var db = mongoose.connection;

// User Schema
var ProviderSchema = new mongoose.Schema({
    Name:{
        type    : String
    },    
    Adresse:{
        type    : String
    }
});

//fetch data

var Provider = mongoose.model('providers', ProviderSchema);
module.exports = Provider;