var express = require('express');
var router = express.Router();
var mongodb = require('mongodb').MongoClient;
var assert = require('assert');
const bcrypt = require('bcrypt');

var url = 'mongodb+srv://scissoroo_admin:scissoroo_admin@scissoroodb-vjd2z.mongodb.net/test?retryWrites=true&w=majority';

// Get Homepage
router.get('/', function(req, res, next){
    res.render('index');
});
// Get Sign Up Page
router.get('/signup', function(req, res, next){
    res.render('SignUp');
});
// Get Sign In Page
router.get('/signin', function(req, res, next){
    res.render('SignIn');
});
// Get Sign Up Provider Page
router.get('/signupprovider', function(req, res, next){
    res.render('SignUpProvider');
});
// Get Results
router.get('/results', function(req, res, next){
    res.render('Results');
});
// Get Detailansicht
router.get('/detailansicht', function(req, res, next){
    res.render('Detailansicht');
});


// get all data
router.get('/get-data', function(req, res, next){

});



// insert user
router.post('/insertuser', async(req, res) =>{
try{
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.pass, salt);
    var user = {
        fullname: req.body.fname,
        lastname: req.body.lname,
        birthdate: req.body.gdatum,
        sex: req.body.geschlecht,
        strasse: req.body.strasse,
        hausnr: req.body.hausnr,
        plz: req.body.plz,
        stadt: req.body.stadt,
        email: req.body.email,
        pass: hashedPassword
    }
} catch {
    res.status.send();
}

mongodb.connect(url, { useNewUrlParser : true}, function(err, client) {
    assert.equal(null, err);
    var db = client.db('scissoroo');
    db.collection('user').insertOne(user, function(err, result) {
      assert.equal(null, err);
      console.log('Item inserted');
      client.close();
    });
  });

  res.redirect('/');
});


// insert provider
router.post('/insertprovider', function(req, res, next){
var prov = {
    
};
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