import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import AccountCircle from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles((theme) => ({
  card: {
    minWidth: 275,
    justifyContent: "center",
    alignContent: "center",
    flexGrow: 1,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  links: {
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "none",
    color: theme.palette.primary.main,
  },
  avatar: {
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 12,
  },
  party: {
    fontSize: 14,
    float: "left",
  },
}));

const RepCard = (props) => {
  const classes = useStyles();
  const member = props.member;

  return (
    <Grid item xs>
      <Card className={classes.card}>
        <CardContent>
          <Typography
            className={classes.party}
            color="textSecondary"
            gutterBottom
          >
            {member.state} {member.party}
          </Typography>
          <Link className={classes.links} to="/profile">
            <Grid container justify="center" alignItems="center">
              <Avatar className={classes.avatar}>
                <AccountCircle />
              </Avatar>
            </Grid>
            <Typography variant="h5" component="h2">
              {member.first_name} {member.last_name}
            </Typography>
          </Link>
          <Typography className={classes.pos} color="textSecondary">
            {member.title}
          </Typography>
        </CardContent>

        <CardActions className={classes.links}>
          <Button
            rel="noopener noreferrer"
            target="_blank"
            href={`https://twitter.com/${member.twitter_account}`}
            size="small"
          >
            Twitter
          </Button>
          <Button
            rel="noopener noreferrer"
            target="_blank"
            href={`https://facebook.com/${member.facebook_account}`}
            size="small"
          >
            Facebook
          </Button>
          <Button
            rel="noopener noreferrer"
            target="_blank"
            href={`https://youtube.com/${member.youtube_account}`}
            size="small"
          >
            YouTube
          </Button>
          <Button
            rel="noopener noreferrer"
            target="_blank"
            href={member.url}
            size="small"
          >
            Website
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default RepCard;
