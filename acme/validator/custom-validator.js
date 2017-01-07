/**
 * Created by osp39 on 7/1/17.
 */
var expressvalidator = require('express-validator');


var validator_array  = new  Array();
validator_array['first_name'] = {
                                    notEmpty : {
                                        errorMessage : 'First Name is required'
                                    },
                                    isLength : {
                                        options : [{min: 3,max : 255}],
                                        errorMessage  : 'First Name should be between 3 to 255 characters'
                                    }
                                };
validator_array['last_name'] = {
                                notEmpty : {
                                    errorMessage : 'Last Name is required'
                                },
                                isLength : {
                                    options : [{min: 3,max : 255}],
                                    errorMessage  : 'Last Name should be between 3 to 255 characters'
                                }
                            };
validator_array['email'] = {
                                notEmpty : {
                                    errorMessage : 'Last Name is required'
                                },
                                isLength : {
                                    options : [{min: 3,max : 255}],
                                        errorMessage  : 'Last Name should be between 3 to 255 characters'
                                },
                                isEmail : {
                                    errorMessage : "Email should be valid email id"
                                }
                            };




var getRule = function (key) {
    return validator_array[key];
}

var getValidationRules = function (keys) {
    var rule_obj = {};
    if(Array.isArray(keys)) {
        for (var i = 0; i < keys.length; i++) {
            var rule = getRule(keys[i]);
            if (rule != undefined) {

                rule_obj[keys[i]] = rule;
            }

        }
    }
    return rule_obj;
}
module.exports = getValidationRules;