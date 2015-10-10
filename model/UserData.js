/**
 * Created by anmolgupta on 08/10/15.
 */
var sequelize = require('../utils/Sequelize');
var Sequelize = require('sequelize');

var User = sequelize.define('user',{
    email: {
        type: Sequelize.STRING,
        validate:{
            isEmail:{
                msg:'must be an email type'
            },
            isUnique:true
        }
    },

    password:Sequelize.STRING,
    role:Sequelize.ENUM('doctor','assistant')
});

User.sync();

module.exports = User;

