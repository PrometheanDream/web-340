/*Title: Assignment 5.2
Contributors: Richard Krasso, William Simpson */

var express = require("express");
var http = require("http");
var pug = require("pug");
var path = require("path");

var app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "pug");

app.get("/", function(request, response){
    response.render("index", {
        message: "Shuttle has landed!"
    });
});

http.createServer(app).listen(8080, function(){
    console.log("Application started on port 8080!");
});