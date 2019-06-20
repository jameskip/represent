import React, { useState, useEffect } from 'react'
import { fade, makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar' // eslint-disable-line
import Toolbar from '@material-ui/core/Toolbar' // eslint-disable-line
import Typography from '@material-ui/core/Typography' // eslint-disable-line
import IconButton from '@material-ui/core/IconButton' // eslint-disable-line
import MenuIcon from '@material-ui/icons/Menu' // eslint-disable-line
import AccountCircle from '@material-ui/icons/AccountCircle' // eslint-disable-line
import Switch from '@material-ui/core/Switch' // eslint-disable-line
import FormControlLabel from '@material-ui/core/FormControlLabel' // eslint-disable-line
import FormGroup from '@material-ui/core/FormGroup' // eslint-disable-line
import MenuItem from '@material-ui/core/MenuItem' // eslint-disable-line
import Menu from '@material-ui/core/Menu' // eslint-disable-line
import SearchIcon from '@material-ui/icons/Search' // eslint-disable-line
import InputBase from '@material-ui/core/InputBase' // eslint-disable-line

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
  const [auth] = useState(true)
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const [search, setSearch] = useState('')

  const handleChange = e => setSearch(e.target.value)
  const handleMenu = e => setAnchorEl(e.currentTarget)
  const handleClose = () => setAnchorEl(null)

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
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ 'aria-label': 'Search' }}
              onChange={handleChange}
            />
          </div>
          {auth && (
            <div className={classes.icon}>
              <IconButton
                aria-label="Account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'left'
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left'
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default MenuAppBar
