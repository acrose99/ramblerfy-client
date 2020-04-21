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
            collection.find({}).toArray(function (err, data) {
                console.log(data); // it will print your collection data
                console.log(data[0]);
            })
    // perform actions on the collection object
    client.close();
});
