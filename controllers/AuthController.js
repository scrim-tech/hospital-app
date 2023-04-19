require('dotenv').config();

const bcrypt                = require('bcrypt');
const jwt                   = require('jsonwebtoken');
const JWT_KEY               = process.JWT_SECRET;
const JWT_EXPIRY_SECONDS    = process.JWT_EXPIRY_SECONDS;
const user                  = require('../services/user.service'); 

module.exports={
    signIn:async (req,res)=>{
    },
    logOut:async (req,resp)=>{

    },
}
