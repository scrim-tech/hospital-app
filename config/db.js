require('dotenv').config();

const Sequelize                 = require('sequelize');

const UserModel                 = require('../models/user');

const sequelize = new Sequelize(process.env.DB_NAME,process.env.DB_USER,'',{
    host:process.env.DB_HOST,
    dialect:process.env.DB_DRIVER
});

const User                  = UserModel(sequelize,Sequelize);

module.exports = {
    User,
    sequelize
};