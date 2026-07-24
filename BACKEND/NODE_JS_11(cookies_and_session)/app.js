const path = require('path');

const express = require('express');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);

const db_path = "mongodb+srv://rootuser:rootuser@cluster1.3hqqkfm.mongodb.net/airbnb?retryWrites=true&w=majority";

const storeRouter = require("./routes/storeRouter");
const hostRouter = require("./routes/hostRouter");
const authRouter = require("./routes/AuthRouter");
const errorController = require("./controllers/errors");
const rootDir = require("./utils/pathUtil");
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const store = new MongoDBStore({
  uri:db_path,
  collection:'sessions'
})
app.use(express.static(path.join(rootDir, 'public')))
app.use(express.urlencoded());
app.use(session({
  secret: "dev@123",
  resave: false,
  saveUninitiazed: true,
  store: store
}))
app.use((req,res,next)=>{
  req.isLoggedIn = req.session.isLoggedIn,
  next();
})
app.use(storeRouter);
app.use(authRouter);
app.use("/host", (req,res,next)=>{
  if(req.isLoggedIn){
    next();
  }
  else{
    res.redirect("/login");
  }
});
app.use("/host", hostRouter);


app.use(errorController.pageNotFound);

const PORT = 3000;


mongoose.connect(db_path).then(()=>{
  console.log('Connected to mongoose')
  app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
  });
}).catch(err => {
  console.log('Error while connecting to mongoose',err);
})

