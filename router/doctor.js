/**
 * Created by anmolgupta on 06/10/15.
 */
var express = require('express');
var doctor = express.Router();
var path = require('path');
var SendError = require('../utils/SendError');
var assistant = require('../model/Assistant');

doctor.use('/',express.static(path.join(__dirname,'/../' ,'/public')));
doctor.get('/',function(req,res){
    res.sendFile(path.join(__dirname + '/../'+'/doctor.html'));
});

doctor.get('/getDefaultPreference',function(req,res){
    res.send(assistant.getDefaultPreferenceSet());
})

module.exports = doctor;
