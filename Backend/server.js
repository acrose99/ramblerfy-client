const searchDb = require("./dbQuery").searchDb;
const MongoClient = require('mongodb').MongoClient;
const express = require('express');
var cors = require('cors');
const app = express();
app.use(cors());
// const data = require("data");
// this is our MongoDB database
// connects our back end code with the database
// const dbUri = "mongodb+srv://arose5:ZaraYaqob14$3@ramblerpy-5rd9x.mongodb.net/test?retryWrites=true&w=majority"


// TODO Ask for User input in UI
//         Currently Hardcoded
function searchTwoFilters() {
    let filterDanceabiltyLow = 0.5;
    let filterDanceabiltyHigh = 1.0;

    let filterValenceLow = .5;
    let filterValenceHigh = 1;

    //to simulate user inputting minutes

    // var lowMin = 4;
    // var filterDurationLow  = lowMin * 60000
    // var highMin = 4;
    // var filterDurationHigh  = lowMin * 60000


    let filterDurationLow = 150000;
    let filterDurationHigh = 170000;

    let filterTempoLow = 100.0;
    let filterTempoHigh = 125.0;
    searchDb(filterDanceabiltyLow, filterDanceabiltyHigh, filterValenceLow, filterValenceHigh, filterTempoLow, filterTempoHigh, filterDurationLow, filterDurationHigh);
}
function searchOneFilter() {

    ///danceabilty set at 50 by user
    let filterDanceabiltyLow = 0.5;
    let filterDanceabiltyHigh = filterDanceabiltyLow + .9;

    //valence set at 5 by user
    let filterValenceLow = .5;
    let filterValenceHigh = filterValenceLow + .9;

    //to simulate user inputting minutes

    // var lowMin = 4;
    // var filterDurationLow  = lowMin * 60000
    // var highMin = 4;
    // var filterDurationHigh  = lowMin * 60000

    //duration set at 2 minutes
    let filterDurationLow = 120000;
    let filterDurationHigh = filterDurationLow + 59000;

    //duration set at 110 bpm
    let filterTempoLow = 110.0;
    let filterTempoHigh = 119.0;
    searchDb(filterDanceabiltyLow, filterDanceabiltyHigh, filterValenceLow, filterValenceHigh, filterTempoLow, filterTempoHigh, filterDurationLow, filterDurationHigh);
}

// searchTwoFilters()
searchOneFilter()