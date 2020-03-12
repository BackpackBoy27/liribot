var chalk = require("chalk");
var axios = require("axios");
// var spotify = require("node-spotify-api");
var moment = require("moment");
var dotenv = require("dotenv");

var action = process.argv[2];
var command = process.argv[3];
// console.log(action);
// console.log(command);


// function dogtowel(action, command){
     if (action) { 
        console.log(chalk.yellow(action))
    }
    if (command) { 
        console.log(chalk.red(command));
    };
// };