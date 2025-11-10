
const express =  require('express');
const Restaurant =  require("./models/restaurantSchema");
const path =  require("path");
const connect = require('./connection/connect');
const handleRestaurants = require("./controllers/restaurantsHandler");
const handleCategories = require("./controllers/categoriesHandler");
const handleMenu = require("./controllers/menusHandler");
const signupHandle = require("./controllers/signupHandle");
const loginHandle = require("./controllers/loginHandler");
const app = express();

connect();

app.use(express.json());
app.use('/images', express.static(path.join(__dirname, 'public', 'images')));

app.use("/v1/",handleRestaurants);
app.use("/v1/",handleMenu);
app.use("/v1",handleCategories);
app.use("/v1/",signupHandle);
app.use("/v1",loginHandle);


app.listen(5000, () => console.log("Server On"));
