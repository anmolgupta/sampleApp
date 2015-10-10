/**
 * Created by anmolgupta on 06/10/15.
 */
var express = require('express');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(/^(?!.*login).*$/,function(req,res,next){
    //res.redirect('/login');
    next();
});


app.use(morgan('dev'));

app.use('/login', require('./router/login'));

app.use('/doctor',require('./router/doctor'));
app.use('/assistant',require('./router/assistant'));

app.listen(process.env.PORT || 8128,function(){
    console.log('ready to rock :D');
});