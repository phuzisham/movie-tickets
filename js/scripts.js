// Backend
function Ticket(name, movie, time, age) {
  this.name = name;
  this.movie = movie;
  this.time = time;
  this.age = age;
}
Ticket.prototype.finalPrice = function() {
  var basePrice = 10;
  // Where we put code to additionally modify the price
  return basePrice - this.age;
};

var starWars = {name: "Star Wars VIII", times: ["12:00pm", "1:00pm", "4:00pm", "6:00pm", "9:00pm", "11:00pm"]};
var it = {name: "It", times: ["2:00pm", "8:00pm", "9:00pm", "11:00pm", "12:00am"]};
var citizenKane = {name: "Citizen Kane", times: ["11:00am", "1:00pm", "3:00pm"]};

var movies = [starWars, it, citizenKane];

$(document).ready(function() {
  $('#select-movie').change('#select-movie', function() {
    var select = document.getElementById("select-time");
    $('#select-time').empty();
    var selectedMovieTimes = movies[$('#select-movie').val()].times;
    for(var i = 0; i < selectedMovieTimes.length; i++) {
      var optionElement = document.createElement("option");
      optionElement.textContent = selectedMovieTimes[i];
      optionElement.value = selectedMovieTimes[i];
      select.appendChild(optionElement);
    }
  });

  $("form#ticket-form").submit(function(event){
    event.preventDefault();

    var name = "Bob";
    var movieName = $("#select-movie").val();
    var movieTime = $("#select-time").val();
    var moviePriceMod = $("#select-age").val();

    var newTicket = new Ticket(name, movieName, movieTime, moviePriceMod);
    alert(newTicket.finalPrice());

    // $(".ticket").last().click(function()) {
    //
    // }
  });
});
