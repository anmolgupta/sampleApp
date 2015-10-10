/**
 * Created by anmolgupta on 07/10/15.
 */
var express = require('express');
var login = express.Router();
var path = require('path');
var User = require('../model/UserData'),
    SendError = require('../utils/SendError');

login.use('/',express.static(path.join(__dirname,'/../' ,'/public')));

login.get('/',function(req, res) {
    console.log("dirname: "+__dirname);
    res.sendFile(path.join(__dirname + '/../'+'/login.html'));
});

login.post('/signin',function(req,res){

    var userName = req.body;

    User.findOne({where:{
        email: userName.email,
        password: userName.password
    }}).then(function(user){

        console.log(JSON.stringify(user));
        res.send(user);

    },function(err){
        SendError.sendInternalError(res,err);
    });

});

login.post('/signup',function(req,res){

    var userName = req.body;
    userName.role = 'doctor';

    User.create(userName).then(function(user){

        res.send();

    },function(err) {

        SendError.sendInternalError(res,err);

    });

});

module.exports = login;