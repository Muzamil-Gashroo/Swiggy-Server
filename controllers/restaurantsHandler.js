
const Restaurant = require("../models/restaurantSchema");

const handleRestaurants = require('express').Router();

handleRestaurants.get("/restaurants", async (req, res) => {
    
  try {
      
      const restaurants = await Restaurant.find();

      const updated = restaurants.map((r) => ({
      ...r._doc,
      image: `${req.protocol}://${req.get("host")}/images/${r.image}`,
    }));

    res.json(updated);
  } catch (error) {
    console.error(error)}

});

module.exports = handleRestaurants;
