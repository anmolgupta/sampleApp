/**
 * Created by anmolgupta on 09/10/15.
 */
var Sequelize = require("sequelize");

var sequelize = new Sequelize('test', '', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;