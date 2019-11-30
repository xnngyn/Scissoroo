var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Provider = require('../models/provider');
var bcrypt = require('bcrypt');
const expressValidator = require('express-validator');

// Get Hompage 
router.get('/', function(req, res, next){
    res.render('index', {
        title: 'Home'
    });
})

// Get Sign Up Page
router.get('/signup', function(req, res, next){
    res.render('SignUp',{
        title: 'Register'
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

// insert user
router.post('/insertuser', async(req, res) =>{
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

    // Form Validation
    req.checkBody( 'fname','First Name Field is Required').notEmpty();
    req.checkBody( 'lname','Last Name Field is Required').notEmpty();
    req.checkBody( 'strasse','Street Field is Required').notEmpty();
    req.checkBody( 'Stadt','City Field is Required').notEmpty();
	req.checkBody( 'email','Email Field is Required').notEmpty();
	req.checkBody('email','Email not Valid').isEmail();
    req.checkBody('password','Password Field is Required').notEmpty();
    
    // Check for Errors
    var errors = req.validationErrors();

    if(errors){
        return next(err)
    } else {
        //create new User
        var newUser = new User({
            fullname: fname,
            lastname: lname,
            birthdate: gdatum,
            sex: sex,
            strasse: strasse,
            hausnr: hausnr,
            plz: plz,
            stadt: stadt,
            email: email,
            pass: hashedPassword
        });
            console.log( newUser)
            //hash password
            const salt = await bcrypt.genSalt();
            bcrypt.hash(newUser.pass, salt, function(err, hash){
                if(err) throw err;

                // Set hashed password
                newUser.pass = hash;

                //Create New User
                newUser.save(newUser, function(err, user){
                    if(err) throw err;
                    console.log(user);
                });
            

            res.flash('success','Registrierung erfolgreich!');
            res.redirect('/loggedIn');
            });
        }

    });
    
    // insert provider
    router.post('/insertprovider', function(req, res, next){
    var prov = {
        
    };
    });

    module.exports = router;