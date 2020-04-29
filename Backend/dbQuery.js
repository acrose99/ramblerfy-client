const config = require('./config')
const MongoClient = require('mongodb').MongoClient;
const express = require('express');
var cors = require('cors');
const app = express();
app.use(cors());

// this is our MongoDB database
// connects our back end code with the database
//TODO use Cognito/Config.js

const dbUri = "mongodb+srv://arose5:ZaraYaqob14$3@ramblerpy-5rd9x.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(dbUri, {useNewUrlParser: true});

//Returns 5 random songs based on the user filters filterLow and filterHigh


//TODO For ALL:
//TODO: Ask for User input of filterLow and filterHigh
//TODO: Create handling of repeat songs OR have better randomization
//TODO: Optimize performance by possibly using Mongo's built in filters (I dont think they will work based of the structure of the doc)

function searchDb(filterDanceabiltyLow, filterDanceabiltyHigh, filterValenceLow, filterValenceHigh, filterTempoLow, filterTempoHigh,filterDurationLow, filterDurationHigh)  {
  MongoClient.connect(dbUri, { useNewUrlParser: true,  useUnifiedTopology: true  }, function(err, db) {
    if (err) {
      console.log(err);
      throw err;
    }
    var dbo = db.db("Spotify_Tracks");
      dbo.collection("Tracks").aggregate([
          {$project: {
                  tracks: {$filter: {
                          input: '$tracks',
                          as: 'track',
                          cond: {$and: [

                                  //Lower Input
                                  {$gte: ['$$track.danceability', filterDanceabiltyLow]},
                                  //Higher Input
                                  {$lte: ['$$track.danceability', filterDanceabiltyHigh]},

                                  //Lower Input
                                  {$gte: ['$$track.valence:', filterValenceLow]},
                                  //Higher Input
                                  {$lte: ['$$track.valence:', filterValenceHigh]},

                                  //Lower Input
                                  {$gte: ['$$track.tempo', filterTempoLow]},
                                  //Higher Input
                                  {$lte: ['$$track.tempo', filterTempoHigh]},

                                  //Lower Input
                                  {$gte: ['$$track.duration_ms', filterDurationLow]},
                                  //Higher Input
                                  {$lte: ['$$track.duration_ms', filterDurationHigh]},

                              ]}
                        }},
                  _id: 0
              }}
      ])
    .toArray(function(err, result) {
      if (err) {
        console.log(err);
        throw err;
      }
        //only stores the JSON
        filteredSongs = result[0]['tracks']

      //we want to display 5 songs each search

      if (result[0].length >= 5) {
          console.log("Please broaden your search variables!")
      }
      else{
          for (i = 0; i < 5; i ++) {
              let cover_image_url = filteredSongs[i]['cover_image_url'];
              let spotify_url = filteredSongs[i]['spotify_url'];
              let track_album = filteredSongs[i]['track_album'];
              let track_artist = filteredSongs[i]['track_artist'];
              let track_name = filteredSongs[i]['track_name'];
              let duration_ms = filteredSongs[i]['duration_ms'];
              let danceability = filteredSongs[i]['danceability'];
              let valence = filteredSongs[i]['valence:'];
              let tempo = filteredSongs[i]['tempo'];
              console.log("COVER IMAGE: " + cover_image_url);
              console.log("SPOTIFY URL: " + spotify_url);
              console.log("ALBUM: " + track_album);
              console.log("ARTIST:" + track_artist);
              console.log("SONG: " + track_name);
              var minutes = Math.floor(duration_ms / 60000);
              var seconds = ((duration_ms % 60000) / 1000).toFixed(0);
              var duration = minutes + ":" + (seconds < 10 ? '' : '') + seconds;
              console.log("DURATION: " + duration);
              console.log("DANCEABILITY: " + danceability);
              console.log("VALENCE: " + valence);
              console.log("TEMPO: " + tempo);
              console.log('--------------------------------');
          }
      }
      db.close();
    });
  });
}

// searchDb();
module.exports = {
    searchDb
}