require("dotenv").config();
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

var params = {
    screen_name: 'rachmitch_'
} && {
    count: 20
};