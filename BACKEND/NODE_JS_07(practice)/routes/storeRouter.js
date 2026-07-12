// Core Modules
const path = require('path');

// External Module
const express = require('express');
const storeRouter = express.Router();

// Local Module
const homesControllers = require("../controllers/homes");

storeRouter.get("/", homesControllers.getIndex);
storeRouter.get("/homes", homesControllers.getHomes);
storeRouter.get("/bookings", homesControllers.getBookings);
storeRouter.get("/favourite-list", homesControllers.getFavouritelist);
storeRouter.get("/homes/:homeId", homesControllers.getHomeDetails)
storeRouter.post("/favourites",homesControllers.postAddToFavourite);
storeRouter.post("/favourites/delete/:homeId",homesControllers.postDeleteFavourite);
module.exports = storeRouter;