const express = require('express');
const path =  require('path');

const app = express();
const contactus = require("./routes/contactus");
const rootDir = require("./utils/pathUtil");

//for body parse use - url.encoded
app.use(express.urlencoded());
app.use(contactus);


app.use((req,res,next)=>{
  res.status(404).sendFile(path.join(rootDir,'views','404.html'));
})


const PORT = 3000;
app.listen(PORT , () => {
  console.log(`server running on http://localhost:${PORT}`);
})

