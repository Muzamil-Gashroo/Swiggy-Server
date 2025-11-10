const Category = require("../models/categorySchema");

const handleCategories = require("express").Router();


handleCategories.get("/categories", async (req, res) => {
    
  try {
    const categories = await Category.find();

    if (!categories || categories.length === 0) {
      return res.status(404).json({ message: "No categories found" });
    }

    res.json(categories);
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

module.exports = handleCategories;