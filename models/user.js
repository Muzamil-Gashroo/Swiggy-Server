
const mongoose = require('mongoose');
const becrypt = require('bcrypt');


const userSchema = new mongoose.Schema({
    phone: { 
        type: String, 
        required: true, 
        unique: true,
       
    },
    name: { 
        type: String, 
        required: true,
        minlength: 2
    },
    email: { 
        type: String, 
        required: true, 
        unique: true,
        lowercase: true,
       
    },
    password: { 
        type: String, 
        required: true 
    }
});

userSchema.pre('save', async function(next){

    if(!this.isModified('password'))
        return next();
    
    const security = 10;
    this.password = await bcrypt.hash(this.password, security);
    next();

});


userSchema.methods.comparePassword = async function ( enteredPassword ){

    return await bcrypt.compare( enteredPassword , this.password );

}


const User = mongoose.model('users', userSchema);
module.exports = User;
