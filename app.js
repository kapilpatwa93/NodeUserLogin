/*express app*/
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var flash = require('connect-flash');
var session = require('express-session');
var passpost = require('passport');
var localStrategy = require('passport-local').Strategy;
var mongo = require('mongodb');
var mongoose = require('mongoose');
var expressvalidator = require('express-validator');
var app = express();
var port = 8080;
var customvalidator = require('./acme/validator/custom-validator');

/** other initialisations*/
var routes = require("./routes/index");
var users = require("./routes/users");


/** mongoose initialisation*/
mongoose.connect("mongodb://localhost/tutorial")
var db = mongoose.connection;
db.on('error',console.error.bind(console,'error while making db connection'));

db.once('open',function () {
    console.log("Connection to database established succesfully");
});

/** Middlewares*/
app.use(expressvalidator());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.use(session({
    secret : "secret",
    saveUninitialized : true,
    resave : true
}));

app.use(passpost.initialize());
app.use(passpost.session());
app.use(flash());
app.use(function (req, res, next) {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    res.locals.user = req.user || null;
    next();
});
/** Routes*/

//app.use('/',routes);
app.use('/users',users);







app.listen(port,function (err) {
    if(err){
        console.log("cannot start the appplication");
    }else{
        console.log("we are listening on port:" + port);
    }
});