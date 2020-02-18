var women = ["Beyonce", "Michelle Obama", "Rihanna", "Alexandria Ocasio-Cortez"];

// function showGifs() {
//     var women = $(this).attr("data-name");
// var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
//         women + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";
//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     }).then(function (response) {
//         var gifs = $("<div>");
//         var rating = results[i].rating;
//         var p = $("<p>").text("Rating: " + rating);
//         var womenImage = $("<img>")
//     });
// }

// function showGifs(womenGifs) {
//     console.log(womenGifs);
// var women = $(this).attr("data-name");
// var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
//         women + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";
//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     }).then(function (response) {
//         console.log(response);
//         for (var i = 0; i < response.data.length; i++) {
//             var gif = $("<div>");

//                 var rating = results[i].rating;

//                 var p = $("<p>").text("Rating: " + rating);

//                 var womenImage = $("<img>");
//                 womenImage.attr("src", results[i].images.fixed_height.url);

//                 gif.append(p);
//                 gif.append(womenImage);

//                 $("#gifsappear").prepend(gif);
//         }
//     });
// }

// function addButons() {
//     $('#display-buttons').empty();
//     for (var i = 0; i < women.length; i++) {
//         var womenButtons = $("<button>");
//         womenButtons.addClass("name-btn");
//         womenButtons.attr("data-name", women[i]);
//         womenButtons.text(women[i]);
//         $("#display-buttons").append(womenButtons);
//     }
// };

// $("#add-woman").on("click", function(event) {
//    event.preventDefault();
//    var powerful = $("#woman-input").val().trim();
//    women.push(powerful);
//    addButons();
// });
// addButons();

// $(document).on("click", ".name-btn", function() {
//     var womenGifs = $(this).data("name");
//     showGifs(womenGifs);
// });

// addButons();


// $("button").on("click", function showGifs() {
//     var women = $(this).attr("data-name");

//     var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
//         women + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";
//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     })
    
//     .then(function(response) {
//         console.log(response);
//         var results = response.data;

//         for (var i = 0; i < results.length; i++) {

//             if (results[i].rating !== "r" && results[i].rating !== "pg-13") {

//                 var gif = $("<div>");

//                 var rating = results[i].rating;

//                 var p = $("<p>").text("Rating: " + rating);

//                 var image = $("<img>");

//                 image.attr("src", results[i].images.fixed_height.url);

//                 gif.append(p);
//                 gif.append(image);

//                 $("#gifsappear").prepend(gif);
//             }
//         }
//     });
// });


// $(document).on("click", ".name-btn", showGifs);
function renderButtons() {
    $('#display-buttons').empty();
    for (var i = 0; i < women.length; i++) {
        
        var w = $("<button>");

        w.addClass("women");

        w.attr("data-name", women[i]);

        w.text(women[i]);

        $("#display-buttons").append(w);
    }
}

$("#add-woman").on("click", function() {
    var input = $("#woman-input").val().trim();
        if(input === "") {
            alert("add a woman please!");
            console.log("add her button was pushed!");
        }
    
})

$("#add-woman").on("click", function(event) {

    event.preventDefault();
    var powerful = $("#woman-input").val().trim();
    women.push(powerful);

    renderButtons(powerful);
});
renderButtons();

$(document).on("click",".women", function(data) {
    console.log(data)
    var women = $(this).attr("data-name");
    console.log(women)
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        women + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    
    .then(function(response) {
        
        var results = response.data;

        for (var i = 0; i < results.length; i++) {

            if (results[i].rating !== "r" && results[i].rating !== "pg-13") {

                var gif = $("<div>");

                var rating = results[i].rating;

                var p = $("<p>").text("Rating: " + rating);

                var image = $("<img>");

                image.attr("src", results[i].images.fixed_height.url);
                // console.log(powerful)
                console.log(women)
                if (women === ""){
                    image.attr("data-name", powerful)
                } else {
                    image.attr("data-name", women)
                }

                gif.append(p);
                gif.append(image);

                $("#gifsappear").prepend(gif);
            }
        }
    })
    // $("#add-woman").on("click", function() {
    //     var field = $("#woman-input")
    //     if(field === "") {
    //         alert("add a woman please!");
    //         console.log("add her button was pushed!");
    //     }
    // })
    // $(".women").on("click", function() {
    //   var data = $(this).attr("data-name");
    //   if (data === "still") {
    //       $(this).attr("src")
    //   }
    // })
})
