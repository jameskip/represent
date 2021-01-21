import React, { useState, useEffect } from 'react'
import { fade, makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar' 
import Toolbar from '@material-ui/core/Toolbar' 
import Typography from '@material-ui/core/Typography' 
import IconButton from '@material-ui/core/IconButton' 
import MenuIcon from '@material-ui/icons/Menu' 
import AccountCircle from '@material-ui/icons/AccountCircle' 
import Switch from '@material-ui/core/Switch' 
import FormControlLabel from '@material-ui/core/FormControlLabel' 
import FormGroup from '@material-ui/core/FormGroup' 
import MenuItem from '@material-ui/core/MenuItem' 
import Menu from '@material-ui/core/Menu' 
import SearchIcon from '@material-ui/icons/Search' 
import InputBase from '@material-ui/core/InputBase' 

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    position: 'fixed',
    width: '100%',
    zIndex: 1100
  },
  bar: {
    background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
    width: '100%'
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    marginRight: theme.spacing(2)
  },
  search: {
    position: 'relative',
    right: '.5rem',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto'
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200
      }
    }
  }
}))

const MenuAppBar = () => {
  const classes = useStyles()
  const [search, setSearch] = useState('')

  const handleChange = e => setSearch(e.target.value)

  useEffect(() => {
    console.log(search)
  })

  return (
    <div className={classes.root}>
      <AppBar className={classes.bar} position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Represent.
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{ root: classes.inputRoot, input: classes.inputInput }}
              inputProps={{ 'aria-label': 'Search' }}
              onChange={handleChange}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default MenuAppBar
