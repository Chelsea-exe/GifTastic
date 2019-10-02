//From line 2-19 was to represent the "topics/array", to create the buttons
//from 23-48 is too link the giphy api to the div on my html with rating and etc

var women = ["Beyonce", "Michelle Obama", "Serena Williams"];
function renderButtons() {
    $('#buttons').empty()

event.preventDefault();
for (var w = 0; w < women.length; w++){
    var button = $('<button>')
button.text(women[w])
$('#buttons').append(button)
}
}

$("#add-woman").on("click", function(event) {

var womanName = $('#woman-input').val()

  women.push(womanName)

  renderButtons()
});
renderButtons();


$('<button>').on("click", function() {
var person = $(this).attr("data-person");
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
person + "&api_key=ZR5BQhq7rBHkiAiO1jjKzd1b8Lm5SD07&limit=10";

$.ajax({
    url: queryURL,
    method: "GET"
})

.then(function(response) {
  //  console.log(queryURL);
    console.log(response);
    var results = results.data;
    for (var w = 0; w < women.length; w++) {
    var personDiv = $("<div>");

    var rating = results[w].rating;

    var p = $("<p>").text("Rating: " + results[w].rating);
    var personImage = $("<img>");
    personImage.attr("src", results[w].images.fixed_height.url);
    personDiv.append(p);
    personDiv.append(personImage);
    $("#Gifs").prepend(personDiv);
    }
})
})