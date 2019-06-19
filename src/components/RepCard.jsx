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
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  links: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const RepCard = props => {
  console.log('RepCard Mount: ', { props })
  const classes = useStyles()
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

        <CardActions className={classes.links}>
          <Button rel="noopener noreferrer" target="_blank" href={`https://twitter.com/${member.twitter_account}`} size="small">Twitter</Button>
          <Button rel="noopener noreferrer" target="_blank" href={`https://facebook.com/${member.facebook_account}`} size="small">Facebook</Button>
          <Button rel="noopener noreferrer" target="_blank" href={`https://youtube.com/${member.youtube_account}`} size="small">YouTube</Button>
          <Button rel="noopener noreferrer" target="_blank" href={member.url} size="small">Website</Button>
        </CardActions>

      </Card>
    </Grid>
  )
}

export default RepCard
