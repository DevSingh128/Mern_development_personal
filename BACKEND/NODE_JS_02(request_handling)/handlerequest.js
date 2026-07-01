const http = require('http');
const fs = require('fs');

const HandleRequest = (req,res) => {
  if (req.url === '/'){
    
    res.write('<h1>Welcome to Home page</h1>');
    res.write('<a href="/calculator">calculator</a>')
    return res.end();
  }
  else if(req.url.toLowerCase() === '/calculator'){
    res.write('<h1>Welcome to calculator</h1>');
    res.write('<form action="/calculate-result" method="POST">');
    res.write('<input type="number" name="num1"><br><br>');
    res.write('<input type="number" name="num2"><br><br>');
    res.write('<button type="submit">SUM</button>');
    res.write('</form>');
    return res.end();
  }
  else if(req.url === "/calculate-result"  && req.method == "POST"){
    const body = [];
    
    req.on('data', chunk => {
    body.push(chunk);
    });

    req.on('end' , ()=>{
      const fullbody = Buffer.concat(body).toString();
      const params = new URLSearchParams(fullbody);
      const jsonobject = Object.fromEntries(params);
      console.log(jsonobject);

      const sum = Number(jsonobject.num1) + Number(jsonobject.num2);
      res.write(`<h1>Result: ${sum} </h1>`);
      console.log(sum);
      return res.end();
    })

  }
  else{
    res.statusCode = 404;
    res.write('<h1>404 Page Not Found</h1>');
    return res.end();
  }
  
}

module.exports = HandleRequest;

