const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  
  image: String,    
  path: String
  
});

const Category = mongoose.model("categories", categorySchema);

module.exports = Category;