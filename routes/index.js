var express = require('express');
var router = express.Router();
var mongodb = require('mongodb').MongoClient;
var assert = require('assert');
const bcrypt = require('bcrypt');
var User = require('../models/user');

var url = 'mongodb+srv://scissoroo_admin:scissoroo_admin@scissoroodb-vjd2z.mongodb.net/scissoroo?retryWrites=true&w=majority';

// Get Homepage
router.get('/', function(req, res, next){
    User.findById(req.session.userId)
    .exec(function (error, user) {
      if (error) {
        return next(error);
      } else {
        if (user === null) {
          return res.render('index', {'title': 'Home'});
        } else {
          return res.render('indexeingeloggt', {'title' : 'Home'});
        }
      }
    });
});

module.exports = router;