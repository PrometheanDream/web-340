var express = require("express"); // various requirements
var http = require("http");
var app = express();

app.get("/customer/:id", function(request, response){ // when url /customer/:id is requested, respond with
    var id = parseInt(request.params.id, 10);

    response.json({ // this is the response
        
        flightPlan: "11A9-CTF",
        landingAuth: "AA-DD-7757",
        flightId: id

    });
});

http.createServer(app).listen(8080, function(){ //creates the server
    console.log("Application started on port 8080");
});