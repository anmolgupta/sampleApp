/**
 * Created by anmolgupta on 06/10/15.
 */
var express = require('express');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');
var jwt    = require('jsonwebtoken'),
    config = require('./utils/config'),
    User = require('./model/UserData');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(require('cookie-parser')());

app.use(/^(?!.*login).*$/,function(req,res,next){
    //res.redirect('/login');
    console.log(req.cookies.token);

    if(req.cookies.token){

        jwt.verify(req.cookies.token,config.jsonWebTokenKey,function(err,decodedValue){

            if(err){
                return  res.redirect('/login/')
            }else{

                User.findById(decodedValue.id).then(function(data){

                    req.doctorId = decodedValue.id;
                    next()

                },function(err){
                    res.redirect('/login/')
                })
            }
        });

    } else {

        res.redirect('/login/')
    }
});


app.use(morgan('dev'));

app.use('/login', require('./router/login'));

app.use('/doctor',require('./router/doctor'));
app.use('/assistant',require('./router/assistant'));

app.listen(process.env.PORT || 8128,function(){
    console.log('ready to rock :D');
});