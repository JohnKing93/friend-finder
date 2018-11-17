// Dependencies
var express = require("express");
var path = require("path");

// Server
var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./app/public")));

// Routes
require(path.join(__dirname, "./app/routing/apiRoutes"))(app);
require(path.join(__dirname, "./app/routing/htmlRoutes"))(app);

// Listen
app.listen(PORT, function() {
  console.log("Friend Finder is listening on PORT: " + PORT);
});