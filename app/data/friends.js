// //requires the node file system
// var fs = require("fs");

// //sets up a constructor that will build our users info
// var users = function(name, link, scores) {
//     this.name = name;
//     this.link = link;
//     this.scores = scores;
// }

// //this array will be used to hold the final organized data
// var friendsList = [];

// //calling the readFile method to take in the text file 'friends.txt'
// //returns an error if one occurs
// fs.readFile("app/data/friends.txt", "utf8", function(err, data) {
//     if (err) {
//         return console.log(err);
//     }

//     //this splits the data in the text file by every comma and stores each compenent into one long arrray
//     var friends = data.split(",");


//     //this will be used for an index counter for our final friendsList array..this is not used as i inside the for loop because i will be incrementing at a different pace than needed. therefore a new index counter is made to hold the value needed.
//     var j = 0;

//     //for loop is created because the current data in the friends array is not in the format that is needed.
//     //this for loop is going to call a new users contstructor every itteration.
//     //15 values are inserted as arguments on every itteration this is because there is a 'name', 'link', and 'scores' that is an array of 13...in total 15 values are needed.
//     //the incrementer loops over every 15 elements because that is one user.
//     for (var i = 0; i < friends.length; i += 15) {
//         friendsList[j] = new users(
//             friends[i], //name
//             friends[i + 1], //link
//             [parseInt(friends[i + 2]), //scores
//                 parseInt(friends[i + 3]),
//                 parseInt(friends[i + 4]),
//                 parseInt(friends[i + 5]),
//                 parseInt(friends[i + 6]),
//                 parseInt(friends[i + 7]),
//                 parseInt(friends[i + 8]),
//                 parseInt(friends[i + 9]),
//                 parseInt(friends[i + 10]),
//                 parseInt(friends[i + 11]),
//                 parseInt(friends[i + 12]),
//                 parseInt(friends[i + 13]),
//                 parseInt(friends[i + 14])
//             ]);

//         //loops the friendsList to the next index
//         j++;
//     }

//     // console.log(friendsList);
// })

// //exports the final array
// exports.friendsList = [
//     "this", "that", [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
// ];
var friends = [{
        name: "Jake",
        link: "http://www.metalinjection.net/wp-content/uploads/2014/08/Giraffe-Tongue-Orchestra.jpg",
        scores: [5, 4, 4, 2, 5, 3, 4, 2, 3, 2, 5, 2, 5]
    },
    {
        name: "Billy",
        link: "https://orig00.deviantart.net/76a2/f/2017/043/d/e/170204_sombra_by_umigraphics-dayvdax.jpg",
        scores: [5, 3, 3, 5, 5, 4, 4, 1, 2, 4, 5, 5, 5]
    },
    {
        name: "Bella",
        link: "http://animals.sandiegozoo.org/sites/default/files/2016-12/Wolf_ZN.jpg",
        scores: [4, 5, 2, 1, 2, 2, 5, 2, 4, 5, 5, 5, 5]
    },
    {
        name: "Steven",
        link: "http://www.dennislewis.org/wp-content/uploads/2010/01/image3.jpg",
        scores: [2, 5, 2, 2, 2, 5, 4, 3, 1, 5, 4, 1, 5]
    }
]

module.exports = friends;