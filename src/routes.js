import React from "react";
import { Route, HashRouter, Switch } from "react-router-dom";
import MenuAppBar from "./components/MenuAppBar";
import CardBoard from "./components/CardBoard";
import Profile from "./components/Profile";

const HomeRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(routeProps) => (
      <>
        <MenuAppBar {...routeProps} />
        <CardBoard {...routeProps} />
      </>
    )}
  />
);

export default (props) => (
  <HashRouter>
    <Switch>
      <Route exact path="/" render={HomeRoute} />
      <Route path="/profile" component={Profile} />
    </Switch>
  </HashRouter>
);
