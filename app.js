require("dotenv").config();
console.log(process.env.OMDB_KEY)
var chalk = require("chalk");
var axios = require("axios");
var Spotify = require("node-spotify-api");
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

let spotify = new Spotify({
    id:process.env.SPOTIFY_ID, 
    secret:process.env.SPOTIFY_SECRET
})

if (action === "spotify"){
    console.log("spotify")
    console.log(action, "\n", command)

spotify.search({
    type:"track",
    query:action,
    limit: 1
},(error, data) => {
console.log(data.tracks)
})

} else if (action === "music"){
    console.log("music")
    console.log("\n", command)

} else if (action === "tidal") {
    console.log("tidal")
    console.log(action, "\n", command)
    
}

