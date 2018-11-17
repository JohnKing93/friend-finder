// Dependencies
var path = require("path");

// Export routes
module.exports = function(app) {

	// Serve home page
	app.get("/", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/home.html"));
	});

	// Server survey page
	app.get("/survey", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/survey.html"));
	});
};