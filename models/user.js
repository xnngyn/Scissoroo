var mongoose = require("mongoose");

mongoose.connect('mongodb+srv://scissoroo_admin:scissoroo_admin@scissoroodb-vjd2z.mongodb.net/test?retryWrites=true&w=majority');

var db = mongoose.connection;

// User Schema
var UserSchema = mongoose.Schema({
    
})