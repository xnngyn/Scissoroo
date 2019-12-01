var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Provider = require('../models/provider');
var bcrypt = require('bcrypt');
const expressValidator = require('express-validator');

// Get Sign Up Page
router.get('/signup', function(req, res, next){
    res.render('SignUp',{
        'title': 'Register'
    });
});
// Get Sign In Page
router.get('/signin', function(req, res, next){
    res.render('SignIn',{
        title: 'Login'
    });
});
// Get Sign Up Provider Page
router.get('/signupprovider', function(req, res, next){
    res.render('SignUpProvider',{
        title: 'Register'
    });
});
// Get Logged In Page
router.get('/loggedIn', function(req, res, next){
    res.render('indexeingeloggt');
});
// Get Erfolgreiche Registrierung
router.get('/registrationsuccessfull', function(req, res, next){
    res.render('erfolgreg');
});

// insert user
router.post('/insertuser', function(req, res, next){
    //Get Form Values
    var fname = req.body.fname;
    var lname = req.body.lname;
    var bdate = req.body.gdatum;
    var sex = req.body.sex;
    var strasse = req.body.strasse;
    var hausnr = req.body.hausnr;
    var plz = req.body.plz;
    var stadt = req.body.plz;
    var email = req.body.email;
    var pass = req.body.pass;

        var newUser = new User({
            fullname: fname,
            lastname: lname,
            birthdate: bdate,
            sex: sex,
            strasse: strasse,
            hausnr: hausnr,
            plz: plz,
            stadt: stadt,
            email: email,
            pass: pass
        });

        var salt = 10;

		bcrypt.hash(newUser.password,salt, function(err,hash) {
			if(err) throw err;

			//Set Hashed Password
			newUser.password = hash;

            // create new User
            newUser.save(function(err, user){
                if(err){
                    return next(err)
                 } else {
                    return res.redirect('/users/registrationsuccessfull');
                }
        });


});

    
    // insert provider
    router.post('/insertprovider', function(req, res, next){
    var prov = {
        
    };
    });

    module.exports = router;