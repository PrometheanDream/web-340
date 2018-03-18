var express = require("express"); // various requirements
var http = require("http");
var app = express(); // creates the express app

app.get("/not-found", function (request, response){ // various responses to url requests
    response.status(404);
    response.json({
        error: "Resource not found."
    })
});

app.get("/ok", function(request, response){
    response.status(200);
    response.json({
        message: "Page loaded correctly."
    })
});

app.get("/not-implemented", function (request, response){
    response.status(501);
    response.json({
        error: "Page not implemented"
    })
});

http.createServer(app).listen(8080, function(){ //creates the server
    console.log("Application created on port 8080!")
});