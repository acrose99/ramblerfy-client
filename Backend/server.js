const MongoClient = require('mongodb').MongoClient;
const express = require('express');
var cors = require('cors');
const app = express();
app.use(cors());

// this is our MongoDB database
// connects our back end code with the database
const dbUri = "mongodb+srv://arose5:ZaraYaqob14$3@ramblerpy-5rd9x.mongodb.net/test?retryWrites=true&w=majority"
const client = new MongoClient(dbUri, { useNewUrlParser: true });
client.connect(err => {
    const collection = client.db("Spotify_Tracks").collection("Tracks");
    client.on('error', console.error.bind(console, 'MongoDB connection error:'));
            collection.find('tracks').toArray(function (err, data) {
                const songs = data[0]['tracks'];
                // console.log(songs)
                var high = parseInt(Math.random() * (22539 - 100) + 100);
                console.log(high);
                var low = high - 100;
                console.log(low);
                let song;
                let wantedsongs = [];
                // TODO Ask for User input in UI
                // var filterLow = prompt("What low value do you want?");
                // var filterHigh = prompt("What high value do you want?");
                let filterLow = .80;
                let filterHigh = 1.0;
                while (low <= high) {
                    song = songs[low];
                    const danceability = song['danceability'];
                    if (danceability >= filterLow && danceability <= filterHigh) {
                        wantedsongs.push(song)
                    }
                    low++;
                }
                var i
                for (i = 0; i < 5; i++) {
                    let cover_image_url = wantedsongs[i]['cover_image_url'];
                    let spotify_url = wantedsongs[i]['spotify_url'];
                    let track_album = wantedsongs[i]['track_album'];
                    let track_artist = wantedsongs[i]['track_artist'];
                    let track_name = wantedsongs[i]['track_name'];
                    let danceability = wantedsongs[i]['danceability'];
                    console.log("COVER IMAGE: " + cover_image_url);
                    console.log("SPOTIFY URL: " + spotify_url);
                    console.log("ALBUM: " + track_album);
                    console.log("ARTIST:" + track_artist);
                    console.log("SONG: " + track_name);
                    console.log("DANCEABILITY: " + danceability);
                    console.log('--------------------------------');
                    }
            })
    // perform actions on the collection object
    client.close();
});
