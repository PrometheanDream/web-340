var express = require("express");

var http = require("http");

var path = require("path");

var logger = require("morgan"); // sets all the requirements

var app = express();

app.set("views", path.resolve(__dirname, "views")); //resolves directory location

app.set("view engine", "ejs"); //sets view engine

app.use(logger("short")); //short format on logger

app.get("/", function(request, response) {
    response.send("API invoked as an HTTP GET request.");
});

app.put("/", function(request, response) {
    response.send("API invoked as an HTTP PUT request.");
});

app.post("/", function(request, response) {
    response.send("API invoked as an HTTP POST request");
});

app.delete("/", function(request, response) {
    response.send("API invoked as an HTTP DELETE request");
});

http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080!");
});

