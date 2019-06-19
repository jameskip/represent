import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import Routes from './routes'
import './App.css'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#38a3dc'
    },
    secondary: {
      main: '#f44336'
    },
    background: {
      default: '#F6F8FA'
    }
  }
})

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <CssBaseline />
        <Routes />
      </div>
    </MuiThemeProvider>
  )
}

export default App
