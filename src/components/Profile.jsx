import React from 'react' // eslint-disable-line
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper' // eslint-disable-line
import Typography from '@material-ui/core/Typography' // eslint-disable-line

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    flexGrow: 1,
    position: 'relative',
    top: 60
  }
}))

const PaperSheet = props => {
  const classes = useStyles()

  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          This is a sheet of paper.
        </Typography>
        <Typography component="p">
          Paper can be used to build surface or other elements for your application.
        </Typography>
      </Paper>
    </div>
  )
}

export default PaperSheet
