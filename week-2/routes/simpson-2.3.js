var express = require('express');
var http = require('http');
var app = express();

app.get("/", function(request, response){ // each app.get creates a page to be routed to through express and node
    response.end("Welcome to the homepage!");
    });
app.get("/about", function(request, response){ //changing the url, will change the information the server sends out.
    response.end("Welcome to the about page!");
    });
app.get("/contact", function(request, response){
    response.end("Welcome to the contact page!");
    });
app.use(function(request, response){ // If the user enters in anything no specified already.
    response.statusCode = 404;
    response.end("404!");
});
http.createServer(app).listen(8080, function(){ //creates the server on port 8080

    console.log('Application started on port ', 8080)
});