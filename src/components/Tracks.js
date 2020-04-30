import React from 'react';
import "./Tracks.css";


const Tracks = ({ tracks, isLoading }) => {
  if(isLoading) {
    return <h2>Loading...</h2>
  }

  if(tracks.length === 0) {
    return <h2>No Results</h2>
  } else {
    return (
      <div id="container">
        <div className="pix-grid">
            {tracks.map((track, i) => {
              return (
                <div key={i} className="card mb-4 shadow-sm">
                  <img src={track.cover_image_url} alt=""/>
                  <div className="card-body">
                    <h5>{track.track_artist}</h5>
                    <p className="card-text">
                      <strong><i className="fas fa-play"></i> Track</strong>: {track.track_name}
                      <br/>
                      <strong><i className="fas fa-compact-disc"></i> Album</strong>: {track.track_album}
                    </p>
                  </div>
                </div>
                // <li key={i} className="list-group-item">
                //   {track.track_name} -
                //   {track.track_artist}
                // </li>
              )
            })}
        </div>
      </div>
    )
  }
}

export default Tracks;
