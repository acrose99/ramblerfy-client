const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure
const DataSchema = new Schema(
    {
        cover_image_url: String,
        danceability: Number,
        duration_ms: Number,
        energy: Number,
        key: Number,
        loudness: Number,
        spotify_url: String,
        tempo: Number,
        track_album: String,
        track_artist: String,
        track_name: String,
        uri: String,
        valence: Number
    },
    { timestamps: true }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Data", DataSchema);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Data", DataSchema);