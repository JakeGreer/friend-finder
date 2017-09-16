//requires the node file system
var fs = require("fs");

//sets up a constructor that will build our users info
var users = function(name, link, scores) {
    this.name = name;
    this.link = link;
    this.scores = scores;
}

//this array will be used to hold the final organized data
var friendsList = [];

//calling the readFile method to take in the text file 'friends.txt'
//returns an error if one occurs
fs.readFile("app/data/friends.txt", "utf8", function(err, data) {
    if (err) {
        return console.log(err);
    }
    //logs that the file is reading...
    console.log("Reading from list of friends...");

    //this splits the data in the text file by every comma and stores each compenent into one long arrray
    var friends = data.split(",");


    //this will be used for an index counter for our final friendsList array..this is not used as i inside the for loop because i will be incrementing at a different pace than needed. therefore a new index counter is made to hold the value needed.
    var j = 0;

    //for loop is created because the current data in the friends array is not in the format that is needed.
    //this for loop is going to call a new users contstructor every itteration.
    //15 values are inserted as arguments on every itteration this is because there is a 'name', 'link', and 'scores' that is an array of 13...in total 15 values are needed.
    //the incrementer loops over every 15 elements because that is one user.
    for (var i = 0; i < friends.length; i += 15) {
        friendsList[j] = new users(
            friends[i], //name
            friends[i + 1], //link
            [parseInt(friends[i + 3]), //scores
                parseInt(friends[i + 4]),
                parseInt(friends[i + 5]),
                parseInt(friends[i + 6]),
                parseInt(friends[i + 7]),
                parseInt(friends[i + 8]),
                parseInt(friends[i + 9]),
                parseInt(friends[i + 10]),
                parseInt(friends[i + 11]),
                parseInt(friends[i + 12]),
                parseInt(friends[i + 13]),
                parseInt(friends[i + 14])
            ]);

        //loops the friendsList to the next index
        j++;
    }

    console.log(friendsList);
})

//exports the final array
module.exports = friendsList;