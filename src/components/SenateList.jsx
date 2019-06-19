import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import RepCard from './RepCard'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: 24
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
}))

const SenateList = props => {
  const classes = useStyles()
  const [senate, setSenate] = useState()
  const options = { headers: { 'X-API-Key': 'JSp1AQhdSIuQQssE07bf5bsDT7HTpPDVQLAda1nx' }, mode: 'cors' }

  useEffect(() => {
    console.log(senate)
    if (!senate) {
      fetch('https://api.propublica.org/congress/v1/116/senate/members.json', options)
        .then(senate => senate.json())
        .then(senateJson => setSenate({ senate: senateJson.results[0].members }))
        .catch(error => console.error(error))
    }
  })

  const renderSenate = members => members.senate.map((curr, i) => <RepCard key={i} member={curr} />)

  return (
    <div className={classes.root}>
      <Grid container spacing={3} justify="center" alignItems="center">
        {senate && renderSenate(senate)}
      </Grid>
    </div>

  )
}

export default SenateList
