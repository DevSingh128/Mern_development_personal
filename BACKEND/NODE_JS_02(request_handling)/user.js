const http = require('http');
const fs = require('fs');

const UserRequestHandler = (req,res) => {
  console.log(req.url,req.method);
  if (req.url === '/') {
    res.setHeader('Content-Type','text/html')
    res.write('<h1>Welcome to Home page</h1>');
    res.write('<form action="/submit-details" method="POST">'); // submit to submit details
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
    //using post because to give info from form to submit-details
    const body = [];
    req.on('data',chunk => { //data coming in chuck and req is readable stream
      console.log(chunk);
      body.push(chunk);
    });

    req.on('end',() => { //all data chunks has been came together
      const fullbody = Buffer.concat(body).toString();
      console.log(fullbody);
      /*standard method*/

      const params = new URLSearchParams(fullbody);
      // for(const [key,val] of params.entries()){
      //   jsonobject[key] = val;
      // }
      // console.log(jsonobject);

      const jsonobject = Object.fromEntries(params);
      console.log(jsonobject);
      const jsonString = JSON.stringify(jsonobject);
      fs.writeFileSync('user-details.txt',jsonString);
    })
    
    res.statusCode = 302; 
    res.setHeader('Location','/');
    return res.end();
  }

  res.write('<h1>page doesnot exist</h1>');
  res.end();
};
 
module.exports = UserRequestHandler;


