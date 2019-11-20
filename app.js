var express = require('express');
var path = require('path')
var mongodb = require('mongodb');
var app = express();

// set port
const port = process.env.PORT || 8080;

//define homepage
app.use(express.static(__dirname + '/static/html')); 
app.set('views',(__dirname));
app.set('view engine','ejs');
app.get('./', (req, res) => res.render('index'));

app.get('/thelist', function(req, res){
  var MongoClient = mongodb.MongoClient;

  var url = 'mongodb://localhost:27017//scissoroo_admin:scissoroo_admin@scissoroodb-vjd2z.mongodb.net/test?retryWrites=true&w=majority'

  MongoClient.connect(url,function(err, db){
    if(err){
      console.log('Unable to connect to the server',err)
    } else {
      console.log('Connection Established')
      };
});
});

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