$(document).ready(function() {

    $("#submit").on("click", function(event) {
        event.preventDefault();

        //friendsList grabs the data from friends.js
        //bestMatch is going to store the absolute value scores between each person
        //score will keep track of the absolute value for all of the scores.

        // var bestMatch = [];
        // var score = 0;
        //builds a new friend object based off of the input
        var friend = {
            name: $("#nameInput").val().trim(),
            link: $("#imageLink").val().trim(),
            scores: [
                $("#q-one").val(),
                $("#q-two").val(),
                $("#q-three").val(),
                $("#q-four").val(),
                $("#q-five").val(),
                $("#q-six").val(),
                $("#q-seven").val(),
                $("#q-eight").val(),
                $("#q-nine").val(),
                $("#q-ten").val(),
                $("#q-eleven").val(),
                $("#q-twelve").val(),
                $("#q-thirteen").val()
            ]
        }

        // for (var i = 0; i < friendsList.length; i++) {
        //     for (var j = 0; j < friendsList[i].scores.length; j++) {
        //         score += (Math.abs((friendsList[i].scores[j] - friend.scores[j])));
        //     }
        //     bestMatch[i] = score;
        //     score = 0;
        // }

        // console.log(bestMatch)

        $.post('/api/friends', friend).done(function(data) {
            console.log(data);
        });

    });
});