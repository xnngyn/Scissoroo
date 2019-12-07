var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Provider = require('../models/provider');
var bcrypt = require('bcrypt');
var dateFormat = require('dateformat');

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
          // load all data      
          var provider = new Provider().db.collection('friseure');
          provider.find({}, function(err, foundData){
            if(err){
              console.log(err);
              res.status(500).send();
            } else {
              res.send(foundData.Name);
            }
          });
          //return res.render('Results');
        }
      }
    });
});

// Get Profile Page
router.get('/profile', function(req, res, next){
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
          var curruser = user;
          return res.render('Profile',{
            fname: curruser.fullname,
            lname: curruser.lastname,
            gdate: dateFormat(curruser.birthdate, "dd.mm.yyyy"),
            strasse: curruser.strasse,
            nr: curruser.hausnr,
            plz: curruser.plz,
            stadt: curruser.stadt,
            email: curruser.email
          });
        }
      }
    });
});
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
// Get Passwort vergessen Page
router.get('/forgot', function(req, res, next){
    res.render('Passverg');
})
// Get Sign Up Provider Page
router.get('/signupprovider', function(req, res, next){
    res.render('SignUpProvider',{
        title: 'Register'
    });
});
// Get Logged In Page
router.get('/loggedIn', function(req, res, next){
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
          return res.render('indexeingeloggt');
        }
      }
    });
    
});
// Get Erfolgreiche Registrierung
router.get('/registrationsuccessfull', function(req, res, next){
    res.render('erfolgreg');
});
// Get Erfolgreiche Registrierung
router.get('/editprofile', function(req, res, next){
  res.render('ProfileBearbeiten');
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
    var stadt = req.body.stadt;
    var email = req.body.email;
    var pass = req.body.pass;

    if(fname && lname && bdate && strasse && hausnr && plz && stadt && email && pass){
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

		bcrypt.hash(newUser.pass, salt, function(err,hash) {
			if(err) throw err;

			//Set Hashed Password
			newUser.pass = hash;

            // create new User
            newUser.save(function(err, user){
                if(err){
                    return next(err)
                 } else {
                    return res.redirect('/users/registrationsuccessfull');
                }
            });
        });
    } else {
        var err = new Error('Alle Felder müssen ausgefüllt werden');
        err.status = 400;
        return next(err)
    }
});

    // Login
    router.post('/login', function(req, res, next){
        if(req.body.emaillogin && req.body.passlogin){
            User.authenticate(req.body.emaillogin, req.body.passlogin, function(error, user){
                if(error || !user){
                    var err = new Error('Falsche Email oder Passwort');
                    err.status = 401;
                    return next(err);
                } else {
                    req.session.userId = user._id;
                    return res.redirect('/users/loggedIn');
                }
            })
        }
    });
    // Logout
    router.get('/logout', function (req, res, next) {
        if (req.session) {
            // delete session object
        req.session.destroy(function (err) {
            if (err) {
                return next(err);
             } else {
                return res.redirect('/');
            }
        });
    }
  });
    module.exports = router;