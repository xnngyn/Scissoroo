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

      var collection = db.collection('scissoroo');

      collection.find({}).toArray(function(err, result){
        if(err){
          res.send(err);
        } else if(result.length){
          res.render('friseure', {
            'friseure':result
          });
        } else {
          res.send('No documents found');
        }
        db.close()
      });
    }
  });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });


// Database
//const MongoClient = require('mongodb').MongoClient;
//const uri = "mongodb://localhost:27017//scissoroo_admin:scissoroo_admin@scissoroodb-vjd2z.mongodb.net/test?retryWrites=true&w=majority";
//const client = new MongoClient(uri, { useNewUrlParser: true });
//client.connect(err => {
//  const collection = client.db("test").collection("devices");
//  // perform actions on the collection object
//  console.log("database connection on")
//client.close();
//});


// start the server
app.listen(port, function(){
    console.log("app running on Port: ", port)
});