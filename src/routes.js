import React from 'react'
import { Route, HashRouter } from 'react-router-dom'
import MenuAppBar from './components/MenuAppBar'
import SenateList from './components/SenateList'

export default props => (
  <HashRouter>
    <Route path='/' component={MenuAppBar} />
    <Route path='/' component={SenateList} />

  </HashRouter>
)
