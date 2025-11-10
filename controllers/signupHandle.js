
const User = require('../models/user');

const signupHandle = require("express").Router();

signupHandle.post("signup", async (req, res) => {

    try{

    const { name, email, phone, password } = req.body;

    if( !name || !email || !phone || !password ){
        return res.status(400).json({ message: 'All fields are required.' });
    }

    const newUser = new User({ name, email, phone, password });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully.' });

    }catch(err){console.error(err)};

});

module.exports = signupHandle;