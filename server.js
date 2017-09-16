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
var PORT = 3000;

// Set up Express app to handle data parsing
/********************************************************************
 *******************************************************************/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);


app.use(express.static(__dirname + '/app/public'));





app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});