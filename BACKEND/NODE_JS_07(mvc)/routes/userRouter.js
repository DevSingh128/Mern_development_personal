// Core Modules
const path = require('path');

// External Module
const express = require('express');
const userRouter = express.Router();

// Local Module
const homesControllers = require("../controllers/homes");

userRouter.get("/", homesControllers.getHomes);

module.exports = userRouter;