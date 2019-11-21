var express = require('express');
var path = require('path')
var app = express();
var bodyParser = require('body-parser');
var routes = require('./routes/index');

// set port
const port = process.env.PORT || 8080;

//view engine setup
app.set('views', (__dirname + './views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(express.static(__dirname + './public'));

app.use('/', routes);

//app.use(express.static(__dirname + '/public')); 
//app.set('views',(__dirname));
//app.set('view engine','ejs');
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));
//app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    console.log(err)
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

// start the server
app.listen(port, function(){
    console.log("app running on Port: ", port)
});

module.exports = app;