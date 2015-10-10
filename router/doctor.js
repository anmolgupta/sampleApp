/**
 * Created by anmolgupta on 06/10/15.
 */
var express = require('express');
var doctor = express.Router();
var path = require('path');
var SendError = require('../utils/SendError');

doctor.use('/',express.static(path.join(__dirname,'/../' ,'/public')));
doctor.get('/',function(req,res){
    res.sendFile(path.join(__dirname + '/../'+'/doctor.html'));
});


doctor.post('/login',function(req,res){

    console.log(req);
    res.send();

});

doctor.post('/signup',function(req,res){



});

module.exports = doctor;
