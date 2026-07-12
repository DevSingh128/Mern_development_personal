const Favourite = require("../models/favourite");
const home = require("../models/home")


exports.getAddHome = (req, res, next) => {
  res.render('host/edit-home', {pageTitle: 'Add Home to airbnb',
    editing: 'false'
  });
};

exports.postAddHome = (req, res, next) => {
  const {houseName,price,location,rating,photourl} = req.body;
  const Home = new home(houseName,price,location,rating,photourl);
  Home.save(); 

  res.render('host/home-added', {pageTitle: 'Home Added Successfully'});
}

exports.getHomes = (req, res,  next) => {
  home.fetchAll((registeredHomes)=>
    res.render('store/home-list', {registeredHomes: registeredHomes, pageTitle: 'airbnb Homes-list'})
  );
}

exports.getBookings = (req, res,  next) => {
    res.render('store/bookings', {pageTitle: 'Bookings'})
}


exports.getIndex = (req, res,  next) => {
  home.fetchAll((registeredHomes)=>
    res.render('store/index', {registeredHomes: registeredHomes, pageTitle: 'index'})
  );
}

exports.getHostHomes = (req, res,  next) => {
  home.fetchAll((registeredHomes)=>
    res.render('host/host-home-list', {registeredHomes: registeredHomes, pageTitle: 'Host Homes-list'})
  );
}


exports.getHomeDetails = (req,res,next)=>{
  const homeId = req.params.homeId;
  console.log("At home details page",homeId);
  home.findById(homeId,homes => {
    if(!homes){
      console.log("Home not Found");
      res.redirect("/homes");
    }
    else{
      console.log("home details found",homes);
      res.render('store/home-details', { 
      home: homes,
      pageTitle: 'Home Details'});
    }
  })
}


exports.postAddToFavourite = (req,res,next)=>{
  console.log("Came to add to fav",req.body);
  Favourite.addToFavourite(req.body.id,error=>{
    if(error){
      console.log("error while marking favourite")
    }
    res.redirect("/favourite-list");
  })
}

exports.getFavouritelist = (req, res,  next) => {
  Favourite.getFavourites(favourites => {
    home.fetchAll((registeredHomes)=>{
      const favouritesHomes = registeredHomes.filter(home=>favourites.includes(home.id));

      res.render('store/favourite-list', { favouritesHomes: favouritesHomes, pageTitle: 'favouritelist' })
    });
  });
};

exports.getEditHome = (req,res,next) => {

  const homeId =  req.params.homeId;
  const editing = req.query.editing === 'true';

  home.findById(homeId,home => {
    if(!home){
      console.log("Home not found for edit");
      return res.redirect("/host/host-home-list");
    }

    console.log(homeId,editing,home);

    res.render("host/edit-home",{
    home: home,
    pageTitle:"Edit ur home",
    editing: editing,
    });
  })
}
 

exports.postEditHome = (req, res, next) => {
  const {id,houseName,price,location,rating,photourl} = req.body;
  const updatedHome = new home(houseName, price, location, rating, photourl, id);
  updatedHome.save(); 

  res.redirect('/host/host-home-list');
}

exports.postDeleteHome = (req, res, next) => {
  const homeId = req.params.homeId;
  console.log('came to delete',homeId);
  home.deleteById(homeId,error => {
    if(error){
      console.log('Error status',error);
    }
    res.redirect("/host/host-home-list")
  })
};

exports.postDeleteFavourite = (req, res, next) => {
  const homeId = req.params.homeId;
  Favourite.deleteById(homeId,error=>{
    if(error){
      console.log('Error is',error);
    }
    res.redirect("/favourite-list")
  })
};