import React, {useState} from 'react';
import "./SearchPage.css";
import LoadButton from "../components/LoadButton";
//import { searchOneFilter } from "../backend/server.js";
import {transformData} from "../libs/apiLib";

//Page user can search for songs based on different measures
export default function SearchPage(props) {
  const [slider1Val, setSlider1Val] = useState(0);
  const [slider2Val, setSlider2Val] = useState(70);
  const [slider3Val, setSlider3Val] = useState(0);
  const [slider4Val, setSlider4Val] = useState(0);
  const [showSlider1, setShowSlider1] = useState(true);
  const [showSlider2, setShowSlider2] = useState(true);
  const [showSlider3, setShowSlider3] = useState(true);
  const [showSlider4, setShowSlider4] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleSlider1Change = event => {
    setSlider1Val(event.target.value);
  };

  const handleBtn1Change = event => {
    setShowSlider1(!showSlider1);
  };

  const handleSlider2Change = event => {
    setSlider2Val(event.target.value);
  };

  const handleBtn2Change = event => {
    setShowSlider2(!showSlider2);
  };

  const handleSlider3Change = event => {
    setSlider3Val(event.target.value);
  };

  const handleBtn3Change = event => {
    setShowSlider3(!showSlider3);
  };

  const handleSlider4Change = event => {
    setSlider4Val(event.target.value);
  };

  const handleBtn4Change = event => {
    setShowSlider4(!showSlider4);
  };

  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    //pass values to server.js, have it await the results then load display Page
    const inputs = {
      danceabilty: slider1Val,
      tempo: slider2Val,
      duration: slider3Val,
      valence: slider4Val
    };

    if (!showSlider1) {
      inputs.danceabilty = -1;
    }

    if (!showSlider2) {
      inputs.tempo = -1;
    }

    if (!showSlider3) {
      inputs.duration = -1;
    }

    if (!showSlider4) {
      inputs.valence = -1;
    }

    //can only use await on something that returns a promise
    try {
      const data = transformData(inputs);
      //console.log(results);
      props.history.push({
        pathname: '/results',
        state: { searchParams: data }
      });
    } catch (e) {
      alert(e);
      setIsLoading(false);
    }
  }

  function unAuthPage() {
    return (
        <div className="main-content-header">
          <h1>WELCOME TO <span className="colorchange">RAMBLERFY!</span><br />
            WHERE YOU FIND THE BEST JAMS </h1>
          <h2 className="login">You must be logged in to search</h2>
        </div>
    )
  }

  function AuthPage() {
    return (
        <div className="main-content-header">
          <h2>PICK A GENRE!</h2>

          <div id="container">
            <div className="group">
              <button className="btnOne" onClick={handleBtn1Change}>DANCEABILITY</button>
              {showSlider1
                  ? <div id="btn-one">
                    <div className="slider slider1">
                      <div>
                        <span id="danceability">{slider1Val}</span>
                        <input type="range" className="range1" name defaultValue={slider1Val} min={0} max={100} onMouseMove={handleSlider1Change} onChange={handleSlider1Change} />
                      </div>
                    </div>
                  </div>
                  : <div></div>
              }
            </div>

            <div className="group">
              <button className="btnTwo" onClick={handleBtn2Change}>TEMPO</button>
              {showSlider2
                  ? <div id="btn-two">
                    <div className="slider slider2">
                      <div>
                        <h4>BPM</h4>
                        <span id="tempo">{slider2Val}</span>
                        <input type="range" className="range2" name defaultValue={slider2Val} min={70} max={200} onMouseMove={handleSlider2Change} onChange={handleSlider2Change} />
                      </div>
                    </div>
                  </div>
                  : <div></div>
              }
            </div>

            <div className="group">
              <button className="btnThree" onClick={handleBtn3Change}>DURATION</button>
              {showSlider3
                  ? <div id="btn-three">
                    <div className="slider slider3">
                      <div>
                        <h4>Minutes</h4>
                        <span id="duration">{slider3Val}</span>
                        <input type="range" className="range3" name defaultValue={slider3Val} min={0} max={8} onMouseMove={handleSlider3Change} onChange={handleSlider3Change} />
                      </div>
                    </div>
                  </div>
                  : <div></div>
              }
            </div>

            <div className="group">
              <button className="btnFour" onClick={handleBtn4Change}>VALENCE</button>
              {showSlider4
                  ? <div id="btn-four">
                    <div className="slider slider4">
                      <div>
                        <h4>Sad &lt;--&gt; Happy</h4>
                        <span id="valence">{slider4Val}</span>
                        <input type="range" className="range4" name defaultValue={slider4Val} min={0} max={10} onMouseMove={handleSlider4Change} onChange={handleSlider4Change} />
                      </div>
                    </div>
                  </div>
                  : <div></div>
              }
            </div>

          </div>
          <div className="btn-align">
            <form onSubmit={handleSubmit}>
              <LoadButton
                  block
                  type="submit"
                  bsSize="bg"
                  isLoading={isLoading}
                  disabled={false}
              >
                Search For Jams
              </LoadButton>
            </form>
          </div>
          {/* <button className="btnTwo">Search For Jams</button> */}
        </div>
    )
  }

  return (
      <div className="SearchPage">
        {props.isAuth === false ? unAuthPage() : AuthPage()}
      </div>
  );

}