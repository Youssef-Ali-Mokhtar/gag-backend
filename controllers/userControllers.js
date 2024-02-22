const User = require('../models/userModel');

const login = async (req, res)=> {
    res.json({message:'login user'});
}

const signup = async (req, res)=> {
    res.json({message:'signup user'});
}

module.exports = {
    login,
    signup
}