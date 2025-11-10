const menu = require("../models/menuSchema");

const handleMenus = require("express").Router();

handleMenus.get("/menu", async (req, res) => {

  try {
    const menus = await Menu.find();

    if (!menus || menus.length === 0) {
      return res.status(404).json({ message: "No menu items found" });
    }

    res.json(menus);
  } catch (error) {
    console.error("Error fetching menus:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

module.exports = handleMenus;