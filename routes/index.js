var express = require('express');
var router = express.Router();
var mongodb = require('mongodb').MongoClient;
var assert = require('assert');

var url = 'mongodb://localhost:27017//scissoroo_admin:scissoroo_admin@scissoroodb-vjd2z.mongodb.net/test?retryWrites=true&w=majority';

// Get Hompage
router.get('/', function(req, res, next){
    res.render('index');
});

router.get('/get-data', function(req, res, next){

});

router.post('/insertuser', function(req, res, next){
var user = {
    
};
});

router.post('/insertprovider', function(req, res, next){
var prov = {
    
};
});

router.post('/updateuser', function(req, res, next){
var user = {

};
});

router.post('/updateprovider', function(req, res, next){
var prov = {

};
});

router.post('/deleteuser', function(req, res, next){
var user = {

};
});

router.post('/deleteprovider', function(req, res, next){
var prov = {
    
};
});
module.exports = router;