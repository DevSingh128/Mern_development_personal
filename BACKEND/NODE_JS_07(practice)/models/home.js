const fs = require('fs');
const path = require('path');
const rootDir = require('../utils/pathUtil');
const Favourite = require('./favourite');
const HomePath = path.join(rootDir, 'data', 'homes.json');

module.exports = class home {
  // 1. Constructor mein aakhiri mein 'id' add kiya
  constructor(houseName, price, location, rating, photourl, id) {
    this.houseName = houseName;
    this.price = price;
    this.rating = rating;
    this.location = location;
    this.photourl = photourl;
    this.id = id; 
  }

  save() {
    home.fetchAll((homesList) => {
      if (this.id) {
        // 2. Index dhoondh kar purane ghar ko naye data se replace kiya
        const existingHomeIndex = homesList.findIndex(h => h.id === this.id);
        if (existingHomeIndex !== -1) {
          homesList[existingHomeIndex] = this;
        }
      } else {
        this.id = Math.random().toString();
        homesList.push(this);
      }
      
      fs.writeFile(HomePath, JSON.stringify(homesList), (error) => {
        console.log("File written", error);
      });
    });
  }

  static fetchAll(callback) {
    fs.readFile(HomePath, (err, data) => {
      if (!err && data.length > 0) {
        callback(JSON.parse(data));
      } else {
        callback([]);
      }
    });
  }

  static findById(homeId, callback) {
    this.fetchAll(homes => {
      const homeFound = homes.find(home => home.id === homeId);
      callback(homeFound);
    });
  }


  static deleteById(homeId, callback) {
    this.fetchAll(homes => {
      homes = homes.filter(home => home.id !== homeId);
      fs.writeFile(HomePath,JSON.stringify(homes),error=>{
        Favourite.deleteById(homeId,callback);
      })
    });
  }
}