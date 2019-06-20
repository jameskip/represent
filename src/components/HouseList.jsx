import React, { useEffect, useState } from 'react' // eslint-disable-line
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography' // eslint-disable-line
import Grid from '@material-ui/core/Grid' // eslint-disable-line

import RepCard from './RepCard' // eslint-disable-line

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    flexGrow: 1,
    position: 'relative',
    top: 60
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
}))

const HouseList = props => {
  const classes = useStyles()
  const [house, sethouse] = useState()
  const options = { headers: { 'X-API-Key': 'JSp1AQhdSIuQQssE07bf5bsDT7HTpPDVQLAda1nx' }, mode: 'cors' }

  useEffect(() => {
    console.log(house)
    if (!house) {
      fetch('https://api.propublica.org/congress/v1/116/house/members.json', options) // eslint-disable-line
        .then(house => house.json())
        .then(houseJson => sethouse({ house: houseJson.results[0].members }))
        .catch(error => console.error(error))
    }
  })

  const renderhouse = members => members.house.map((curr, i) => <RepCard key={i} member={curr} />)

  return (
    <div className={classes.root}>
      <Typography variant="h2" gutterBottom>
        House
      </Typography>
      <Grid container spacing={3} justify="center" alignItems="center">
        {house && renderhouse(house)}
      </Grid>
    </div>

  )
}

export default HouseList
