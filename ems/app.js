// Contributors: Richard Krasso, William Simpson
//Purpose: To create a website

var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var mongoose = require("mongoose");
var helmet = require("helmet");
var csrf = require("csurf");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var Employee = require("./models/employee");

// csrf Protection
var csrfProtection = csrf({cookie: true});

// starts express
var app = express();


// set
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.set("port", process.env.PORT || 8080);

// use
app.use(logger("short"));
app.use(helmet.xssFilter());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cookieParser());
app.use(csrfProtection);
app.use(function(request, response, next) {
    var token = request.csrfToken();
    response.cookie('XSRF-TOKEN', token);
    response.locals.csrfToken = token;
    next();
});

// routes - get
app.get("/", function (request, response) {
    response.render("index", {
        title: "Home page"
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

// routes - post
app.post("/process", function(request, response) {
    console.log(request.body.txtName);
    response.redirect("/");
});

// mLab connection database

var mongoDB = "mongodb://PrometheanDream:Mollydog777@ds131329.mlab.com:31329/ems";

mongoose.connect(mongoDB, {
    useMongoClient: true
});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error: "));
db.once("open", function() {
    console.log("Application connected to mLab MongoDB instance");
});

// adding things to server

app.post("/process", function(request, response) {
    // console.log(request.body.txtName);
    if (!request.body.txtName) {
        response.status(400).send("Entries must have a name");
        return;
    }
 
    // get the request's form data
    var employeeName = request.body.txtName;
    console.log(employeeName);
 
    // create a employee model
    var employee = new Employee({
        name: employeeName
    });
 
    // save
    employee.save(function (error) {
        if (error) throw error;
 
        console.log(employeeName + " saved successfully!");
    });
 
    response.redirect("/list");
 });
 
 app.get("/list", function(request, response) {
     Employee.find({}, function(error, employees) {
        if (error) throw error;
 
        response.render("list", {
            title: "Employee List",
            employees: employees
        });
     });
 });
 
 app.get("/view/:queryName", function (request, response) {
     var queryName = request.params.queryName;
 
     Employee.find({'name': queryName}, function(error, employees) {
         if (error) throw error;
 
         console.log(employees);
 
         if (employees.length > 0) {
             response.render("view", {
                 title: "Employee Record",
                 employee: employees
             })
         }
         else {
             response.redirect("/list")
         }
 
     });
 });
 

http.createServer(app).listen(8080, function() {
    console.log("Application started on port " + app.get("port"));
});