/**
 * Created by anmolgupta on 10/10/15.
 */
var Preference = require('./Preferences');
var sequelize = require('../utils/Sequelize');
var Sequelize = require('sequelize');

var assistant = sequelize.define('assistant',{

    name:Sequelize.STRING,
    permissionSet:Sequelize.STRING,
});


assistant.sync();

assistant.getDefaultPreferenceSet = function(){
    var retArray = [];
    retArray.push(new Preference('Calender'));
    retArray.push(new Preference('Practice Location'));

    return retArray;
}

module.exports = assistant;