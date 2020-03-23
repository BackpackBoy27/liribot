var chalk = require("chalk");
// var axios = require("axios");
// var spotify = require("node-spotify-api");
// var moment = require("moment");
// var dotenv = require("dotenv");

var action = process.argv[2];
// var command = process.argv[3];

var command = process.argv.splice(3).join(" ")
// spotify this song Bruno Mars

// console.log(action);
// console.log(command);


// function dogtowel(action, command){
    //  if (action) { 
    //     console.log(chalk.yellow(action))
    // }
    // if (command) { 
    //     console.log(chalk.red(command));
    // };
// };


if (action === "spotify"){
    console.log("spotify")
    console.log(action, "\n", command)
} else if (action === "music"){
    console.log("music")
    console.log("\n", command)
} else if (action === "tidal") {
    console.log("tidal")
    console.log(action, "\n", command)
}