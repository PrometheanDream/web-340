var express = require("express");

var http = require("http");

var path = require("path");

var logger = require("morgan"); // sets all the requirements

var app = express();

app.set("views", path.resolve(__dirname, "views")); //resolves directory location

app.set("view engine", "ejs"); //sets view engine

app.use(logger("short")); //short format on logger

app.get("/", function(request, response){ // renders the home page with index
    response.render("index", {
        message: "Home Page"
    });
});

app.get("/about", function(request, response){ // renders about page
    response.render("about", {
        message: "About Page"
    });
});

app.get("/contact", function(request, response){ // renders contact page
    response.render("about", {
        message: "Contact Page"
    });
});

app.get("/products", function(request, response){ // renders product page
    response.render("products", {
        message: "Products Page"
    });
});

http.createServer(app).listen(8080, function(){ // starts the server
    console.log("Application started on port 8080");
});

