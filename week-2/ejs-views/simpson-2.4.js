var http = require("http"); // sets up express
var express = require("express");
var path = require("path");
var app = express();

app.set("views", path.resolve(__dirname, "views")); // says that views is the directory name to pull from
app.set("view engine", "ejs");

app.get("/", function(request, response) {
    response.render("index", { //response.render pulls from the index file in views
        firstName: "William",
        lastName: "Simpson",
        address: "777 Retired Rd"
    });
});

http.createServer(app).listen(8080, function(){
    console.log("EJS-Views app started on port 8080."); //lets me know the server started up.
});
