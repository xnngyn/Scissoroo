var express = require('express');
var app = express();

// set port
var port = process.env.PORT || 8080

app.use(express.static(__dirname)); 

// define home route
app.get("/", function(req, res){
    res.render("index");
})

// Use middlewares to set view engine and post json data to the server
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// start the server
app.listen(port, function(){
    console.log("app running on Port: ", port)
})