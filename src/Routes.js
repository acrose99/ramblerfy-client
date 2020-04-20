import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NfError from "./containers/NfError";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import AppliedRoute from "./components/AppliedRoute";
import Settings from "./containers/Settings";

export default function Routes({ appProps }) {
  return (
    <Switch>

      <AppliedRoute path="/" exact component={Home} appProps={appProps} />

      { /* Route to Login page */ }
      <AppliedRoute path="/login" exact component={Login} appProps={appProps} />

      { /* Route to Signup page */ }
      <AppliedRoute path="/signup" exact component={Signup} appProps={appProps} />

      { /* Route to Settings page */ }
      <AppliedRoute path="/settings" exact component={Settings} appProps={appProps} />

      { /* Redirects to 404 error for any route that doesnt match */ }
      <Route component={NfError}/>
    </Switch>
  );
}
