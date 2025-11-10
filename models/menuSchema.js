const mongoose = require("mongoose");

const menuSchema = mongoose.Schema({
  
  id : Number,
  title : String,
  menu : {
    
    item: String,
    price: Number,
    description : String
  
    }

});

const Menu = mongoose.model("menus", menuSchema);

module.exports = Menu;