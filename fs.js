var express = require('express');
var mongoose = require('mongoose');
var passport = require('passport');
var flash = require('connect-flash');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var configDb = require('./config/database');

var port = process.env.PORT || 3333;
var app = express();

// TODO require passport config

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
app.use(session({secret: 'MonkeyTomeScantOliveDesicant'}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.set('views', './client/views/');

require('./server/routes')(app, passport);

app.use('/', function (req, res) {
   res.json({msg: "Hello!"});
});

app.set('view engine', 'pug');

app.listen(port);
console.log('fs running on port', port);
