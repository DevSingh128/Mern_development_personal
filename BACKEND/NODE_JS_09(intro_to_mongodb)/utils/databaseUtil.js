const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

const MONGO_URL = "mongodb+srv://rootuser:rootuser@cluster1.3hqqkfm.mongodb.net/airbnb?retryWrites=true&w=majority";

let _db;

const mongoConnect = (callback) => {

  MongoClient.connect(MONGO_URL).   then(client=>{
  console.log(client);
  callback();
  _db = client.db('airbnb');
  }).catch(err => {
  console.log('Error while connecting' , err);
})
}

const getDb = () => {
  if(!_db){
    throw new Error('Mongo not connected');
  }
  return _db;
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;

