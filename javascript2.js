$(document).ready(); {6+
    console.log("page is loaded!");
    var women = ["Beyonce", "Michelle Obama", "Rihanna", "Alexandria Ocasio-Cortez"];

function renderButtons() {
    $('#display-buttons').empty();
    for (var i = 0; i < women.length; i++) {
        
        var w = $("<button>");

        w.addClass("powerfulWoman");

        w.attr("data-name", women[i]);

        w.text(women[i]);

        $("#display-buttons").append(w);
    }
}

$("#add-woman").on("click", function(event) {
    event.preventDefault();
    
    var powerful = $("#woman-input").val().trim();
    women.push(powerful);

    renderButtons();
});
renderButtons();
$("button").on("click", function() {
    var person = $(person).attr("data-person");

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        person + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    
    .then(function(response) {
        
        var results = response.data;

        for (var a = 0; a < results.length; a++) {

            if (results[a].rating !== "r" && results[a].rating !== "pg-13") {

                var gif = $("<div>");

                var rating = results[a].rating;

                var p = $("<p>").text("Rating: " + rating);

                var image = $("<img>");

                image.attr("src", results[a].images.fixed_height.url);

                gif.append(p);
                gif.append(image);

                $("#gifsappear").prepend(gif);
            }
        }
    })
})
}