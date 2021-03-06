var express = require('express');
var path = require('path')
var app = express();
var bodyParser = require('body-parser');
var routes = require('./routes/index');
var users = require('./routes/users');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var session	=	require('express-session');
var MongoStore = require('connect-mongodb-session')(session);

// set port
const port = process.env.PORT || 7070;

//view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); 

//use sessions for tracking logins
app.use(session({
  secret: 'work hard',
  resave: true,
  saveUninitialized: false,
  store: new MongoStore({
      uri: 'mongodb+srv://scissoroo_admin:scissoroo_admin@scissoroodb-vjd2z.mongodb.net/scissoroo?retryWrites=true&w=majority',
      collection: 'mySessions'
  })
}));

app.use('/', routes);         // all references in routes starts with /
app.use('/users', users);     // all references in users starts with /users

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