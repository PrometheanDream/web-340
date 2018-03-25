//Title: Assignment 5.2//
//Contributors: Richard Krasso, William Simpson //
var express = require("express");
var http = require("http");
var path = require("path");

app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", ejs);


var f = [
    "Adam",
    "Bill",
    "Oscar",
    "Stan"
];

app.get("/", function(request, response){
    response.render("index", {
        names: f
    })
});

http.createServer(app).listen(8080, function(){
    console.log("Application started on port 8080!");
});