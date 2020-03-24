require("dotenv").config();
var chalk = require("chalk");
var axios = require("axios");
var Spotify = require("node-spotify-api");
var omdb = require("omdb-client")
var action = process.argv[2];
// var is a variable talking to action which is a object. And process is used to talk to the argv which is the console which is tlaking to a array.
// targets variable in terminal using process.argv[] assigned to action 


// var command = process.argv[3];

var command = process.argv.splice(3).join(" ")
// targets variable in terminal, and applies splice and join method
// splice removes objects from the array and join combines the user input with a space in between.
// the splice method targets the 3rd index object in the array.
// join inserts empty space in between the object inside the console log.

// spotify this song Bruno Mars

console.log(action);
console.log(command);


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
    if(error) {
        return error
    }
// this function uses spotify as a search command in the console log, using and error first callback.
// error first callback allows the user to see if the error lives in thie codeblock. instead of .catch

// console.log(data.tracks)
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
        // console.log(data)
        var data = {
            title:data.Title,
            year:data.Year,
            rating:data.imdbRating,
            location:data.Country,
            languages:data.Language,
            plot:data.Plot,
            actors:data.Actors
        }
        console.log("omdb search - ", data)
    })
}

