var express = require("express");
var http = require("http");
var app = express();

app.get("/", function(request, response){
    response.send("API invoked as an HTTP GET request.");
});

app.put("/", function(request, response){
    response.send("API invoked as an HTTP PUT request.");
});

app.post("/", function(response, request){
    response.send("API invoked as an HTTP POST request.");
});

app.delete("/", function (response, request){
    response.send("API invoked as an HTTP DELETE request");
});

http.createServer(app).listen(8080, function(){
    console.log("Application started on port 8080");
});