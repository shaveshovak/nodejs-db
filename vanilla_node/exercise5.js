// var http = require('http');
import http from 'http';

// request === http://127.0.0.1:82/students
//http://localhost:3000

var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello World\n");
});
server.listen(82);
console.log("Server running at http://127.0.0.1:82/");