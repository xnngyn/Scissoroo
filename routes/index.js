var express = require('express');
var router = express.Router();
var mongodb = require('mongodb').MongoClient;
var assert = require('assert');
const bcrypt = require('bcrypt');
var User = require('../models/user');

var url = 'mongodb+srv://scissoroo_admin:scissoroo_admin@scissoroodb-vjd2z.mongodb.net/scissoroo?retryWrites=true&w=majority';

// Get Homepage
router.get('/', function(req, res, next){
    res.render('index', {title: 'Home'});
});

// Get Results
router.get('/result', function(req, res, next){
    User.findById(req.session.userId)
    .exec(function (error, user) {
      if (error) {
        return next(error);
      } else {
        if (user === null) {
          var err = new Error('Not authorized! Go back!');
          err.status = 400;
          return next(err);
        } else {
          return res.render('Results');
        }
      }
    });
});
// Get Detailansicht
router.get('/detailansicht', function(req, res, next){
    res.render('Detailansicht');
});

// get all data
router.get('/get-data', function(req, res, next){

    var resultArray = [];
    mongodb.connect(url, { useNewUrlParser : true}, function(err, client) {
        assert.equal(null, err);
        var db = client.db('scissoroo');
        var cursor = db.collection('friseure').find();
        cursor.forEach(function(doc,err){
            assert.equal(null, err);
            resultArray.push(doc);
        }, function(){
            db.close();
            res.render("/Results", {items: resultArray});
        });
    });
});

// update
router.post('/updateuser', function(req, res, next){
var user = {

};
});

router.post('/updateprovider', function(req, res, next){
var prov = {

};
});



// delete
router.post('/deleteuser', function(req, res, next){
var user = {

};
});

router.post('/deleteprovider', function(req, res, next){
var prov = {

};
});


module.exports = router;