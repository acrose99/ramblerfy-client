import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NfError from "./containers/NfError";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import AppliedRoute from "./components/AppliedRoute";
import Documentation from "./containers/Documentation";

export default function Routes({ appProps }) {
  return (
    <Switch>

      <AppliedRoute path="/" exact component={Home} appProps={appProps} />

      { /* Route to Login page */ }
      <AppliedRoute path="/login" exact component={Login} appProps={appProps} />

      { /* Route to Signup page */ }
      <AppliedRoute path="/signup" exact component={Signup} appProps={appProps} />

      { /* Route to Documentation page */ }
      <AppliedRoute path="/documentation" exact component={Documentation} appProps={appProps} />
      { /* Redirects to 404 error for any route that doesnt match */ }
      <Route component={NfError}/>
    </Switch>
  );
}
