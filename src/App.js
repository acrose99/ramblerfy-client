import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import './App.css';
import Routes from "./Routes";
import { Jumbotron } from "./components/Jumbotron";
import { Auth } from "aws-amplify";

function App(props) {
  /* useState is a react hook with the format [variable, function]
  ** Whatever is the arguement in the useState function is what the var is set to
  ** Whenever the function like userHasAuth is called, it sets the variable isAuth to whatever is passed to it
  ** React then reloads the whole page. This is a way of managing state variables
  */
  const [isAuth, userHasAuth] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [userCreds, setUserCreds] = useState(null);

  // triggers onLoad the first time app is loaded (empty list of var as param)
  useEffect(() => {
    onLoad();
  }, []);

  // checks browser cache to see if user is already signed in
  async function onLoad() {
    try {
      await Auth.currentSession();
      userHasAuth(true);
      const userCreds = await Auth.currentUserInfo();
      setUserCreds(userCreds);
    }
    catch(e) {
      if (e !== 'No current user') {
        alert(e);
      }
    }

    setIsAuthenticating(false);
  }

  // logs out user
  async function handleLogout() {
    await Auth.signOut();
    userHasAuth(false);
    setUserCreds(null);
    props.history.push("/login");
  }

  return (
    !isAuthenticating &&
    <div className="App-container">
      <header>
        <nav>
          <div className="row clearfix">
            <LinkContainer to="/">
              <img src={require("./images/android-chrome-512x512.png")} className="logo" />
            </LinkContainer>
            {isAuth
              ? <ul
                className="main-nav animated slideInRight"
                id="check-status"
                >
                  <NavItem onClick={handleLogout}>Logout</NavItem>
                  <LinkContainer to="/settings">
                    <li><a href="#">SETTINGS</a></li>
                  </LinkContainer>
                </ul>

              : <>
                  <ul className="main-nav animated slideInRight" id="check-status">
                    <li><a href="#">MUSIC</a></li>
                    <LinkContainer to="/signup">
                      <li><a href="#">SIGN UP</a></li>
                    </LinkContainer>
                    <LinkContainer to="/login">
                      <li><a href="#">LOGIN</a></li>
                    </LinkContainer>
                    <li><a href="#">CONTACT US</a></li>
                  </ul>
                </>
            }
            <a href="#" className="movable-icon" onclick="slideshow()"> <i className="fa fa-align-justify" /> </a>
          </div>
        </nav>
        { /*this handles all components rendered under the navbar */ }
        <Routes appProps={{ isAuth, userHasAuth, userCreds, setUserCreds }} />
      </header>
    </div>
  );
}

/* driver connection example
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://<username>:<password>@ramblerpy-5rd9x.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
*/

export default withRouter(App);
