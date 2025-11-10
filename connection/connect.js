
const mongoose = require('mongoose');

function connect(){

    mongoose.connect('mongodb://localhost:27017/NEW_BACK_END_SWIGGY')
    .then(() => {
      console.log('Database connection successful')})
    .catch( (err)=>{console.error(err)});

} 

module.exports = connect;    