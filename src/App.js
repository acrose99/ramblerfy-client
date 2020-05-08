import React, {useEffect, useState} from "react";
import {withRouter} from "react-router-dom";
import './App.css';
import Routes from "./Routes";
import {Auth} from "aws-amplify";
import {makeStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import SvgIcon from "@material-ui/core/SvgIcon";
import {ReactComponent as Icon} from "./images/icon4.svg";
import Button from "@material-ui/core/Button";

function App(props) {
  /* useState is a react hook with the format [variable, function]
  ** Whatever is the arguement in the useState function is what the var is set to
  ** Whenever the function like userHasAuth is called, it sets the variable isAuth to whatever is passed to it
  ** React then reloads the whole page. This is a way of managing state variables
  */
  const [isAuth, userHasAuth] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [userCreds, setUserCreds] = useState(null);
  const [userResults, setUserResults] = useState(null);

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    linkButton: {
      backgroundColor: "#57336a",
      color: "white",
      fontSize: 12,
      margin: 25,
    },
    toolbar: {
      height: 100,

    },
    icon: {
      width: 100,
      height: 100,
    },
    title: {
      flexGrow: 1,
    },
  }));
  const classes = useStyles();
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

      {isAuth
          ? <div className={classes.root}>
            <AppBar position="static">
              <Toolbar className={classes.toolbar}>
                <IconButton className={classes.menuButton} href="/" edge={"start"}>
                  <SvgIcon role={"img"} className={classes.icon} component={Icon} viewBox="0 0 50 50">

                  </SvgIcon>
                </IconButton>
                <Button onClick={handleLogout} className={classes.linkButton} variant="contained"  href="/login">
                  Logout
                </Button>
                <Button className={classes.linkButton} variant="contained"  href="/settings">
                  Settings
                </Button>
                <Button className={classes.linkButton} variant="contained"  href="/documentation">
                  Documentation
                </Button>
                <Button className={classes.linkButton} variant="contained"  href="/contact">
                  Contact Us
                </Button>
                <Button className={classes.linkButton} variant="contained"  href="/team">
                  About Us
                </Button>
              </Toolbar>
            </AppBar>
          </div>

          : <>
            <div className={classes.root}>
              <AppBar position="static">
                <Toolbar className={classes.toolbar}>
                  <IconButton className={classes.menuButton} href="/" edge={"start"}>
                    <SvgIcon role={"img"} className={classes.icon} component={Icon} viewBox="0 0 50 50">

                    </SvgIcon>
                  </IconButton>
                  <Button className={classes.linkButton} variant="contained"  href="/login">
                    Login
                  </Button>
                  <Button className={classes.linkButton} variant="contained"  href="/settings">
                    Settings
                  </Button>
                  <Button className={classes.linkButton} variant="contained"  href="/documentation">
                    Documentation
                  </Button>
                  <Button className={classes.linkButton} variant="contained"  href="/contact">
                    Contact Us
                  </Button>
                  <Button className={classes.linkButton} variant="contained"  href="/team">
                    About Us
                  </Button>
                </Toolbar>
              </AppBar>
            </div>
          </>
      }
        { /*this handles all components rendered under the navbar */ }
        <Routes appProps={{ isAuth, userHasAuth, userCreds, setUserCreds, userResults, setUserResults }} />
      <a href="#" className="movable-icon" onClick="slideshow()"> <i className="fa fa-align-justify"/> </a>
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
