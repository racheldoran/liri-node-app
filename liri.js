
require("dotenv").config();
var fs = require("fs");
var keys = require("./keys.js");
var axios = require("axios");
var userInput = process.argv[2];
var inputTopic = process.argv[3];
var Spotify = require('node-spotify-api');
var moment = require('moment'); 
moment().format();

axios.get("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy")
.then(
  function(response) {
    console.log("The movie's rating is: " + response.data.imdbRating);
    console.log("Title: " + movieResponse.data.Title);
    console.log("Year: " + movieResponse.data.Year);
    console.log("Rated: " + movieResponse.data.imdbRating);
    console.log("Country: " + movieResponse.data.Country);
    console.log("Language: " + movieResponse.data.Language);
    console.log("Plot: " + movieResponse.data.Plot);
    console.log("Actors: " + movieResponse.data.Actors);
    console.log("Rotten Tomatoes: " + movieResponse.data.Ratings[1].Value);
  }
);


axios.get("https://rest.bandsintown.com/artists/" + "?app_id=13e695f4ae46f16b55ac1d88f280ef60")
.then(
  function (bandResponse) {
    console.log("Venue: " + bandResponse.data[0].venue.name);
    console.log("City: " + bandResponse.data[0].venue.city);
    console.log(moment(bandResponse.data[0].datetime).format("MM/DD/YYYY"));
    console.log(bandsInTown);
  }

);
var spotify = new Spotify(keys.spotify);

spotify.search({ type: 'track', query: 'If Not For You' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});

function doWhatInfo() {

  fs.readFile("random.txt", "utf8", function (error, data) {
    if (error) {
      return console.log(error);
    }
    var output = data.split(",");
    for (var i = 0; i < output.length; i++) {
      console.log(output[i]);
    }
  });
};

switch (inputTopic) {
  case "concert-this":
    bandInfo();
    break;

  case "spotify-this-song":
    songInfo();
    break;

  case "movie-this":
    movieInfo();
    break;

  case "do-what-it-says":
    doWhatInfo();
    break;
}

function bandInfo() {
  var bandName = "";
  for (var i = 3; i < userInput.length; i++) {
    if (i > 3 && i < userInput.length) {
      bandName = bandName + "+" + userInput[i];
    }
    else {
      bandName += userInput[i];
    }
  }
  function songInfo() {
    var songName = "";
    for (var i = 3; i < userInput.length; i++) {
      if (i > 3 && i < userInput.length) {
        songName = songName + "+" + userInput[i];
      }
      else {
        songName += userInput[i];
      }
      
    }
    function movieInfo() {
      var movieName = "";
      for (var i = 3; i < userInput.length; i++) {
        if (i > 3 && i < userInput.length) {
          movieName = movieName + "+" + userInput[i];
        }
        else {
          movieName += userInput[i];
        }
      }

    }
  }
}
