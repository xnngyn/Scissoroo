var express = require('express');
var router = express.Router();
var mongodb = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017//scissoroo_admin:scissoroo_admin@scissoroodb-vjd2z.mongodb.net/test?retryWrites=true&w=majority';

// Get Hompage
router.get('/', function(req, res, next){
    res.render('index');
});

module.exports = router;