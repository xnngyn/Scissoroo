var express = require('express');
var path = require('path')
var app = express();
var bodyParser = require('body-parser');
var routes = require('./routes/index');

// set port
const port = process.env.PORT || 8080;

//view engine 
app.set('views', path.join(__dirname + '/views'));
app.set('view engine','ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname + '/public')));

app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    console.log(err);
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

// start the server
app.listen(port, function(){
    console.log("app running on Port: ", port)
});

module.exports = app;