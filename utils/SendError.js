/**
 * Created by anmolgupta on 10/10/15.
 */
var HttpStatus = require('http-status-codes');

var obj = {};

obj.sendInternalError = function(res, err){

    res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(err);
};

obj.msg = 'anmol';

module.exports = obj;