const http = require('http');

const server = http.createServer((req,res) => {
  console.log(req.url , req.method , req.headers);
  if(req.url === '/'){
  res.setHeader('Content-Type','text/html');
  res.write('<html>');
  res.write('<head><title>Dev singh</title></head>');
  res.write('<body><h1>Dev singh</h1></body>');
  res.write('</html>');
  return res.end();
  }
  else{
  res.setHeader('Content-Type','text/html');
  res.write('<html>');
  res.write('<head><title>Dev singh</title></head>');
  res.write('<body><h1>JAI HIND</h1></body>');
  res.write('</html>');
  return res.end();
  }
  
});

const PORT = 3001
server.listen(PORT,()=>{
  console.log(`server running on http://localhost:${PORT}`);
});

