import React from 'react';
import './Documentation.css';

//home page
export default function Home() {
    return (

        <div id="containerdocumentation">
            <div className="main-content-headerDocumentation">
                <h1>How does this Work? </h1>
                <h2>We are using the Spotify API to find the following, using our database of 25,000 songs:</h2>

                <ul class="description">
                    <li>
                        <h3>Danceability</h3>
                        <p>Danceability describes how suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity. A value of 0.0 is least danceable and 1.0 is most danceable.</p>
                    </li>
                    <li>
                        <h3>Duration</h3>
                        <p>The duration of the track in Minutes and seconds.</p>
                    </li>
                    <li>
                        <h3>Tempo</h3>
                        <p>The overall estimated tempo of a track in beats per minute (BPM), from a limit of 70 to 190.</p>
                    </li>
                    <li>
                        <h3>Valence</h3>
                        <p>A measure from 0.0 to 1.0 describing the musical positiveness conveyed by a track. Tracks with high valence sound more positive (e.g. happy, cheerful, euphoric), while tracks with low valence sound more negative (e.g. sad, depressed, angry).</p>
                    </li>

                </ul>
                <a href="https://developer.spotify.com/console/">Check out the Spotify API</a>
            </div>
        </div>

    );
}