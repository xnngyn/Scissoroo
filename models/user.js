var mongoose = require("mongoose");
var bcrypt = require('bcrypt');

var mongoDB = 'mongodb+srv://scissoroo_admin:scissoroo_admin@scissoroodb-vjd2z.mongodb.net/scissoroo?retryWrites=true&w=majority';

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

//authenticate input against database
UserSchema.statics.authenticate = function (email, pass, callback) {
    User.findOne({ email: email })
      .exec(function (err, user) {
        if (err) {
          return callback(err)
        } else if (!user) {
          var err = new Error('User not found.');
          err.status = 401;
          return callback(err);
        }
        bcrypt.compare(pass, user.pass, function (err, result) {
          if (result === true) {
            return callback(null, user);
          } else {
            return callback();
          }
        })
      });
  };

var User = mongoose.model('User', UserSchema);
module.exports = User;