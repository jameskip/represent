import React from 'react'
import { Route, HashRouter, Switch } from 'react-router-dom'
import MenuAppBar from './components/MenuAppBar'
import SenateList from './components/SenateList'
import HouseList from './components/HouseList'
import Profile from './components/Profile'

const HomeRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={routeProps => (
    <>
      <MenuAppBar {...routeProps} />
      <SenateList {...routeProps} />
      <HouseList {...routeProps} />
    </>
  )}/>
)

export default props => (
  <HashRouter>
    <Switch>
      <Route path='/' render={HomeRoute} />
      <Route path='/profile' component={Profile} />
    </Switch>
  </HashRouter>
)
