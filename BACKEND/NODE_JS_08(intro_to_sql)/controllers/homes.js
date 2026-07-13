const Favourite = require("../models/favourite");
const home = require("../models/home")


exports.getAddHome = (req, res, next) => {
  res.render('host/edit-home', {pageTitle: 'Add Home to airbnb',
    editing: false
  });
};

// exports.postAddHome = (req, res, next) => {
//   const { houseName, price, location, rating, photourl, description } = req.body;
//   // Agar description empty string ya undefined hai, toh fallback blank string ya null rakh lo
//   const Home = new home(houseName, price, location, rating, photourl, description || null);
//   Home.save()
//     .then(() => {
//       // Jab database mein successfully insert ho jaye, tabhi response bhejo
//       res.render('host/home-added', { pageTitle: 'Home Added Successfully' });
//     })
//     .catch(err => {
//       console.log("Database Insert Error: ", err);
//     });
// };

exports.postAddHome = (req, res, next) => {
  const { houseName, price, location, rating, photourl, description } = req.body;
  
  // 1. Price mein se agar koi text ya symbol hai toh use saaf karo aur Number banao
  // Agar pure text hoga toh 0 fallback ho jayega taaki SQL crash na ho
  const cleanPrice = parseFloat(price.toString().replace(/[^0-9.]/g, '')) || 0;

  const Home = new home(houseName, cleanPrice, location, rating, photourl, description || null);
  
  Home.save()
    .then(() => {
      res.render('host/home-added', { pageTitle: 'Home Added Successfully' });
    })
    .catch(err => console.log(err));
};


exports.getHomes = (req, res,  next) => {
  home.fetchAll().then(([registeredHomes,fields])=>{
    res.render('store/home-list', {registeredHomes: registeredHomes, pageTitle: 'airbnb Homes-list'})
  });
}

exports.getBookings = (req, res,  next) => {
    res.render('store/bookings', {pageTitle: 'Bookings'})
}


exports.getIndex = (req, res,  next) => {
  home.fetchAll().then(([registeredHomes,fields])=>{
      res.render('store/index', {registeredHomes: registeredHomes, pageTitle: 'index'});
  });
}

exports.getHostHomes = (req, res,  next) => {
  home.fetchAll().then(([registeredHomes,fields])=>{
    res.render('host/host-home-list', {registeredHomes: registeredHomes, pageTitle: 'Host Homes-list'})
  });
}


exports.getHomeDetails = (req,res,next)=>{
  const homeId = req.params.homeId;
  console.log("At home details page",homeId);
  home.findById(homeId).then(([homes]) => {
    if(!homes){
      console.log("Home not Found");
      res.redirect("/homes");
    }
    else{
      console.log("home details found",homes);
      res.render('store/home-details', { 
      home: homes[0],
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
    home.fetchAll().then(([registeredHomes,fields])=>{
      const favouritesHomes = registeredHomes.filter(home=>favourites.includes(home.id));

      res.render('store/favourite-list', { favouritesHomes: favouritesHomes, pageTitle: 'favouritelist' })
    });
  });
};

exports.getEditHome = (req,res,next) => {

  const homeId =  req.params.homeId;
  const editing = req.query.editing === 'true';

  home.findById(homeId)
    .then(([rows]) => {
      const currentHome = rows[0];
      
      if (!currentHome) {
        console.log("edit home failed")
        return res.redirect('/host/host-home-list');
      }

      res.render("host/edit-home", {
        home: currentHome, 
        pageTitle: "Edit your Home",
        editing: editing,
      });
    })
    .catch(err => console.log(err));
}
 

exports.postEditHome = (req, res, next) => {
  const {id,houseName,price,location,rating,photourl,description} = req.body;
  const updatedHome = new home(houseName, price, location, rating, photourl,description,id);
  updatedHome.save().then(() => {
      // 2. Redirect tabhi hoga jab database update complete ho chuka hoga!
      res.redirect('/host/host-home-list');
  })
  .catch(err => {
    console.log("Error while updating database:", err);
  });
}

exports.postDeleteHome = (req, res, next) => {
  const homeId = req.body.homeId || req.params.homeId;

  console.log('came to delete',homeId);
  home.deleteById(homeId).then(()=>{
    res.redirect("/host/host-home-list")
  })
  .catch(error => {
      console.log('Error status',error);
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