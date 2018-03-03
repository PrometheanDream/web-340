

var http = require("http"); // requires http in the url when addressing the server

function processRequest(req, res) {

var body = "Welcome to my server!";

    var contentLength = body.length;

    res.writeHead(200, {

        'Content-Length': contentLength,

        'Content-Type': 'text/plain'

    });

    res.end(body); // sends the body variable to the webpage to be viewed.

}

var s = http.createServer(processRequest); // creates the server, which calls the request and receive portion.

s.listen(8080);