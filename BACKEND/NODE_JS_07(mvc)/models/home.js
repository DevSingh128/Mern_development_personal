const fs = require('fs');
const path = require('path');
const rootDir = require('../utils/pathUtil')
//fake database
let registeredHomes = [];

module.exports = class home{
  constructor(houseName, price, location, rating, photourl){
    this.houseName = houseName;
    this.price = price;
    this.rating = rating;
    this.location = location;
    this.photourl = photourl;
  }

  save(){
    home.fetchAll((registeredHomes) => {
    registeredHomes.push(this);
    const HomePath = path.join(rootDir,'data','homes.json');
    fs.writeFile(HomePath,JSON.stringify(registeredHomes),(error) =>{
    console.log("File written",error);
       });
  });
  }

  static fetchAll(callback){
    const HomePath = path.join(rootDir,'data','homes.json');
    fs.readFile(HomePath,(err,data)=>{
    console.log("file read",err,data);
    if(!err){
      callback(JSON.parse(data));
    }
    else{
      callback([]);
    }
    })
  }
}