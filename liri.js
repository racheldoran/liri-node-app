require("dotenv").config();
var keys = require("./keys.js");


var params = {
    screen_name: 'rachmitch_'
} && {
    count: 20
};

liri
.prompt([
    // Here we create a basic text prompt.
    {
      type: "input",
      message: "What is your name?",
      name: "username"
    },
    // Here we create a basic password-protected text prompt.
    {
      type: "password",
      message: "Set your password",
      name: "password"
    },
    // Here we give the user a list to choose from.
    {
      type: "list",
      message: "Which Pokemon do you choose?",
      choices: ["Bulbasaur", "Squirtle", "Charmander"],
      name: "pokemon"
    },
    // Here we ask the user to confirm.
    {
      type: "confirm",
      message: "Are you sure:",
      name: "confirm",
      default: true
    }
  ])
  .then(function(liriResponse) {
    // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
    if (liriResponse.confirm) {
      console.log("\nWelcome " + liriResponse.username);
      console.log("Your " + liriResponse + " is ready for battle!\n");
    }
    else {
      console.log("\nThat's okay " + liriResponse.username + ", come again when you are more sure.\n");
    }
  });