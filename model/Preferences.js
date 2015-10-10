/**
 * Created by anmolgupta on 10/10/15.
 */
var Permission = require('./Permission');

var Preference = function(){
    this.feature = "";
    this.permission = new Permission();
}

module.exports = Preference;