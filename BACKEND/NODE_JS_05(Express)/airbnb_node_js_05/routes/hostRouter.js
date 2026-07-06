//core module
const path = require('path');


//External modules
const express = require('express');
const hostRouter = express.Router();

//Local Module
const rootDir = require("../utils/pathUtil");
 
hostRouter.get("/add-home",(req,res,next)=>{
  res.sendFile(path.join(rootDir,'views','addhome.html'));
})

hostRouter.post("/add-home",(req,res,next)=>{
  res.sendFile(path.join(rootDir,'views','homeAdded.html'));
})

module.exports = hostRouter;