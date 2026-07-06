const express = require('express')

const app = express();

app.use((req, res, next) => {
console.log("request path", req.url);
//res.send("<p>Came from First Middleware</p>");
next();
});

app.use((req, res, next) => {
console.log("request method", req.method);
//res.send("<p>Came from second Middleware</p>");
next();
});

  
// app.use("/",(req, res, next) => {
// res.send("<p>third middleware return response</p>");
// next();
//  })

app.get("/",(req, res, next) => {
console.log("Handling / for GET",req.url, req.method);
res.send("<p>Came from First Middleware</p>");
});

app.get("/contact-us",(req, res, next) => {
console.log("handling /contact-us for get",req.url,req.method);
res.send(`<p>Give your details MF</p>
<form action="/contact-us" method="POST">
<input type="text" id="name" name="name" placeholder="Enter your name"><br>
<label for="gender">Gender:</label>
<input type="radio" id="male" name="gender" value="male">
<label for="male">Male</label>
<input type="radio" id="female" name="gender" value="female">
<label for="female">Female</label><br>
<button type="submit">Submit</button>'
</form>`);
next();
});

app.post("/contact-us",(req, res, next) => {
res.send(`<p>we will contact u shortly</p>`);
});

const PORT = 3000;
app.listen(PORT , () => {
  console.log(`server running on http://localhost:${PORT}`);
})