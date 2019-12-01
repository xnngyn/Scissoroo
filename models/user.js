var mongoose = require("mongoose");

var mongoDB = 'mongodb+srv://scissoroo_admin:scissoroo_admin@scissoroodb-vjd2z.mongodb.net/scissoroo?keepAlive=true&poolSize=30&autoReconnect=true&socketTimeoutMS=360000&connectTimeoutMS=360000';

mongoose.connect(mongoDB, { useNewUrlParser: true });

var db = mongoose.connection;

// User Schema
var UserSchema = new mongoose.Schema({
    fullname:{
        type    : String,
        required: true
    },    
    lastname:{
        type    : String,
        required: true
    },
    birthdate:{
        type    : Date,
        required: true
    },
    sex:{
        type    : String,
        required: true
    },
    strasse:{
        type    : String,
        required: true
    },
    hausnr:{
        type    : Number,
        required: true
    },
    plz:{
        type    : Number,
        required: true
    },
    stadt:{
        type    : String,
        required: true
    },
    email:{
        type    : String,
        unique  : true,
        required: true
    },
    pass:{
        type    : String,
        required: true,
        bcrypt  : true,
        min: [7, 'password too short']
    }

});

module.exports = mongoose.model('User', UserSchema);