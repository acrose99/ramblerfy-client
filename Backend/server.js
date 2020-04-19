
const mongoose = require('mongoose');
const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const Data = require('./data');

const API_PORT = 3001;
const app = express();
app.use(cors());
const router = express.Router();

// this is our MongoDB database
// connects our back end code with the database
const dbUri = "mongodb+srv://arose5:ZaraYaqob14$3@ramblerpy-5rd9x.mongodb.net/test?retryWrites=true&w=majority"
mongoose.connect(dbUri, { useNewUrlParser: true });

let db = mongoose.connection;


db.once('open', () => console.log('connected to the database'));

// checks if connection with the database is successful
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

// this is our get method
// this method fetches all available data in our database
router.get('/getData', (req, res) => {
    Data.find((err, data) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true, data: data });
    });
});

// this is our update method
// this method overwrites existing data in our database
router.post('/updateData', (req, res) => {
    const { uri, update } = req.body;
    Data.findByIdAndUpdate(uri, update, (err) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
    });
});

// this is our delete method
// this method removes existing data in our database
router.delete('/deleteData', (req, res) => {
    const { uri } = req.body;
    Data.findByIdAndRemove(uri, (err) => {
        if (err) return res.send(err);
        return res.json({ success: true });
    });
});

// this is our create methid
// this method adds new data in our database
router.post('/putData', (req, res) => {
    let data = new Data();

    const {uri, spotify_url, cover_image_url, track_name, track_artist, track_album,
        duration_ms, loudness, tempo, key, danceability, energy, valence} = req.body;

    if ((!uri && uri !== 0) || !spotify_url) {
        return res.json({
            success: false,
            error: 'INVALID INPUTS',
        });
    }
    data.uri = uri;
    data.spotify_url = spotify_url;
    data.cover_image_url = cover_image_url;
    data.track_name = track_name;
    data.track_artist = track_artist;
    data.track_album = track_album;
    data.duration_ms = duration_ms;
    data.loudness = loudness;
    data.tempo = tempo;
    data.key = key;
    data.danceability = danceability;
    data.energy = energy;
    data.valence = valence;

    data.save((err) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
    });
});

// append /api for our http requests
app.use('/api', router);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
