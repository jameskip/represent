import React from 'react'
import { Route, HashRouter } from 'react-router-dom'
import MenuAppBar from './components/MenuAppBar'
import SenateList from './components/SenateList'
import Profile from './components/Profile'

export default props => (
  <HashRouter>
    <Route path='/' component={MenuAppBar} />
    <Route exact path='/' component={SenateList} />
    <Route path='/profile' component={Profile} />
  </HashRouter>
)
