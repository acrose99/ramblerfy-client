import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NfError from "./containers/NfError";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import Team from "./containers/Team";
import AppliedRoute from "./components/AppliedRoute";
import Settings from "./containers/Settings";
import ForgotPassword from "./containers/ForgotPassword";
import SearchPage from "./containers/SearchPage";
import ResultsPage from "./containers/ResultsPage";
import Contact from "./containers/Contact";
import Documentation from "./containers/Documentation";

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

      { /* Route to password reset page */ }
      <AppliedRoute path="/forgotpassword" exact component={ForgotPassword} appProps={appProps} />

      { /* Route to song search page */ }
      <AppliedRoute path="/searchpage" exact component={SearchPage} appProps={appProps} />

      { /* Route to results page */ }
      <AppliedRoute path="/results" exact component={ResultsPage} appProps={appProps} />

      { /* Route to contact page */ }
      <AppliedRoute path="/contact" exact component={Contact} appProps={appProps} />

      { /* Route to team page */ }
      <AppliedRoute path="/team" exact component={Team} appProps={appProps} />

      { /* Route to Documentation page */ }
      <AppliedRoute path="/documentation" exact component={Documentation} appProps={appProps} />

      { /* Redirects to 404 error for any route that doesnt match */ }
      <Route component={NfError}/>
    </Switch>
  );
}
