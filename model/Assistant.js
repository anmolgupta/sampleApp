/**
 * Created by anmolgupta on 10/10/15.
 */
var Preference = require('./Preferences');

var assistant = function(){

}

assistant.getDefaultPreferenceSet = function(){
    var retArray = [];
    retArray.push(new Preference('Calender'));
    retArray.push(new Preference('Practice Location'));

    return retArray;
}

module.exports = assistant;