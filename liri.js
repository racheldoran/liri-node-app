
require("dotenv").config();
var fs = require("fs");
var keys = require("./keys.js");
var axios = require("axios");
var userInput = process.argv[2];
var inputTopic = process.argv[3];
var Spotify = require('node-spotify-api');
var moment = require('moment'); 
moment().format();

axios.get("http://www.omdbapi.com/?t=titanic&y=&plot=short&apikey=trilogy")
.then(
  function(response) {
    console.log("The movie's rating is: " + response.data.imdbRating);
    console.log("Title: " + response.data.Title);
    console.log("Year: " + response.data.Year);
    console.log("Rated: " + response.data.imdbRating);
    console.log("Country: " + response.data.Country);
    console.log("Language: " + response.data.Language);
    console.log("Plot: " + response.data.Plot);
    console.log("Actors: " + response.data.Actors);
    console.log("Rotten Tomatoes: " + response.data.Ratings[1].Value);
  }
);


axios.get("https://rest.bandsintown.com/artists/311/events?app_id=codingbootcamp")
.then(
  function (bandResponse) {
    console.log("Venue: " + response.data[0].venue.name);
    console.log("City: " + response.data[0].venue.city);
    console.log(moment(response.data[0].datetime).format("MM/DD/YYYY"));
    console.log(bandsInTown);

  }

);
var spotify = new Spotify(keys.spotify);

spotify
  .request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
  .then(function(data) {
    console.log(data); 
  })
  .catch(function(err) {
    console.error('Error occurred: ' + err); 
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
