const Favourite = require("../models/favourite");
const home = require("../models/home")


exports.getAddHome = (req, res, next) => {
  res.render('host/edit-home', {pageTitle: 'Add Home to airbnb',
    isLoggedIn:req.isLoggedIn,
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
  const { houseName, price, location, rating, photourl, description } =
    req.body;
    const Home = new home({
    houseName,
    price,
    location,
    rating,
    photourl,
    description,
  });
  Home.save().then(() => {
    console.log("Home Saved successfully");
  });

  res.redirect("/host/host-home-list");
};


exports.getHomes = (req, res,  next) => {
  home.find().then(registeredHomes=>{
    res.render('store/home-list', {registeredHomes: registeredHomes, 
    isLoggedIn:req.isLoggedIn,
    pageTitle: 'airbnb Homes-list'})
  });
}

exports.getBookings = (req, res,  next) => {
    res.render('store/bookings', {pageTitle: 'Bookings',
    isLoggedIn:req.isLoggedIn
    })
}


exports.getIndex = (req, res,  next) => {
  console.log("seesion value",
  req.session)
  home.find().then(registeredHomes=>{
      res.render('store/index', {registeredHomes: registeredHomes, 
      isLoggedIn:req.isLoggedIn,
      pageTitle: 'index'});
  });
}

exports.getHostHomes = (req, res,  next) => {
  home.find().then(registeredHomes=>{
    res.render('host/host-home-list', {registeredHomes: registeredHomes,
      isLoggedIn:req.isLoggedIn, 
    pageTitle: 'Host Homes-list'})
  });
}


exports.getHomeDetails = (req,res,next)=>{
  const homeId = req.params.homeId;
  console.log("At home details page",homeId);
  home.findById(homeId).then(gethomes => {
    if(!gethomes){
      console.log("Home not Found");
      res.redirect("/homes");
    }
    else{
      console.log("home details found");
      res.render('store/home-details', {
      home: gethomes,
      isLoggedIn:req.isLoggedIn, 
      pageTitle: 'Home Details'
    });
    }
  })
}


exports.getEditHome = (req,res,next) => {

  const homeId =  req.params.homeId;
  const editing = req.query.editing === 'true';

  home.findById(homeId)
    .then(gethomes => {
      if (!gethomes) {
        console.log("edit home failed")
        return res.redirect('/host/host-home-list');
      }

      res.render("host/edit-home", {
        home: gethomes, 
        pageTitle: "Edit your Home",
        isLoggedIn:req.isLoggedIn, 
        editing: editing,
      });
    })
    .catch(err => console.log(err));
}
 

exports.postEditHome = (req, res, next) => {
  const { id, houseName, price, location, rating, photoUrl, description } =
    req.body;
    home.findById(id).then((Home) => {
    Home.houseName = houseName;
    Home.price = price;
    Home.location = location;
    Home.rating = rating;
    Home.photoUrl = photoUrl;
    Home.description = description;
    Home.save().then((result) => {
      console.log("Home updated ", result);
    }).catch(err => {
      console.log("Error while updating ", err);
    })
    res.redirect("/host/host-home-list");
  }).catch(err => {
    console.log("Error while finding home ", err);
  });
};
/*
exports.postEditHome = (req, res, next) => {
  const { id, houseName, price, location, rating, photoUrl, description } =
    req.body;
  Home.findById(id).then((home) => {
    home.houseName = houseName;
    home.price = price;
    home.location = location;
    home.rating = rating;
    home.photoUrl = photoUrl;
    home.description = description;
    home.save().then((result) => {
      console.log("Home updated ", result);
    }).catch(err => {
      console.log("Error while updating ", err);
    })
    res.redirect("/host/host-home-list");
  }).catch(err => {
    console.log("Error while finding home ", err);
  });
};

 */

exports.postDeleteHome = (req, res, next) => {
  const homeId = req.body.homeId || req.params.homeId;

  console.log('came to delete',homeId);
  home.findByIdAndDelete(homeId).then(()=>{
    res.redirect("/host/host-home-list")
  })
  .catch(error => {
      console.log('Error status',error);
  })
};

exports.postRemoveFromFavourite = (req, res, next) => {
  const homeId = req.params.homeId;
  Favourite.findOneAndDelete({homeId: homeId})
    .then((result) => {
      console.log("Fav Removed: ", result);
    })
    .catch((err) => {
      console.log("Error while removing favourite: ", err);
    })
    .finally(() => {
      res.redirect("/favourite-list");
    });
};


// ✅ FIXED
exports.getFavouriteList = (req, res, next) => {
  Favourite.find().then((favourites) => {
    console.log("All favourites from DB:", favourites); // ✅ see what's in DB
    const validFavourites = favourites.filter(fav => fav.homeId);
    const favouriteIds = validFavourites.map((fav) => fav.homeId.toString());
    console.log("Valid favourite IDs:", favouriteIds);  // ✅ see extracted IDs
    home.find().then((registeredHomes) => {
      console.log("All homes:", registeredHomes.map(h => h._id.toString())); // ✅ compare IDs
      const favouriteHomes = registeredHomes.filter((h) =>
        favouriteIds.includes(h._id.toString())
      );
      console.log("Matched homes:", favouriteHomes);    // ✅ see final result
      res.render("store/favourite-list", {
        favouriteHomes: favouriteHomes,
        pageTitle: "My Favourites",
        isLoggedIn:req.isLoggedIn, 
        currentPage: "favourites",
      });
    });
  });
};

exports.postAddToFavourite = (req, res, next) => {
  const homeId = req.body.id;
  Favourite.findOne({homeId : homeId}).then((fav) => {
    if (fav) {
      console.log("Already marked as favourite");
    } else {
      fav = new Favourite({homeId : homeId});
      fav.save().then((result) => {
        console.log("Fav added: ", result);
      });
    }
    res.redirect("/favourite-list");
  }).catch(err => {
    console.log("Error while marking favourite: ", err);
  });
};