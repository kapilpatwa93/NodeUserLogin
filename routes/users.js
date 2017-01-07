var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var UserController = require('../controller/UserController');
var User = require('../model/User.model');

/*router.post('/register',function (req,res) {
    res.send(req.body);
   res.send("register");
});*/
router.post('/register',function (req,res) {

    UserController.register(req,res);
});

module.exports = router;