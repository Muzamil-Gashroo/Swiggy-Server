
const User = require('../models/user');

const loginHandle =  require("express").Router();

loginHandle.post("/login",   async (req, res) => {

    const { phone, password } = req.body;

    try{

        if( !phone || !password ){return res.status(400).json({ message: 'All fields are required.' })};
          
        const existingUser = await User.findOne({phone});

        if(existingUser){
            
            const isMatch = await existingUser.comparePassword(password);
            if(isMatch){ 
                return  res.status(200).json({ message: 'Login successful.' });
            }else{
                return res.status(401).json({ message: 'Invalid credentials.' });
            }

        }else{return res.status(401).json({ message: 'Invalid credentials.' })};
            
           
    }catch(err){console.error(err)};

});

module.exports = loginHandle;