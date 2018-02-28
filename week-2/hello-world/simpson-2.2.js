var express = require('express');
var http = require('http');


var app = express();


app.use(function(req, res){ // function that will post where the request comes from
                            // and it will send the Hello World message to requester.

    console.log("in comes a request to: ", req.url);

    res.end('Hello World\n');


});

http.createServer(app).listen(8080, function(){ //creates the server on port 8080

    console.log('Application started on port ', 8080)
});