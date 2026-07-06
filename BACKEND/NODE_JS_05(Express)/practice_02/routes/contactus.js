const path = require('path');

//External modules
const express = require('express');
const contactus = express.Router();

//Local Module
const rootDir = require("../utils/pathUtil");
 
contactus.get("/contact-us",(req,res,next)=>{
  res.sendFile(path.join(rootDir,'views','form.html'));
})

contactus.post("/contact-us",(req,res,next)=>{
  console.log('Contact Details Received:', req.body);
  res.sendFile(path.join(rootDir,'views','confirmation.html'));
})

module.exports = contactus;