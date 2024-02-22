const User = require('../models/userModel');

const login = async (req, res)=> {
    res.json({message:'login user'});
}

const signup = async (req, res)=> {
    const { email, password } = req.body;
    console.log(email);
    try {
        const user = await User.signup(email, password);
        res.status(200).json({ email, user });
    } catch(error) {
        res.status(400).json("error: "+ error.message);
    }
}

module.exports = {
    login,
    signup
}