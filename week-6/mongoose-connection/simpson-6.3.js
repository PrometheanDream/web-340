//Title: Assignment 6.3//
//Contributors: Richard Krasso, William Simpson //
var express = require("express");
var http = require("http");
var logger = require("morgan");
var mongoose = require("mongoose");


// mLab connection
var mongoDB = 'mongodb://<dbuser>:<dbpassword>@ds131329.mlab.com:31329/ems';
mongoose.connect(mongoDB, {
    useMongoClient: true
});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connected error: "));
db.once("open", function() {
    console.log("Application connected to mLab MongoDB instance");
});


// application
var app = express();
app.use(logger("short"));


// create server
http.createServer(app).listen(8080, function() {
    console.log("Application connected to port 8080!");
});