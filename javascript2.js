var women = ["Beyonce", "Michelle Obama", "Rihanna", "Alexandria Ocasio-Cortez"];

function renderButtons() {
    $('#display-buttons').empty();
    for (var i = 0; x < women.length; i++) {
        
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