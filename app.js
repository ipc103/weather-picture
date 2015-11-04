
var api_key = ""

function preload() {

}

function setup() {
  var weather;
  createCanvas(windowWidth, windowHeight);
  var url = "http://api.wunderground.com/api/" + api_key + "/conditions/q/NY/new_york.json";
  debugger;
  $.getJSON(url, function( data ){
    weather = data.current_observation;
    setBackgroundColor( weather );
  })
}

function draw() {

}

function setBackgroundColor( weather ) {
  var backgroundColor;
    if ( weather.temp_f > 80 ) {
      var backgroundColor = "red";
    } else if ( weather.temp_f > 70 ) {
      backgroundColor = "orange";
    } else if ( weather.temp_f > 60 ) {
      backgroundColor = "yellow";
    }
    background( backgroundColor );
}