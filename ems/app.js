var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");


var app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.use(logger("short"));


app.get("/", function (request, response) {
    response.render("index", {
        title: "Home page"
    });
});

app.get("/list", function(request, response){
    response.render("list", {
        message: "Employee Records"
    });
});

app.get("/new", function(request, response){
    response.render("new", {
        message: "Data Entry"
    });
});

app.get("/view", function(request, response){
    response.render("view", {
        message: "Employee Details"
    });
});

http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080!");
});