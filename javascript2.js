var women = ["Beyonce", "Michelle Obama", "Rihanna", "Alexandria Ocasio-Cortez"];

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

$("#add-woman").on("click", function(event) {
    event.preventDefault();
    
    var powerful = $("#woman-input").val().trim();
    women.push(powerful);

    renderButtons();
});
renderButtons();
$("button").on("click", function() {
    var women = $(this).attr("data-name");

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

                gif.append(p);
                gif.append(image);

                $("#gifsappear").prepend(gif);
            }
        }
    })
})
