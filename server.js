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
var friends = require("/data/friends.js");