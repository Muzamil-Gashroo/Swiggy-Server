const mongoose = require("mongoose");

const restaurantSchema = mongoose.Schema({
  id: Number,
  image: String,
  offer: String,
  title: String,
  rating: Number,
  minTime: Number,
  maxTime: Number,
  name: String,
  place: String
});

const Restaurant = mongoose.model("restaurants", restaurantSchema);

module.exports = Restaurant;