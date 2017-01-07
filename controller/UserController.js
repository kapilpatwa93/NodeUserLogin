var express = require('express');
var passport = require('passport');
var expressvalidator = require('express-validator');
var customvalidator = require('../acme/validator/custom-validator');
var Controller = {
    register : function (req,res) {
        var keys = Object.keys(req.body);
        //console.log();
        var rules = customvalidator(keys);

        var validator = req.checkBody(rules);

        req.getValidationResult().then(function (result) {
            if(!result.isEmpty()){
                res.send(result.array());
            }else{
                res.send(req.body);
            }
        });

   }
}


module.exports = Controller;