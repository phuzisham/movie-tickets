// Backend
function Ticket(name, movie, time, price, age) {
  this.name = name;
  this.movie = movie;
  this.time = time;
  this.price = price;
  this.age = age;
}
Ticket.prototype.finalPrice = function() {
  return this.price - this.age;
};

var starWars = {name: "Star Wars VIII", times: [{time: "12:00pm", price: 7.99}, {time: "1:00pm", price: 7.99}, {time: "4:00pm", price: 7.99}, {time: "6:00pm", price: 9.99}, {time: "9:00pm", price: 9.99}, {time: "11:00pm", price: 9.99}]};
var pulpFiction = {name: "Pulp Fiction", times: [{time: "2:00pm", price: 7.99}, {time: "8:00pm", price: 9.99}, {time: "9:00pm", price: 9.99}, {time: "11:00pm", price: 9.99}, {time: "12:00am", price: 9.99}]};
var citizenKane = {name: "Citizen Kane", times: [{time: "11:00am", price: 7.99}, {time: "1:00pm", price: 7.99}, {time: "3:00pm", price: 7.99}]};

var movies = [starWars, pulpFiction, citizenKane];

$(document).ready(function() {
  $('#select-movie').change('#select-movie', function() {
    var select = document.getElementById("select-time");
    $('#select-time').empty();
    var selectedMovieTimes = movies[$('#select-movie').val()].times;
    for(var i = 0; i < selectedMovieTimes.length; i++) {
      var optionElement = document.createElement("option");
      optionElement.textContent = selectedMovieTimes[i].time;
      optionElement.value = selectedMovieTimes[i].price;
      select.appendChild(optionElement);
    }
  });

  $("form#ticket-form").submit(function(event){
    event.preventDefault();

    var name = $("#name").val();
    var movieName = movies[$("#select-movie").val()].name;
    var movieTime = $("#select-time option:selected").text();
    var moviePrice = $("#select-time").val();
    var agePriceMod = $("#select-age").val();

    var newTicket = new Ticket(name, movieName, movieTime, moviePrice, agePriceMod);

    $('ul#tickets').append('<li><span class="ticket">' + newTicket.name + '</span></li>');

    $(".ticket").last().click(function() {
      $("#show-ticket").show();
      $("#show-ticket h2").text(newTicket.name);
      $(".movie-name").text(newTicket.movie);
      $(".movie-time").text(newTicket.time);
      $(".movie-price").text("$"+newTicket.finalPrice());
    });
  });
});
