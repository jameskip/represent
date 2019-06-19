import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles({
  card: {
    minWidth: 275
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
})

const RepCard = (props) => {
  const classes = useStyles()
  console.log('RepCard Mount: ', { props })
  const member = props.member
  if (props.senate) console.log(props.senate.senate[0])

  return (
    <Grid item xs={3}>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {member.party}
          </Typography>
          <Typography variant="h5" component="h2">
            {member.first_name} {member.last_name}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {member.title}
          </Typography>
          <Typography variant="body2" component="p">
          well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default RepCard
