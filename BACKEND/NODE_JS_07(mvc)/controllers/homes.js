const home = require("../models/home")
exports.getAddHome = (req, res, next) => {
  res.render('addHome', {pageTitle: 'Add Home to airbnb'});
};

exports.postAddHome = (req, res, next) => {
  const {houseName,price,location,rating,photourl} = req.body;
  const Home = new home(houseName,price,location,rating,photourl);
  Home.save(); 

  res.render('homeAdded', {pageTitle: 'Home Added Successfully'});
}

exports.getHomes = (req, res,  next) => {
  home.fetchAll((registeredHomes)=>
    res.render('home', {registeredHomes: registeredHomes, pageTitle: 'airbnb Home'})
  );
  
}
