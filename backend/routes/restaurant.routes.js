const express = require("express")

const restaurantController = require("../controllers/restaurant.controller")
const authorize = require('../middleware/check-auth')
const type = require("../configs/type.config");
const router = express.Router();

router.get("/liste", /*authorize(type.client), */restaurantController.listeRestaurant)

module.exports = router;
