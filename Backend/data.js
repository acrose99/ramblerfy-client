const MongoClient = require('mongodb').MongoClient;
const express = require('express');
var cors = require('cors');
const app = express();
app.use(cors());

// this is our MongoDB database
// connects our back end code with the database
const dbUri = "mongodb+srv://arose5:ZaraYaqob14$3@ramblerpy-5rd9x.mongodb.net/test?retryWrites=true&w=majority"
const client = new MongoClient(dbUri, { useNewUrlParser: true });

//Returns 5 random songs based on the user filters filterLow and filterHigh



//TODO For ALL:
    //TODO: Ask for User input of filterLow and filterHigh
    //TODO: Create handling of repeat songs OR have better randomization
    //TODO: Optimize performance by possibly using Mongo's built in filters (I dont think they will work based of the structure of the doc)

 function getDanceabilty(filterLow, filterHigh)  {
    client.connect(err => {
        const collection = client.db("Spotify_Tracks").collection("Tracks");
        client.on('error', console.error.bind(console, 'MongoDB connection error:'));
        collection.find('tracks').toArray(function (err, data) {
            const songs = data[0]['tracks'];
            // console.log(songs)
            var high = parseInt(Math.random() * (22539 - 100) + 100);
            // console.log(high);
            var low = high - 100;
            // console.log(low);
            let song;
            let wantedsongs = [];
            // TODO Ask for User input in UI
            // var filterLow = prompt("What low value do you want?");
            // var filterHigh = prompt("What high value do you want?");;
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
                try {
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
            catch (e) {
                    console.log('Error with this song');
                } {

                }
            }
        })
        client.close()
        // perform actions on the collection object
    })}
 function getValence(filterLow, filterHigh) {
    client.connect(err => {
        const collection = client.db("Spotify_Tracks").collection("Tracks");
        client.on('error', console.error.bind(console, 'MongoDB connection error:'));
        collection.find('tracks').toArray(function (err, data) {
            const songs = data[0]['tracks'];
            // console.log(songs)
            var high = parseInt(Math.random() * (22539 - 100) + 100);
            // console.log(high);
            var low = high - 100;
            // console.log(low);
            let song;
            let wantedsongs = [];
            // TODO Ask for User input in UI
            // var filterLow = prompt("What low value do you want?");
            // var filterHigh = prompt("What high value do you want?");
            let filterLow = .0;
            let filterHigh = .2;
            while (low <= high) {
                song = songs[low];
                const valence = song['valence:'];
                // console.log(valence);
                if (valence >= filterLow && valence <= filterHigh) {
                    wantedsongs.push(song)
                }
                low++;
            }
            var i
            for (i = 0; i < 5; i++) {
                try {
                    let cover_image_url = wantedsongs[i]['cover_image_url'];
                    let spotify_url = wantedsongs[i]['spotify_url'];
                    let track_album = wantedsongs[i]['track_album'];
                    let track_artist = wantedsongs[i]['track_artist'];
                    let track_name = wantedsongs[i]['track_name'];
                    let valence = wantedsongs[i]['valence:'];
                    console.log("COVER IMAGE: " + cover_image_url);
                    console.log("SPOTIFY URL: " + spotify_url);
                    console.log("ALBUM: " + track_album);
                    console.log("ARTIST:" + track_artist);
                    console.log("SONG: " + track_name);
                    console.log("VALENCE: " + valence);
                    console.log('--------------------------------');
                }
                catch (e) {
                    console.log('Error with this song');
                } {

                }
            }
        })
        client.close()
        // perform actions on the collection object
    });
}
 function getDuration(filterLow, filterHigh) {
    client.connect(err => {
        const collection = client.db("Spotify_Tracks").collection("Tracks");
        client.on('error', console.error.bind(console, 'MongoDB connection error:'));
        collection.find('tracks').toArray(function (err, data) {
            const songs = data[0]['tracks'];
            // console.log(songs)
            var high = parseInt(Math.random() * (22539 - 100) + 100);
            // console.log(high);
            var low = high - 100;
            // console.log(low);
            let song;
            let wantedsongs = [];
            // TODO Ask for User input in UI
            // var filterLow = prompt("What low value do you want?");
            // var filterHigh = prompt("What high value do you want?");
            let filterLow = 2.0;
            let filterHigh = 6.0;
            while (low <= high) {
                song = songs[low];
                const duration = song['duration_ms'];
                if (duration >= filterLow * 60000 && duration <= filterHigh * 60000) {
                    // console.log(song['duration_ms']);
                    wantedsongs.push(song)
                }
                low++;
            }
            var i
            for (i = 0; i < 5; i++) {
                try {
                    let cover_image_url = wantedsongs[i]['cover_image_url'];
                    let spotify_url = wantedsongs[i]['spotify_url'];
                    let track_album = wantedsongs[i]['track_album'];
                    let track_artist = wantedsongs[i]['track_artist'];
                    let track_name = wantedsongs[i]['track_name'];
                    let duration = wantedsongs[i]['duration_ms'];
                    var minutes = Math.floor(duration / 60000);
                    var seconds = ((duration % 60000) / 1000).toFixed(0);
                    duration = minutes + ":" + (seconds < 10 ? '' : '') + seconds;
                    console.log("COVER IMAGE: " + cover_image_url);
                    console.log("SPOTIFY URL: " + spotify_url);
                    console.log("ALBUM: " + track_album);
                    console.log("ARTIST:" + track_artist);
                    console.log("SONG: " + track_name);
                    console.log("DURATION: " + duration);
                    console.log('--------------------------------');
                }
                catch (e) {
                    console.log('Error with this song');
                } {

                }
            }
        })
        client.close()
        // perform actions on the collection object
    });
}
 function getTempo(filterLow, filterHigh) {
    const dbUri = "mongodb+srv://arose5:ZaraYaqob14$3@ramblerpy-5rd9x.mongodb.net/test?retryWrites=true&w=majority"
    const client = new MongoClient(dbUri, { useNewUrlParser: true });
    client.connect(err => {
        const collection = client.db("Spotify_Tracks").collection("Tracks");
        client.on('error', console.error.bind(console, 'MongoDB connection error:'));
        collection.find('tracks').toArray(function (err, data) {
            const songs = data[0]['tracks'];
            // console.log(songs)
            var high = parseInt(Math.random() * (22539 - 100) + 100);
            // console.log(high);
            var low = high - 100;
            // console.log(low);
            let song;
            let wantedsongs = [];
            // TODO Ask for User input in UI
            // var filterLow = prompt("What low value do you want?");
            // var filterHigh = prompt("What high value do you want?");
            let filterLow = 100.0; //we should make some limits for this (After looking at 500 songs, 75 looks good)
            let filterHigh = 150.0; ////we should make some limits for this (After looking at 500 songs, 180-185 looks good)
            while (low <= high) {
                song = songs[low];
                const tempo = song['tempo'];
                // console.log(tempo);
                if (tempo >= filterLow  && tempo <= filterHigh ) {
                    wantedsongs.push(song)
                }
                low++;
            }
            var i
            for (i = 0; i < 5; i++) {
                try {
                    let cover_image_url = wantedsongs[i]['cover_image_url'];
                    let spotify_url = wantedsongs[i]['spotify_url'];
                    let track_album = wantedsongs[i]['track_album'];
                    let track_artist = wantedsongs[i]['track_artist'];
                    let track_name = wantedsongs[i]['track_name'];
                    let tempo = wantedsongs[i]['tempo'];
                    console.log("COVER IMAGE: " + cover_image_url);
                    console.log("SPOTIFY URL: " + spotify_url);
                    console.log("ALBUM: " + track_album);
                    console.log("ARTIST:" + track_artist);
                    console.log("SONG: " + track_name);
                    console.log("TEMPO: " + tempo);
                    console.log('--------------------------------');
                }
                catch (e) {
                    console.log('Error with this song');
                } {

                }
            }
        })
        // perform actions on the collection object
        client.close()
    });
}
module.exports = {

    getDanceabilty,
    getTempo,
    getDuration,
    getValence
}