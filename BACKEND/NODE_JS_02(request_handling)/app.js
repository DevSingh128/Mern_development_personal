const http = require('http')
const userrequesthandler = require('./user')
const server = http.createServer(userrequesthandler);


const PORT = 3001;
server.listen(PORT , () => {
  console.log(`server running on http://localhost:${PORT}`);
})