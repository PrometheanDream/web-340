var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var mongoose = require("mongoose");


var app = express();

var Employee = require("./models/employee");
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

// mLab connection

var mongoDB = "mongodb://<dbuser>:<dbpassword>@ds131329.mlab.com:31329/ems";

mongoose.connect(mongoDB, {

    useMongoClient: true

});

mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error: "));

db.once("open", function() {

    console.log("Application connected to mLab MongoDB instance");

});

http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080!");
});