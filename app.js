require("dotenv").config();
var chalk = require("chalk");
var axios = require("axios");
var Spotify = require("node-spotify-api");
var omdb = require("omdb-client")
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
    query:command,
    limit: 1
},(error, data) => {
console.log(data.tracks)
var data = {
    artist:data.tracks.items[0].artists[0].name,
    song:data.tracks.items[0].name,
    album:data.tracks.items[0].album.name,
    url:data.tracks.items[0].external_urls.spotify
}
console.log("spotify search - ", data)
})

// } else if (action === "concert"){
//     console.log("concert")
//     axios.get(`https://rest.bandsintown.com/artists/${command}/events?app_id=codingbootcamp`)
//     .then(result => {
//         console.log(result)
//     }).catch(error => {
//         console.log(error)
//     })
} else if (action === "omdb") {
    console.log("omdb")
    omdb.get({
        apiKey:process.env.OMDB_KEY,
        title:command,
        plot:"short",
    },(error, data) => {
        console.log(data)
    })
}

