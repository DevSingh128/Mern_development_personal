// External Module
const express = require('express');
const hostRouter = express.Router();

// Local Module
const homesControllers = require("../controllers/homes");

hostRouter.get("/add-home",  homesControllers.getAddHome)

hostRouter.post("/add-home", homesControllers.postAddHome)

exports.hostRouter = hostRouter;
