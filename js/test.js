console.log("hello world");
console.log("This is node running a javascript file");



// https://gist.github.com/LeCoupa/985b82968d8285987dc3
console.log(__dirname);// get the directory path


var http = require('http');

// An example of a web server written with Node which responds with 'Hello World'.
// To run the server, put the code into a file called example.js and execute it with the node program.
http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World, this is running via node.js\n');
}).listen(8124);

console.log('Server running at http://127.0.0.1:8124/');