// Dependencies
var express = require("express");
var bodyParser = require("body-parser"); //JSON responses
var mongoose = require("mongoose"); //Mongo object modelling 
var request = require("request"); //Makes http calls
var cheerio = require("cheerio"); //Scraper

// Require all models
var db = require("./models");

const PORT = process.env.PORT || process.argv[2] || 8080;

// Initialize Express
var app = express();

// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: true }));
// Use express.static to serve the public folder as a static directory
app.use(express.static("public"));

// Connect to the Mongo DB
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {
    useMongoClient: true
});

// Start the server
app.listen(PORT, function () {
    console.log("App running on port " + PORT + "!");
});
