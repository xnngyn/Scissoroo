var express = require('express');
var path = require('path')
var app = express();
var bodyParser = require('body-parser');
var routes = require('./routes/index');

// set port
const port = process.env.PORT || 8080;

//view engine
app.use(express.static(__dirname + '/static/html')); 
app.set('views',(__dirname));
app.set('view engine','ejs');
app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

// start the server
app.listen(port, function(){
    console.log("app running on Port: ", port)
});

module.exports = app;