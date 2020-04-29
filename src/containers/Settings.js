import React, { useState, useEffect } from "react";
import { Auth } from "aws-amplify";
import "./Settings.css";

export default function Settings(props) {
  //const [userCreds, setUserCreds] = useState(null);
  const userCreds = props.userCreds;


  /*
  //fetches the current user info on settings load
  async function onLoad() {
    try {
      const userCreds = await Auth.currentUserInfo();
      setUserCreds(userCreds);
      return true;
    }
    catch(e) {
        alert(e);
        return true;
    }
  }
  */

  //checks to make sure user info has loaded and returns component
  function accountInfo() {
    /*
    var username = null;
    if(userCreds === null) {
      username = "loading...";
    } else username = userCreds.attributes.email;

    return (
      <div className="main-content-header">
          <h1>My Account:<br />
              {username} </h1>
      </div>
    );
    */
    return (
      <div className="main-content-header">
          <h1>My Account:<br />
              {userCreds !== null ? userCreds.attributes.email : "none"} </h1>
      </div>
    );
  }

  /*
  return (
    <div className="Settings">
      {onLoad() && accountInfo()}
    </div>
  );
  */
  return (
    <div className="Settings">
      {accountInfo()}
    </div>
  );

}
