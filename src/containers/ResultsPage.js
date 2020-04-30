import React, { useState, useEffect } from 'react';
import { Auth } from "aws-amplify";
import { LinkContainer } from "react-router-bootstrap";
import "./ResultsPage.css";
import LoadButton from "../components/LoadButton";
import Tracks from "../components/Tracks";
import Pagination from "../components/Pagination";


//Page user can search for songs based on different measures
export default function ResultsPage(props) {
  const [tracks, setTracks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [tracksPerPage, setTracksPerPage] = useState(4);

  useEffect(() => {
    const fetchTracks = async () => {
      setIsLoading(true);
      const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(props.location.state.searchParams)
      };

      try {
        const res = await fetch(
          //http://localhost:3000/prod/tracks
          'https://islypxhntd.execute-api.us-east-2.amazonaws.com/prod/tracks',
          requestOptions
        );

        const data = await res.json();
        console.log(data);
        setTracks(data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }

    }

    fetchTracks();
  }, []);

  // get current tracksPerPage
  const indexOfLastTrack = currentPage * tracksPerPage;
  const indexOfFirstTrack = indexOfLastTrack - tracksPerPage;
  const currentTracks = tracks.slice(indexOfFirstTrack, indexOfLastTrack)

  // change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  function AuthPage() {
    // console.log("on results page:");
    // console.log(props.userResults);
    return (
      <div className='container mt-5'>
        <h1 className="text-primary mb-3">Search Results</h1>
        <Tracks tracks={currentTracks} isLoading={isLoading} />
        <Pagination
          tracksPerPage={tracksPerPage}
          totalTracks={tracks.length}
          paginate={paginate}
        />
        {!isLoading
          ? <h5 className="linker">
            <LinkContainer to="/searchpage">
              <a href="!#">back to search</a>
            </LinkContainer>
            </h5>
          : <h5></h5>
        }
      </div>
    )
  }

  return (
    <div className="ResultsPage">
      {AuthPage()}
    </div>
  );

}
