//core modules
// const http = require('http')

//External modules
const express = require('express')

//local modules
const UserRequestHandler = require('./user');


const app = express();

app.get("/", (req, res, next) => {
console.log("Came in first middleware", req.url, req.method);
//res.send("<p>Came from First Middleware</p>");
next();
});

app.post("/submit-details", (req, res, next) => {
console.log("Came in second middleware", req.url, req.method);
res.send("<p>Welcome to Complete Coding Nodejs series</p>");
});

app.use("/", (req, res, next) => {
console.log("Came in another middleware", req.url, req.method);
res.send("<p>Came from another Middleware</p>");
});
// const server = http.createServer(app);

const PORT = 3002;
app.listen(PORT , () => {
  console.log(`server running on http://localhost:${PORT}`);
})