//Dependencies
/********************************************************************
 *******************************************************************/

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Set up Express App
/********************************************************************
 *******************************************************************/
var app = express();
var PORT = process.env.PORT;

// Set up Express app to handle data parsing
/********************************************************************
 *******************************************************************/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


// Set up the users from the database
/********************************************************************
 *******************************************************************/
var friends = require("./app/data/friends.js");
console.log(friends);


//Routes the user to the starting page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

//Routes the user to the survey page
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
});

app.post("api/new", function(req, res) {
    var newfriend = req.body;

    console.log(newfriend);
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});