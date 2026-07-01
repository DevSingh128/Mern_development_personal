const http = require('http');
const HandleRequest = require('./handlerequest');

const server = http.createServer(
  HandleRequest
);

const PORT = 3001;

server.listen(PORT , () => {
  console.log(`server running on http://localhost:${PORT}`);
})


