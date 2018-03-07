var express = require("express"); // the requirements section

var http = require("http");

var path = require("path");

var logger = require("morgan");

var app =  express();

app.set("views", path.resolve(__dirname, "views")); // tells the directory of views

app.set("view engine", "ejs");

app.use(logger("short"));

app.get("/", function (request, response){ // upon request, responds with index.js from views
    response.render("index", {
        message: "Welcome to the Morgan Loger Example!"
    });

});

http.createServer(app).listen(8080, function(){ //starts the servers
    console.log("Application started on port 8080");

});


