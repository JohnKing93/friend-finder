// Dependencies
var path = require("path");
var friends = require("../data/friends");

// Export routes
module.exports = function(app) {

    // Process request for all friends
	app.get("/api/friends", function(req, res) {
		res.json(friends);
	});

    // Process request for friend matching
	app.post("/api/friends", function(req, res) {
        
        // Store responses and add user
        var userResponse = req.body;
        var userScores = userResponse.scores;
		
		// Store match
		var matchName = "";
		var matchPhoto = "";
		var matchScore = 501;

        // Loop through friends
		for (var i = 0; i < friends.length; i++) {

            // Compute score differences
			var difference = 0;
			for (var x = 0; x < userScores.length; x++) {
                difference += Math.abs(friends[i].scores[x] - userScores[x]);
			}

            // Compare previous and current difference
			if (difference < matchScore) {
				matchScore = difference;
				matchName = friends[i].name;
				matchPhoto = friends[i].photo;
			}
        }
        
        // Semd response
		res.json({status: 200, name: matchName, photo: matchPhoto});
	});
};