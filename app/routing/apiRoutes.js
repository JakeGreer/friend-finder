var friends = require("../data/friends.js");

module.exports = function(app) {
    //show friends
    app.get('/api/friends', function(req, res) {
        res.json(friends);
    });

    app.post('/api/friends', function(req, res) {
        //Get post request and add to friends array
        var newFriend = req.body;


        //creates an array to store the differences in scores between each friend
        var bestMatch = [];
        //initializing score to 0; this will be used to accumulate each individual score
        var score = 0;
        //loops through the friends array and compares the new entry scores top the scores stored in the array and calculates the total differnce for each person
        for (var i = 0; i < friends.length; i++) {
            for (var j = 0; j < friends[i].scores.length; j++) {

                if (newFriend.scores[j] === '') {
                    newFriend.scores[j] = 0;
                }
                score += (Math.abs((friends[i].scores[j] - newFriend.scores[j])));
            }
            bestMatch[i] = score;
            score = 0;
        }

        console.log(newFriend);
        console.log(bestMatch);
        //this is initialized to the first value in the array. going to be used for comparison to find the lowest
        var lowest = bestMatch[0];
        //this will store the location the lowest number resides in
        var index = 0;
        //loops through the bestMatch array and calculates which number is the lowest difference and at which location
        for (var i = 1; i < bestMatch.length; i++) {

            if (bestMatch[i] < lowest) {
                lowest = bestMatch[i];
                index = i;

            }
        }

        newFriend.lowest = lowest;
        newFriend.location = index;
        console.log("Lowest: " + lowest + " Location: " + index);
        //adds the new friend to the api list
        friends.push(newFriend);
        res.json(friends[index]);

    });
}