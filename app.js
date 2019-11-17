var express = require('express');
var path = require('path')
var app = express();

// set port
const port = 8080;

//define home route
app.use(express.static(__dirname + '/static/html')); 
app.set('views',(__dirname));
app.set('view engine','ejs');
app.get('./', (req, res) => res.render('index'));

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

// start the server
app.listen(port, function(){
    console.log("app running on Port: ", port)
})