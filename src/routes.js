import React from "react";
import { Route, HashRouter, Switch } from "react-router-dom";
import CardBoard from "./components/CardBoard";
import Profile from "./components/Profile";

const HomeRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(routeProps) => (
      <>
        <CardBoard {...routeProps} />
      </>
    )}
  />
);

const homeExport =(props) => (
  <HashRouter>
    <Switch>
      <Route exact path="/" render={HomeRoute} />
      <Route path="/profile" component={Profile} />
    </Switch>
  </HashRouter>
);

export default homeExport
