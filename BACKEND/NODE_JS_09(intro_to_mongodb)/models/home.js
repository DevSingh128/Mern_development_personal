const {getDb} = require("../utils/databaseUtil");

const {ObjectId} = require('mongodb');

module.exports = class home {
  constructor(houseName, price, location, rating, photourl,description,_id) {
    this.houseName = houseName;
    this.price = price;
    this.rating = rating;
    this.location = location;
    this.photourl = photourl;
    this.description = description;
    if(_id){
      this._id = _id; 
    }
  }

  save() {
   const db = getDb();
   if(this._id){//update
    const updatedhome = {
      houseName:this.houseName,
      price: this.price,
      rating: this.rating ,
      location: this.location,
      photourl: this.photourl,
      description : this.description
    }
    return db.collection('homes').updateOne({_id: new ObjectId(String(this._id))},{$set: updatedhome});
   }
   else{//insert
    return db.collection('homes').insertOne(this);
   }
  }

  

  static fetchAll() {
    const db = getDb();
    return db.collection('homes').find().toArray();
  }

  static findById(homeId) {
    const db = getDb();
    return db.collection('homes').find({_id: new ObjectId(String(homeId))}).next();
  }

  static deleteById(homeId) {
    const db = getDb();
    return db.collection('homes').deleteOne({_id: new ObjectId(String(homeId))});
  }
}