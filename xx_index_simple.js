const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
let requestCounter = 0;

const server = http.createServer((req, res) => {
  requestCounter++;
  console.log("Received request "+ requestCounter +" at " + new Date());
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello COMP229 Very Complex World! Request #' + requestCounter);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});