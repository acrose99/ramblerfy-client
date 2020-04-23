const getDanceabilty = require("./data").getDanceabilty;
const getValence = require("./data").getValence;
const getDuration = require("./data").getDuration;
const getTempo = require("./data").getTempo;
const MongoClient = require('mongodb').MongoClient;
const express = require('express');
var cors = require('cors');
const app = express();
app.use(cors());
// const data = require("data");
// this is our MongoDB database
// connects our back end code with the database
const dbUri = "mongodb+srv://arose5:ZaraYaqob14$3@ramblerpy-5rd9x.mongodb.net/test?retryWrites=true&w=majority"
const client = new MongoClient(dbUri, { useNewUrlParser: true,  useUnifiedTopology: true  });

// TODO Ask for User input in UI
//         Currently Hardcoded
function getTracks(variable) {
    if (variable === "danceabilty") {
        let filterDanceabiltyLow = 0.8;
        let filterDanceabiltyHigh = 1.0;
        getDanceabilty(filterDanceabiltyLow,filterDanceabiltyHigh)
    }
    if (variable === "valence") {
        let filterValenceLow = .8;
        let filterValenceHigh = 1;
        getValence(filterValenceLow,filterValenceHigh )
    }
    if (variable === "duration") {
        let filterDurationLow = 3.0;
        let filterDurationHigh = 4.0;
        getDuration(filterDurationLow * 60000, filterDurationHigh * 60000)
    }
    if (variable === "tempo") {
        let filterTempoLow = 100.0;
        let filterTempoHigh = 125.0;
        getTempo(filterTempoLow,filterTempoHigh)
    }
    client.close()
}
getTracks("danceabilty")
