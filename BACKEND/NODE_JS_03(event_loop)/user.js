//async converstion

const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) => {
  if (req.url === '/') {
    res.write('<h1>Welcome to Home page</h1>');
    res.write('<form action="/submit-details" method="POST">');
    res.write('<input type="text" id="name" name="name" placeholder="Enter your name"><br><br>');

    res.write('<label for="gender">Gender:</label>');
    res.write('<input type="radio" id="male" name="gender" value="male">');
    res.write('<label for="male">Male</label>');

    res.write('<input type="radio" id="female" name="gender" value="female">');
    res.write('<label for="female">Female</label><br><br>');

    res.write('<button type="submit">Submit</button>');
    res.write('</form>');

    return res.end();
}
  else if(req.url.toLowerCase() === "/submit-details" && req.method == "POST"){
    const body = [];
    req.on('data',chunk => {
      console.log(chunk);
      body.push(chunk);
    })
    req.on('end' , () => {
      const fullbody = Buffer.concat(body).toString();
      console.log(fullbody);
      const params = new URLSearchParams(fullbody);
      const bodyObject = Object.fromEntries(params);
      console.log(bodyObject);
      fs.writeFile('user.txt' , JSON.stringify(bodyObject),error => {
          console.log('Data written');
          res.statusCode = 302;
          res.setHeader('Location','/');
          return res.end();
      });
    });
  }

  else{
    res.setHeader('Content-Type','text/html');
    res.write(`
        <html>
            <body>
                <h1>complete code</h1>
                <p>This is a multiline HTML string.</p>
            </body>
        </html>
    `);
    res.end();
  }
});

const PORT = 3001
server.listen(PORT,()=>{
  console.log(`server running on http://localhost:${PORT}`);
});

 
